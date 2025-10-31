
const formEl = document.getElementById('solutionForm');
const inputEl = document.getElementById('solution');
const errorEl = document.getElementById('error-message');
const successEl = document.getElementById('success-message');
const apiResponseEl = document.getElementById('api-response');

const submitBtn = formEl.querySelector('.fx-btn');
const submitLabel = submitBtn.querySelector('.fx-btn-label');

formEl.addEventListener('submit', async function(event) {
  event.preventDefault();

  // Reset Meldungen
  errorEl.textContent = '';
  successEl.style.display = 'none';

  const formData = { solution: inputEl.value };

  try {
    const response = await fetch(baseURL + url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.status === 200) {
      const data = await response.json();

      if (data.token) {
        localStorage.setItem(localStorageKey, data.token);
      }

      // Erfolg anzeigen: Token-Text formatiert und navy-blau
      apiResponseEl.textContent = `Der Token ist: ${String(data.token ?? '')}.`;
      apiResponseEl.classList.add('token-text'); // CSS: .token-text { color: navy; font-weight: 700; }

      // Box sichtbar lassen
      successEl.style.display = 'block';

      // Input sperren + Success-State
      inputEl.classList.remove('fx-input--error');
      inputEl.classList.add('fx-input--success');
      inputEl.readOnly = true;
      inputEl.setAttribute('aria-readonly', 'true');

      // Submit-Button zu Next: Styling + Label + Verhalten
      submitBtn.classList.add('fx-btn--next');
      submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';

      const glow = submitBtn.querySelector('.fx-btn-glow');
      if (glow) glow.style.display = 'none';

      submitBtn.type = 'button';
      submitBtn.addEventListener('click', handleNextNavigate, { once: true });

    } else if (response.status === 400) {
      errorEl.textContent = 'Wrong answer.';
      inputEl.classList.remove('fx-input--success');
      inputEl.readOnly = false;
      inputEl.removeAttribute('aria-readonly');
      inputEl.classList.add('fx-input--error');
    } else {
      errorEl.textContent = 'An unexpected error occurred.';
    }
  } catch (error) {
    errorEl.textContent = 'Network error: ' + error;
  }
});

// Beim Tippen: Fehlerzustand entfernen
inputEl.addEventListener('input', () => {
  if (inputEl.classList.contains('fx-input--error')) {
    inputEl.classList.remove('fx-input--error');
  }
});

// Navigation zur nächsten Frage
function handleNextNavigate() {
  window.location.href = nextQuestionURL;
}

/* Optional: Glow-Follow für den ursprünglichen Submit-Button */
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

