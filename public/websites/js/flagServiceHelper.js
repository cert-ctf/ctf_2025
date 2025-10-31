function computeWaSolution(value) {
  const keys = [value+'-wa-1', value+'-wa-2', value+'-wa-3', value+'-wa-4', value+'-wa-5'];

  function toNumber(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
  }

  // Summe bilden
  const sum = keys
    .map(k => toNumber(localStorage.getItem(k)))
    .reduce((acc, n) => acc + n, 0);

  // Modulo 100000 (immer positiv)
  const modValue = ((sum % 100000) + 100000) % 100000;

  // Ergebnis speichern
  localStorage.setItem(value+'-wa-solution',modValue);

  return modValue;

};

function clearStorage() {
  // Regex für Keys wie "kim-wa-1" ... "kim-wa-5" ... "kim-wa-solution"
  const re = /^([a-zA-Z0-9_-]+)-wa-(\d+|solution)$/;

  // 1) Präfix ermitteln
  let prefix = null;

  // Versuch: aus globalem localStorageKey (falls vorhanden)
  try {
    if (typeof localStorageKey === 'string' && localStorageKey) {
      const m = localStorageKey.match(re);
      if (m) prefix = m[1];
    }
  } catch (_) {}

  // Fallback: im localStorage nach passendem Key suchen
  if (!prefix) {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      const m = k && k.match(re);
      if (m) { prefix = m[1]; break; }
    }
  }

  if (!prefix) {
    console.warn('Kein Präfix gefunden. Erwartet Keys wie "<prefix>-wa-1" oder "<prefix>-wa-solution".');
    return [];
  }

  // 2) Ziel-Keys aufbauen und löschen
  const keys = [
    `${prefix}-wa-1`,
    `${prefix}-wa-2`,
    `${prefix}-wa-3`,
    `${prefix}-wa-4`,
    `${prefix}-wa-5`,
    `${prefix}-wa-solution`
  ];

  const removed = [];
  keys.forEach(k => {
    if (localStorage.getItem(k) !== null) {
      localStorage.removeItem(k);
      removed.push(k);
    }
  });

  console.log(`Präfix: "${prefix}" – gelöscht:`, removed.length ? removed : '(nichts gefunden)');
 //return removed;
}
// Beispiel:
// clearWaStorageAuto();


// listStorage------------------------------------------------------------------------
function listStorage() {
  // 1) Präfix automatisch ermitteln
  let prefix = null;
  const re = /^([a-zA-Z0-9_-]+)-wa-(\d+|solution)$/; // z. B. kim-wa-1 .. kim-wa-5 .. kim-wa-solution

  // Versuch 1: Suche den "localStorageKey" in globalem Scope (falls im Produkt als const definiert)
  try {
    if (typeof localStorageKey === 'string' && localStorageKey) {
      const m = localStorageKey.match(re);
      if (m) prefix = m[1];
    }
  } catch (_) { /* ignorieren */ }

  // Versuch 2: Falls kein Treffer: scanne localStorage nach einem passenden Key
  if (!prefix) {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      const m = k && k.match(re);
      if (m) {
        prefix = m[1];
        break;
      }
    }
  }

  if (!prefix) {
    console.warn('Kein Präfix gefunden. Erwartet Keys wie "<prefix>-wa-1" oder "<prefix>-wa-solution".');
    return [];
  }

  // 2) Alle passenden Einträge sammeln
  const results = [];
  const startsWith = `${prefix}-`;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(startsWith)) {
      results.push({ key, value: localStorage.getItem(key) });
    }
  }

  // 3) Ausgabe
  if (results.length) {
    console.log(`Gefundener Präfix: "${prefix}"`);
    console.table(results);
  } else {
    console.log(`Keine Einträge mit Präfix "${prefix}" gefunden.`);
  }

  return results;
}

// !listStorage------------------------------------------------------------------------



// checkStorage------------------------------------------------------------------------
function initFlagUI() {
  // Idempotent-Guard
  if (initFlagUI.__initialized) return;
  initFlagUI.__initialized = true;

  // DOM
  const formEl = document.getElementById('solutionForm');
  const inputEl = document.getElementById('solution');
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');
  const apiResponseEl = document.getElementById('api-response');

  if (!formEl || !inputEl) {
    console.warn('[Flag] Formular-Elemente nicht gefunden. Abbruch.');
    return;
  }

  let submitBtn = formEl.querySelector('.fx-btn');
  let submitLabel = submitBtn ? submitBtn.querySelector('.fx-btn-label') : null;

  function handleNextNavigate() {
    if (typeof nextQuestionURL === 'string' && nextQuestionURL.length > 0) {
      window.location.href = nextQuestionURL;
    } else {
      console.warn('[Flag] nextQuestionURL ist nicht gesetzt.');
    }
  }

  // UI nach Token-Status setzen
  function applySuccessUI(storedToken) {
    if (errorEl) errorEl.textContent = '';
    // if (successEl) successEl.style.display = 'block';

    inputEl.classList.remove('fx-input--error');
    inputEl.classList.add('fx-input--success');
    inputEl.readOnly = true;
    inputEl.setAttribute('aria-readonly', 'true');

    if (submitBtn) {
      submitBtn.classList.add('fx-btn--next');
      if (submitLabel) submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';

      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = 'none';

      submitBtn.type = 'button';
      const cloned = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(cloned, submitBtn);
      submitBtn = cloned;
      submitLabel = submitBtn.querySelector('.fx-btn-label');
      submitBtn.addEventListener('click', handleNextNavigate, { once: true });
    }

    // Optional Token anzeigen
    // if (apiResponseEl) {
    //   apiResponseEl.textContent = `Der Token ist: ${String(storedToken)}.`;
    //   apiResponseEl.classList.add('token-text');
    // }
  }

  function applyNeutralUI() {
    inputEl.classList.remove('fx-input--success');
    inputEl.readOnly = false;
    inputEl.removeAttribute('aria-readonly');
    inputEl.classList.remove('fx-input--error');
    if (successEl) successEl.style.display = 'none';

    if (submitBtn) {
      submitBtn.classList.remove('fx-btn--next');
      submitBtn.type = 'submit';
      const label = submitBtn.querySelector('.fx-btn-label');
      if (label && label.textContent.includes('Next')) {
        label.textContent = label.textContent.replace('Next', 'Submit');
      }
      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = '';
    }
  }

  /**
   * Prüft localStorage und setzt die UI entsprechend.
   * @param {string} flagKey - nur fürs Logging (z. B. "kim-wa-02")
   */
  function checkStorage(flagKey) {
    const storedToken = localStorage.getItem(localStorageKey);

    if (storedToken && String(storedToken).trim() !== '') {
      applySuccessUI(storedToken);
      return true;
    } else {
      console.warn(`[Flag] Kein Eintrag für "${flagKey}" unter localStorageKey="${localStorageKey}" gefunden.`);
      applyNeutralUI();
      return false;
    }
  }

  // Tipp-Listener nur einmal
  if (!inputEl.__errorListenerAttached__) {
    inputEl.addEventListener('input', () => {
      if (inputEl.classList.contains('fx-input--error')) {
        inputEl.classList.remove('fx-input--error');
      }
    });
    inputEl.__errorListenerAttached__ = true;
  }

  // Submit-Handler nur einmal
  if (!formEl.__submitHandlerAttached__) {
    formEl.addEventListener('submit', async function(event) {
      event.preventDefault();

      if (errorEl) errorEl.textContent = '';
      if (successEl) successEl.style.display = 'none';

      const formData = { solution: inputEl.value };

      try {
        const endpoint = (baseURL?.endsWith('/') ? baseURL : baseURL + '/') + (url?.startsWith('/') ? url.slice(1) : url);
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.status === 200) {
          const data = await response.json();
          if (data.token) localStorage.setItem(localStorageKey, data.token);
          checkStorage(localStorageKey);
        } else if (response.status === 400) {
          if (errorEl) errorEl.textContent = 'Wrong answer.';
          inputEl.classList.remove('fx-input--success');
          inputEl.readOnly = false;
          inputEl.removeAttribute('aria-readonly');
          inputEl.classList.add('fx-input--error');
        } else {
          if (errorEl) errorEl.textContent = 'An unexpected error occurred.';
        }
      } catch (error) {
        if (errorEl) errorEl.textContent = 'Network error: ' + error;
      }
    });
    formEl.__submitHandlerAttached__ = true;
  }

  // Optional: Glow nur einmal
  if (submitBtn && !submitBtn.__glowListenerAttached__) {
    const glow = submitBtn.querySelector('.fx-btn-glow');
    if (glow) {
      submitBtn.addEventListener('mousemove', (e) => {
        const rect = submitBtn.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        glow.style.setProperty('--mx', mx + '%');
        glow.style.setProperty('--my', my + '%');
      });
      submitBtn.__glowListenerAttached__ = true;
    }
  }

  // Initialer Check
  // label für die Konsole: wenn du "kim-wa-02" sehen willst, gib das als Flag-Label mit
  checkStorage(localStorageKey);
}


function initFlagUIImage() {
  if (initFlagUIImage.__initialized) return;
  initFlagUIImage.__initialized = true;

  // DOM-Elemente für die Datei-Variante
  const formEl = document.getElementById('solutionForm');
  const inputEl = document.getElementById('solutionFile'); // Datei-Input
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');
  const apiResponseEl = document.getElementById('api-response');

  if (!formEl || !inputEl) {
    console.warn('[Flag(File)] Formular- oder Datei-Input nicht gefunden. Abbruch.');
    return;
  }

  let submitBtn = formEl.querySelector('.fx-btn');
  let submitLabel = submitBtn ? submitBtn.querySelector('.fx-btn-label') : null;

  function handleNextNavigate() {
    if (typeof nextQuestionURL === 'string' && nextQuestionURL.length > 0) {
      window.location.href = nextQuestionURL;
    } else {
      console.warn('[Flag(File)] nextQuestionURL ist nicht gesetzt.');
    }
  }

  // UI auf Erfolg setzen (analog zu deinem Submit-Erfolgspfad)
  function applySuccessUI(storedToken) {
    if (errorEl) errorEl.textContent = '';

    if (apiResponseEl) {
      apiResponseEl.textContent = `Der Token ist: ${String(storedToken)}.`;
      apiResponseEl.classList.add('token-text'); // CSS: .token-text { color: navy; font-weight: 700; }
    }

    if (successEl) successEl.style.display = 'block';

    inputEl.classList.remove('fx-input--error');
    inputEl.classList.add('fx-input--success');
    inputEl.readOnly = true;
    inputEl.setAttribute('aria-readonly', 'true');

    if (submitBtn) {
      submitBtn.classList.add('fx-btn--next');
      if (submitLabel) submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';

      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = 'none';

      // alte Listener entfernen und Next-Click setzen
      submitBtn.type = 'button';
      const cloned = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(cloned, submitBtn);
      submitBtn = cloned;
      submitLabel = submitBtn.querySelector('.fx-btn-label');

      submitBtn.addEventListener('click', handleNextNavigate, { once: true });
    }
  }

  // UI neutral zurücksetzen
  function applyNeutralUI() {
    inputEl.classList.remove('fx-input--success');
    inputEl.readOnly = false;
    inputEl.removeAttribute('aria-readonly');
    inputEl.classList.remove('fx-input--error');

    if (successEl) successEl.style.display = 'none';
    if (apiResponseEl) {
      apiResponseEl.textContent = '';
      apiResponseEl.classList.remove('token-text');
    }

    if (submitBtn) {
      submitBtn.classList.remove('fx-btn--next');
      submitBtn.type = 'submit';
      const label = submitBtn.querySelector('.fx-btn-label');
      if (label && label.textContent.includes('Next')) {
        label.textContent = label.textContent.replace('Next', 'Submit');
      }
      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = '';
    }
  }

  // Check: Token im Storage → UI setzen
  function checkStorageFile(flagLabel = localStorageKey) {
    const storedToken = localStorage.getItem(localStorageKey);

    if (storedToken && String(storedToken).trim() !== '') {
      applySuccessUI(storedToken);
      return true;
    } else {
      console.warn(`[Flag(File)] Kein Eintrag für "${flagLabel}" unter localStorageKey="${localStorageKey}" gefunden.`);
      applyNeutralUI();
      return false;
    }
  }

  // Optional: Glow-Follow wie im Referenzcode (nur einmal)
  if (submitBtn && !submitBtn.__glowListenerAttached__) {
    const glow = submitBtn.querySelector('.fx-btn-glow');
    if (glow) {
      submitBtn.addEventListener('mousemove', (e) => {
        const rect = submitBtn.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        glow.style.setProperty('--mx', mx + '%');
        glow.style.setProperty('--my', my + '%');
      });
      submitBtn.__glowListenerAttached__ = true;
    }
  }

  // Submit-Handler (Datei-Upload)
  if (!formEl.__submitHandlerAttachedFile__) {
    formEl.addEventListener('submit', async function(event) {
      event.preventDefault();

      // Reset Meldungen und States
      if (errorEl) errorEl.textContent = '';
      if (successEl) successEl.style.display = 'none';
      if (apiResponseEl) {
        apiResponseEl.textContent = '';
        apiResponseEl.classList.remove('token-text');
      }
      inputEl.classList.remove('fx-input--error', 'fx-input--success');
      inputEl.removeAttribute('aria-readonly');
      inputEl.readOnly = false;

      const file = inputEl.files?.[0];
      if (!file) {
        if (errorEl) errorEl.textContent = 'Bitte eine PNG- oder JPEG-Datei auswählen.';
        inputEl.classList.add('fx-input--error');
        return;
      }
      if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        if (errorEl) errorEl.textContent = 'Nur PNG oder JPEG Bilder sind erlaubt.';
        inputEl.classList.add('fx-input--error');
        return;
      }

      // Ladezustand
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Uploading…';

      try {
        const formData = new FormData();
        formData.append('file', file);

        // Endpoint robust bauen
        const endpoint =
          (baseURL?.endsWith('/') ? baseURL : baseURL + '/') +
          (url?.startsWith('/') ? url.slice(1) : url);

        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData
        });

        if (response.status === 200) {
          const data = await response.json();

          // Token lokal speichern
          if (data.token) {
            localStorage.setItem(localStorageKey, data.token);
          }

          // Erfolg anzeigen
          applySuccessUI(data.token ?? '');

          // Button wieder aktivieren (jetzt im Next-Modus)
          submitBtn.disabled = false;

        } else if (response.status === 400) {
          if (errorEl) errorEl.textContent = 'Falsche Antwort oder ungültige Datei.';
          inputEl.classList.remove('fx-input--success');
          inputEl.readOnly = false;
          inputEl.removeAttribute('aria-readonly');
          inputEl.classList.add('fx-input--error');

          // Button zurücksetzen
          submitBtn.disabled = false;
          submitBtn.classList.remove('fx-btn--next');
          submitBtn.type = 'submit';
          if (submitLabel) submitLabel.textContent = 'Submit';
          const glow = submitBtn.querySelector('.fx-btn-glow');
          if (glow) glow.style.display = '';
        } else {
          if (errorEl) errorEl.textContent = 'Unerwarteter Fehler. Bitte später erneut versuchen.';
          submitBtn.disabled = false;
          submitBtn.classList.remove('fx-btn--next');
          submitBtn.type = 'submit';
          if (submitLabel) submitLabel.textContent = 'Submit';
          const glow = submitBtn.querySelector('.fx-btn-glow');
          if (glow) glow.style.display = '';
        }
      } catch (error) {
        if (errorEl) errorEl.textContent = 'Netzwerkfehler: ' + error;
        submitBtn.disabled = false;
        submitBtn.classList.remove('fx-btn--next');
        submitBtn.type = 'submit';
        if (submitLabel) submitLabel.textContent = 'Submit';
        const glow = submitBtn.querySelector('.fx-btn-glow');
        if (glow) glow.style.display = '';
      }
    });
    formEl.__submitHandlerAttachedFile__ = true;
  }

  // Fehlerzustand beim Dateiwechsel entfernen
  if (!inputEl.__fileChangeListenerAttached__) {
    inputEl.addEventListener('change', () => {
      if (inputEl.classList.contains('fx-input--error')) {
        inputEl.classList.remove('fx-input--error');
      }
    });
    inputEl.__fileChangeListenerAttached__ = true;
  }

  // Initialer Check beim Aufruf
  checkStorageFile(localStorageKey);
}




// checkStorage------------------------------------------------------------------------
function initFlagUICheckBox() {
  // Idempotent-Guard
  if (initFlagUI.__initialized) return;
  initFlagUI.__initialized = true;

  // DOM (defensiv)
  const formEl = document.getElementById('solutionForm');
  const inputEl = document.getElementById('solution'); // optional, darf fehlen
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');
  const apiResponseEl = document.getElementById('api-response');

  if (!formEl) {
    console.warn('[Flag] Formular #solutionForm nicht gefunden. Abbruch.');
    return;
  }

  // Button und Label im Formular suchen
  let submitBtn = formEl.querySelector('.fx-btn');
  let submitLabel = submitBtn ? submitBtn.querySelector('.fx-btn-label') : null;

  if (!submitBtn) {
    console.warn('[Flag] Submit-Button (.fx-btn) im Formular nicht gefunden. Abbruch.');
    return;
  }
  if (!submitLabel) {
    console.warn('[Flag] .fx-btn-label im Button nicht gefunden. Textwechsel ggf. nicht sichtbar.');
  }

  // Optional: Info-Box
  const infoBox = document.getElementById('info_text');

  // Lösung aus der UI in aktueller Reihenfolge (falls du den Hidden-Input nicht nutzt)
  function getSolutionFromUI() {
    const list = document.getElementById('muList');
    if (!list) return null;
    const items = [...list.querySelectorAll('.mu-item')];
    if (!items.length) return null;

    const solution = items.map(item => {
      const id = item.dataset.id;
      const cb = item.querySelector('.mu-checkbox');
      const checked = !!(cb && cb.checked);
      return { [id]: checked };
    });
    return { solution };
  }

  function handleNextNavigate() {
    if (typeof nextQuestionURL === 'string' && nextQuestionURL.length > 0) {
      window.location.href = nextQuestionURL;
    } else {
      console.warn('[Flag] nextQuestionURL ist nicht gesetzt.');
    }
  }

  // UI nach Token-Status setzen
  function applySuccessUI(storedToken) {
    if (errorEl) errorEl.textContent = '';
    // if (successEl) successEl.style.display = 'block';

    // Input ist optional – nur anfassen, wenn vorhanden
    if (inputEl) {
      inputEl.classList.remove('fx-input--error');
      inputEl.classList.add('fx-input--success');
      inputEl.readOnly = true;
      inputEl.setAttribute('aria-readonly', 'true');
    }

    if (infoBox) infoBox.style.display = 'none';

    // Button → Next (Glow behalten!)
    submitBtn.classList.add('fx-btn--next');
    submitBtn.type = 'button';
    const glow = submitBtn.querySelector('.fx-btn-glow');
    if (glow) glow.style.display = 'none';
    if (submitLabel) {
      submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';
    }

    // Alte Listener entfernen: Button klonen und ersetzen
    const cloned = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(cloned, submitBtn);
    submitBtn = cloned;
    submitLabel = submitBtn.querySelector('.fx-btn-label');

    // Next-Klick einmalig
    submitBtn.addEventListener('click', handleNextNavigate, { once: true });

    // Glow erneut aktivieren
    setupGlowOnce(submitBtn);

    // Optional Token-Anzeige
    // if (apiResponseEl) {
    //   apiResponseEl.textContent = `Der Token ist: ${String(storedToken)}.`;
    //   apiResponseEl.classList.add('token-text');
    // }
  }

  function applyNeutralUI() {
    if (successEl) successEl.style.display = 'none';

    // Input ist optional
    if (inputEl) {
      inputEl.classList.remove('fx-input--success');
      inputEl.readOnly = false;
      inputEl.removeAttribute('aria-readonly');
      inputEl.classList.remove('fx-input--error');
    }

    submitBtn.classList.remove('fx-btn--next');
    submitBtn.type = 'submit';
    const glow = submitBtn.querySelector('.fx-btn-glow');
    if (glow) glow.style.display = '';

    const label = submitBtn.querySelector('.fx-btn-label');
    if (label) {
      label.innerHTML = 'Submit';
    }

    setupGlowOnce(submitBtn);
  }

  /**
   * Prüft localStorage und setzt die UI entsprechend.
   * @param {string} flagKey - nur fürs Logging (z. B. "kim-wa-02")
   */
  function checkStorage(flagKey) {
    if (typeof localStorageKey === 'undefined') {
      console.warn('[Flag] localStorageKey ist nicht definiert.');
      applyNeutralUI();
      return false;
    }
    const storedToken = localStorage.getItem(localStorageKey);

    if (storedToken && String(storedToken).trim() !== '') {
      applySuccessUI(storedToken);
      return true;
    } else {
      //console.warn(`[Flag] Kein Eintrag für "${flagKey}" unter localStorageKey="${localStorageKey}" gefunden.`);
      applyNeutralUI();
      return false;
    }
  }

  // Tipp-Listener nur einmal (falls input existiert)
  if (inputEl && !inputEl.__errorListenerAttached__) {
    inputEl.addEventListener('input', () => {
      if (inputEl.classList.contains('fx-input--error')) {
        inputEl.classList.remove('fx-input--error');
      }
    });
    inputEl.__errorListenerAttached__ = true;
  }

  // Submit-Handler nur einmal
  if (!formEl.__submitHandlerAttached__) {
    formEl.addEventListener('submit', async function (event) {
      event.preventDefault();

      if (errorEl) errorEl.textContent = '';
      if (successEl) successEl.style.display = 'none';

      // Payload bestimmen:
      // 1) bevorzugt aus der UI (Drag & Drop Reihenfolge)
      // 2) fallback: Hidden/Text input "solution", falls vorhanden
      let payload = getSolutionFromUI();
      if (!payload && inputEl && inputEl.value) {
        try {
          const parsed = JSON.parse(inputEl.value);
          if (parsed && Array.isArray(parsed.solution)) payload = parsed;
        } catch {
          // ignore parse error
        }
      }
      if (!payload || !payload.solution?.length) {
        if (errorEl) errorEl.textContent = 'Keine Nachrichten gefunden. Bitte Seite aktualisieren oder IDs prüfen.';
        return;
      }

      // Optional: Button-Loading
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sende…';

      try {
        if (typeof baseURL === 'undefined' || typeof url === 'undefined') {
          throw new Error('baseURL oder url ist nicht definiert.');
        }
        const endpoint =
          (baseURL.endsWith('/') ? baseURL : baseURL + '/') +
          (url.startsWith('/') ? url.slice(1) : url);

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.status === 200) {
          const data = await response.json();
          if (typeof localStorageKey !== 'undefined' && data.token) {
            localStorage.setItem(localStorageKey, data.token);
          }
          checkStorage(typeof localStorageKey !== 'undefined' ? localStorageKey : 'flag');

        } else if (response.status === 400) {
          if (errorEl) errorEl.textContent = 'Wrong answer.';
          applyNeutralUI();
        } else {
          if (errorEl) errorEl.textContent = 'An unexpected error occurred.';
          applyNeutralUI();
        }
      } catch (error) {
        if (errorEl) errorEl.textContent = 'Network error: ' + error;
        applyNeutralUI();
      } finally {
        // Wenn wir zu Next gewechselt sind, lassen wir disabled=false;
        if (!submitBtn.classList.contains('fx-btn--next')) {
          submitBtn.disabled = false;
          if (submitLabel) submitLabel.textContent = 'Submit';
        }
      }
    });
    formEl.__submitHandlerAttached__ = true;
  }

  // Glow nur einmal
  function setupGlowOnce(btn) {
    if (!btn || btn.__glowListenerAttached__) return;
    const glow = btn.querySelector('.fx-btn-glow');
    if (!glow) return;
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.setProperty('--mx', mx + '%');
      glow.style.setProperty('--my', my + '%');
    });
    btn.__glowListenerAttached__ = true;
  }
  setupGlowOnce(submitBtn);

  // Initialer Check
  checkStorage(typeof localStorageKey !== 'undefined' ? localStorageKey : 'flag');
}
