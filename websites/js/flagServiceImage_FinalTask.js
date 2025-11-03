const formEl = document.getElementById('solutionForm');
const inputEl = document.getElementById('solutionFile');           // Datei-Input
const errorEl = document.getElementById('error-message');
const successEl = document.getElementById('success-message');
const apiResponseEl = document.getElementById('api-response');

const submitBtn = formEl.querySelector('.fx-btn');
const submitLabel = submitBtn.querySelector('.fx-btn-label');

function handleNextNavigate() {
  // Passe die Ziel-URL an
  window.location.href = nextQuestionURL ;
}

// Optional: Glow-Follow wie im Referenzcode
(function setupGlow() {
  const glow = submitBtn?.querySelector('.fx-btn-glow');
  if (!submitBtn || !glow) return;
  submitBtn.addEventListener('mousemove', (e) => {
    const rect = submitBtn.getBoundingClientRect();
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.setProperty('--mx', mx + '%');
    glow.style.setProperty('--my', my + '%');
  });
})();

formEl.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Reset Meldungen
  errorEl.textContent = '';
  successEl.style.display = 'none';
  apiResponseEl.textContent = '';
  apiResponseEl.classList.remove('token-text');

  // Reset States am Input
  inputEl.classList.remove('fx-input--error', 'fx-input--success');
  inputEl.removeAttribute('aria-readonly');
  inputEl.readOnly = false;

  const file = inputEl.files?.[0];
  if (!file) {
    errorEl.textContent = 'Bitte eine PNG- oder JPEG-Datei auswählen.';
    inputEl.classList.add('fx-input--error');
    return;
  }
  if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
    errorEl.textContent = 'Nur PNG oder JPEG Bilder sind erlaubt.';
    inputEl.classList.add('fx-input--error');
    return;
  }

  // Ladezustand
  submitBtn.disabled = true;
  submitLabel.textContent = 'Uploading…';

  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(baseURL + url, {
      method: 'POST',
      body: formData
    });

    if (response.status === 200) {
      const data = await response.json();

      // Token lokal speichern (wie Referenz)
      if (data.token) {
        
        localStorage.setItem(localStorageKey, data.token);
      }

      // Erfolg anzeigen: Token-Text formatiert und navy-blau
      //apiResponseEl.textContent = `Der Token ist: ${String(data.token ?? '')}.`;
      //apiResponseEl.classList.add('token-text');

      // Box sichtbar machen
      successEl.style.display = 'block';

      //Info Box ausblenden
      const box = document.getElementById('info_text');
      box.style.display = 'none';

      // Input sperren + Success-State
      inputEl.classList.remove('fx-input--error');
      inputEl.classList.add('fx-input--success');
      inputEl.readOnly = true;
      inputEl.setAttribute('aria-readonly', 'true');

      // Submit-Button zu Next: Styling + Label + Verhalten (wie Referenz)
      //submitBtn.classList.add('fx-btn--next'); // wird grün + pulsierend
      //submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';

      // Glow ausblenden
      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = 'none';

      // Button-Behavior umstellen
      submitBtn.type = 'button';
      submitBtn.disabled = false;
      submitBtn.addEventListener('click', handleNextNavigate, { once: true });

    } else if (response.status === 400) {
      // Wrong answer / ungültige Datei
      errorEl.textContent = 'Falsche Antwort oder ungültige Datei.';
      inputEl.classList.remove('fx-input--success');
      inputEl.readOnly = false;
      inputEl.removeAttribute('aria-readonly');
      inputEl.classList.add('fx-input--error');

      // Button zurücksetzen
      submitBtn.disabled = false;
      submitBtn.classList.remove('fx-btn--next');
      submitBtn.type = 'submit';
      submitLabel.textContent = 'Submit';

      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = '';

    } else {
      errorEl.textContent = 'Unerwarteter Fehler. Bitte später erneut versuchen.';

      // Button zurücksetzen
      submitBtn.disabled = false;
      submitBtn.classList.remove('fx-btn--next');
      submitBtn.type = 'submit';
      submitLabel.textContent = 'Submit';

      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = '';
    }
  } catch (error) {
    errorEl.textContent = 'Netzwerkfehler: ' + error;

    // Button zurücksetzen
    submitBtn.disabled = false;
    submitBtn.classList.remove('fx-btn--next');
    submitBtn.type = 'submit';
    submitLabel.textContent = 'Submit';

    const glow = submitBtn.querySelector('.fx-btn-glow');
    if (glow) glow.style.display = '';
  }
});

// Beim Ändern der Datei: Fehlerzustand entfernen (Analog zum input-Listener)
inputEl.addEventListener('change', () => {
  if (inputEl.classList.contains('fx-input--error')) {
    inputEl.classList.remove('fx-input--error');
  }
});
