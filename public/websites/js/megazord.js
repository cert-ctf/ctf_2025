// megazord.js – final mit Ready-Leuchten

document.addEventListener('DOMContentLoaded', () => {
  // UI-Referenzen
  const consoleEl   = document.getElementById('console');
  const cards       = [...document.querySelectorAll('.ranger-card')]; // erx, epa, kim, tim
  const checkBtn    = document.getElementById('checkBtn');
  const flagBox     = document.getElementById('flagBox');
  const flagValue   = document.getElementById('flagValue');
  const copyBtn     = document.getElementById('copyBtn');

  const centerLock  = document.getElementById('centerLock');
  const lockGlyph   = document.getElementById('lockGlyph');

  // Audios
  const morphAudio   = document.getElementById('morphAudio');
  const levelUpAudio = document.getElementById('levelUpAudio');
  const errorAudio   = document.getElementById('errorAudio');
  if (levelUpAudio) levelUpAudio.volume = 0.9;
  if (errorAudio)   errorAudio.volume   = 0.85;

  // Server-Konfiguration – ANPASSEN!
  const verifyUrl = '/tig/verify';

  // Helpers: Energy + Status
  function setEnergy(card, pct){
    const energy = card.querySelector('.energy');
    const fill   = card.querySelector('.fill');
    if (energy) (pct > 0 ? energy.classList.add('active') : energy.classList.remove('active'));
    if (fill)   fill.style.width = Math.max(0, Math.min(100, pct)) + '%';
  }

  function setStatusLabel(card, state){
    const label = card.querySelector('.status');
    if (!label) return;
    label.classList.remove('ok','err','empty','loading');
    if (state === 'ok'){ label.textContent = 'Korrekt'; label.classList.add('ok'); }
    else if (state === 'err'){ label.textContent = 'Falsch'; label.classList.add('err'); }
    else if (state === 'loading'){ label.textContent = 'Prüfe…'; label.classList.add('loading'); }
    else { label.textContent = '—'; label.classList.add('empty'); }
  }

  // Wedges zeichnen
  function polar(cx, cy, r, ang){ return { x: cx + r*Math.cos(ang), y: cy + r*Math.sin(ang) }; }
  function wedgePath(cx, cy, r, startDeg, endDeg){
    const a0 = (startDeg-90) * Math.PI/180;
    const a1 = (endDeg-90)   * Math.PI/180;
    const p0 = polar(cx, cy, r, a0);
    const p1 = polar(cx, cy, r, a1);
    const largeArc = (endDeg - startDeg) > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${p0.x} ${p0.y} A ${r} ${r} 0 ${largeArc} 1 ${p1.x} ${p1.y} Z`;
  }
  const wedges = {
    erx: document.getElementById('w-erx'),
    epa: document.getElementById('w-epa'),
    kim: document.getElementById('w-kim'),
    tim: document.getElementById('w-tim'),
  };
  (function buildWedges(){
    const cx=100, cy=100, r=88; // Radius passend zu deinem SVG-Kreis
    if (wedges.erx) wedges.erx.setAttribute('d', wedgePath(cx,cy,r,   0,  90));
    if (wedges.epa) wedges.epa.setAttribute('d', wedgePath(cx,cy,r,  90, 180));
    if (wedges.kim) wedges.kim.setAttribute('d', wedgePath(cx,cy,r, 180, 270));
    if (wedges.tim) wedges.tim.setAttribute('d', wedgePath(cx,cy,r, 270, 360));
  })();

  // Sequenz
  function runSequence(){
    consoleEl?.classList.add('focus-blur');
    centerLock?.classList.add('visible');
    const order = [wedges.erx, wedges.epa, wedges.kim, wedges.tim].filter(Boolean);
    order.forEach((w,i)=> setTimeout(()=> w.classList.add('visible'), i*160));
    const totalDelay = 160*order.length + 300;
    setTimeout(()=>{
      centerLock?.classList.add('closed');
      if (lockGlyph) lockGlyph.textContent = '🔒';
      try { morphAudio && (morphAudio.currentTime = 0, morphAudio.play().catch(()=>{})); } catch(e){}
      if (checkBtn) checkBtn.style.display = 'none';
      if (flagBox)  flagBox.style.display  = 'inline-flex';
    }, totalDelay);
  }

  function resetVisuals(){
    consoleEl?.classList.remove('focus-blur');
    centerLock?.classList.remove('visible','closed');
    if (lockGlyph) lockGlyph.textContent = '🔓';
    Object.values(wedges).forEach(w => w?.classList.remove('visible'));
    if (flagBox)  flagBox.style.display  = 'none';
    if (checkBtn) checkBtn.style.display = 'inline-block';
  }

  // Netzwerk mit Timeout
  function fetchWithTimeout(url, options={}, ms=8000){
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject)=> setTimeout(()=> reject(new Error('timeout')), ms))
    ]);
  }

  // Tokens aus Inputs holen (für Gesamt-Verify)
  function collectTokens(){
    const payload = {};
    cards.forEach(card=>{
      const id = card.dataset.id;          // erx, epa, kim, tim
      const input = card.querySelector('.code');
      payload[id] = (input?.value || '').trim();
    });
    return payload;
  }

  // Ready-State Logik
  function allCardsActive() {
    return cards.length === 4 && cards.every(c => c.dataset.active === '1');
  }
  function updateCheckBtnReadyState() {
    if (!checkBtn) return;
    if (allCardsActive()) checkBtn.classList.add('ready');
    else checkBtn.classList.remove('ready');
  }

  // NUR EINE Karte updaten (Single-Verify)
  function applyVerificationToCardSingle(card, ok){
    const btn = card.querySelector('.morph-btn');
    btn?.classList.remove('pulse-ok','pulse-err'); void (btn?.offsetWidth);
    btn?.classList.add(ok ? 'pulse-ok' : 'pulse-err');

    if (ok){
      setEnergy(card, 100);
      setStatusLabel(card, 'ok');
      card.dataset.active = '1';
      try { levelUpAudio && (levelUpAudio.currentTime = 0, levelUpAudio.play().catch(()=>{})); } catch(e){}
    }else{
      setEnergy(card, 0);
      setStatusLabel(card, 'err');
      card.dataset.active = '0';
      try { errorAudio && (errorAudio.currentTime = 0, errorAudio.play().catch(()=>{})); } catch(e){}
    }

    // Button-Ready aktualisieren
    updateCheckBtnReadyState();
  }

  // ALLE Karten updaten (Gesamt-Verify)
  function applyVerificationToCardsAll(data){
    cards.forEach(card=>{
      const id = card.dataset.id;
      const ok = Boolean(data[id]);
      applyVerificationToCardSingle(card, ok);
    });
    updateCheckBtnReadyState();
  }

  // Einzel-Verify beim Klick auf MORPH
  cards.forEach(card=>{
    const id    = card.dataset.id;           // erx | epa | kim | tim
    const input = card.querySelector('.code');
    const btn   = card.querySelector('.morph-btn');

    // Enter prüft nur diese Karte
    input?.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter'){
        e.preventDefault();
        btn?.click();
      }
    });

    // Tippen: nur diese Karte zurücksetzen
    input?.addEventListener('input', ()=>{
      setEnergy(card, 0);
      setStatusLabel(card, 'empty');
      card.dataset.active = '0';
      updateCheckBtnReadyState(); // Ready entfernen, wenn geändert
      // Optional: zentrale Visuals zurücknehmen
      // resetVisuals();
    });

    // Klick: nur diese Karte prüfen
    btn?.addEventListener('click', async (e)=>{
      e.stopPropagation(); // isoliert das Event, verhindert Kaskade
      const val = (input?.value || '').trim();

      setStatusLabel(card, 'loading');

      try{
        const response = await fetchWithTimeout(baseURL + verifyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ [id]: val }) // nur diese Domain senden
        });

        if (response.status === 200){
          const data = await response.json();
          const ok = data?.[id] === true;
          applyVerificationToCardSingle(card, ok);
        } else if (response.status === 400){
          applyVerificationToCardSingle(card, false);
        } else {
          applyVerificationToCardSingle(card, false);
          console.warn('Single verify: unexpected status', response.status);
        }
      }catch(err){
        applyVerificationToCardSingle(card, false);
        console.warn('Single verify: network error', err);
      }
    });
  });

  // MEGAZORD PRÜFEN: Gesamt-Verify
  checkBtn?.addEventListener('click', async ()=>{
    // Visual “Prüfe…” dezent
    cards.forEach(card => setStatusLabel(card, 'loading'));

    const payload = collectTokens();

    try{
      const response = await fetchWithTimeout(baseURL + verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if(response.status === 200){
        const data = await response.json();
        applyVerificationToCardsAll(data);

        const allOk = ['erx','epa','kim','tim'].every(k => data[k] === true);
        if(allOk && data.flag){
          flagValue.textContent = String(data.flag);
          checkBtn.classList.remove('pulse-ok'); void checkBtn.offsetWidth;
          checkBtn.classList.add('pulse-ok');
          runSequence();
          startFireworks();
        }else{
          checkBtn.classList.remove('pulse-err'); void checkBtn.offsetWidth;
          checkBtn.classList.add('pulse-err');
          try { errorAudio && (errorAudio.currentTime = 0, errorAudio.play().catch(()=>{})); } catch(e){}
          flagBox.style.display = 'none';
          checkBtn.style.display = 'inline-block';
        }
      }else if(response.status === 400){
        // ungültig
        cards.forEach(card=>{
          setEnergy(card, 0);
          setStatusLabel(card, 'err');
          card.dataset.active = '0';
        });
        checkBtn.classList.remove('pulse-err'); void checkBtn.offsetWidth;
        checkBtn.classList.add('pulse-err');
        try { errorAudio && (errorAudio.currentTime = 0, errorAudio.play().catch(()=>{})); } catch(e){}
        resetVisuals();
      }else{
        // Serverfehler
        cards.forEach(card => setStatusLabel(card, 'empty'));
        try { errorAudio && (errorAudio.currentTime = 0, errorAudio.play().catch(()=>{})); } catch(e){}
      }
    }catch(err){
      // Netzwerkfehler/Timeout
      cards.forEach(card=>{
        setEnergy(card, 0);
        setStatusLabel(card, 'err');
        card.dataset.active = '0';
      });
      try { errorAudio && (errorAudio.currentTime = 0, errorAudio.play().catch(()=>{})); } catch(e){}
      console.warn('Verify error', err);
    }
  });

  // Copy to clipboard
  copyBtn?.addEventListener('click', async ()=>{
    const text = flagValue?.textContent.trim() || '';
    try{
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied';
      setTimeout(()=>{ copyBtn.innerHTML = '<span class="icon" aria-hidden="true"></span>Copy'; }, 1200);
    }catch(e){
      const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
      ta.select(); try{ document.execCommand('copy'); }catch(_){}
      ta.remove();
      copyBtn.textContent = 'Copied';
      setTimeout(()=>{ copyBtn.innerHTML = '<span class="icon" aria-hidden="true"></span>Copy'; }, 1200);
    }
  });
});
