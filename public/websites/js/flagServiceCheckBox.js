// ---------------------------------------------------------
// GLOBAL VARS
// ---------------------------------------------------------
let submitBtn;
let submitLabel;
let inputEl;

document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.getElementById('solutionForm');
  inputEl = document.getElementById('solution');
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');
  const apiResponseEl = document.getElementById('api-response');

  if (!formEl) return console.error('solutionForm not found.');

  submitBtn = formEl.querySelector('.fx-btn');
  submitLabel = submitBtn ? submitBtn.querySelector('.fx-btn-label') : null;

  if (!submitBtn) return console.error('Submit-Button (.fx-btn) not found.');

  // ---------------------------------------------------------
  // --- Lösung aus Checkboxen ermitteln
  // ---------------------------------------------------------
  function getSolutionFromUI() {
    const list = document.getElementById('muList');
    if (!list) return null;

    const items = [...list.querySelectorAll('.mu-item')];
    if (!items.length) return null;

    const solution = items.map(item => {
      const id = item.dataset.id;
      const cb = item.querySelector('.mu-checkbox');
      return { [id]: !!(cb && cb.checked) };
    });

    return { solution };
  }

  // ---------------------------------------------------------
  // --- Submit Handler
  // ---------------------------------------------------------
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (errorEl) errorEl.textContent = '';
    if (successEl) successEl.style.display = 'none';

    const payload = getSolutionFromUI();
    if (!payload || !payload.solution?.length) {
      if (errorEl) errorEl.textContent = 'No messages selected.';
      return;
    }

    if (inputEl) inputEl.value = JSON.stringify(payload);

    try {
      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending…';

      const response = await fetch(baseURL + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        const data = await response.json();

        if (data.token) {
          try { localStorage.setItem(localStorageKey, data.token); } 
          catch (e) { console.warn('localStorage set failed:', e); }
        }

        // Input sperren + Success-State
        if (inputEl) {
          inputEl.classList.remove('fx-input--error');
          inputEl.classList.add('fx-input--success');
          inputEl.readOnly = true;
          inputEl.setAttribute('aria-readonly', 'true');
        }

        // --- Submit-Button zu Next ---
        if (submitBtn) {
          submitBtn.classList.add('fx-btn--next');
          submitBtn.type = 'button';
          submitBtn.onclick = handleNextNavigate;
        }

        if (submitLabel) submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';

        const glow = submitBtn ? submitBtn.querySelector('.fx-btn-glow') : null;
        if (glow) glow.style.display = 'none';

      } else if (response.status === 400) {
        if (errorEl) errorEl.textContent = 'Wrong answer.';
        if (inputEl) {
          inputEl.classList.remove('fx-input--success');
          inputEl.readOnly = false;
          inputEl.removeAttribute('aria-readonly');
          inputEl.classList.add('fx-input--error');
        }
      } else {
        if (errorEl) errorEl.textContent = 'An unexpected error occurred.';
      }

    } catch (err) {
      if (errorEl) errorEl.textContent = 'Network error: ' + err;
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (!submitBtn?.classList.contains('fx-btn--next') && submitLabel) {
        submitLabel.textContent = 'Submit';
      }
    }
  });

  // ---------------------------------------------------------
  // --- Entferne Error-State beim Tippen
  // ---------------------------------------------------------
  if (inputEl) {
    inputEl.addEventListener('input', () => {
      if (inputEl.classList.contains('fx-input--error')) {
        inputEl.classList.remove('fx-input--error');
      }
    });
  }

  // ---------------------------------------------------------
  // --- Navigation zur nächsten Frage
  // ---------------------------------------------------------
  function handleNextNavigate() {
    window.location.href = nextQuestionURL;
  }

  // ---------------------------------------------------------
  // --- Glow-Effekt
  // ---------------------------------------------------------
  (function setupGlow() {
    const glow = submitBtn ? submitBtn.querySelector('.fx-btn-glow') : null;
    if (!submitBtn || !glow) return;
    submitBtn.addEventListener('mousemove', (e) => {
      const rect = submitBtn.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.setProperty('--mx', mx + '%');
      glow.style.setProperty('--my', my + '%');
    });
  })();

  // ---------------------------------------------------------
  // --- Bereits gelöst? (localStorage)
  // ---------------------------------------------------------
  try {
    if (localStorage.getItem(localStorageKey)) {
      if (submitBtn) {
        submitBtn.classList.add('fx-btn--next');
        submitBtn.type = 'button';
        submitBtn.onclick = handleNextNavigate;
      }
      if (submitLabel) submitLabel.innerHTML = '<span class="fx-next-icon">→</span> Next';
    }
  } catch (e) {
    console.warn('localStorage access failed:', e);
  }

});