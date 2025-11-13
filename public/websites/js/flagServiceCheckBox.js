document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.getElementById('solutionForm');
  const inputEl = document.getElementById('solution');
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');

  if (!formEl) {
    console.error('solutionForm not found.');
    return;
  }

  const submitBtn = formEl.querySelector('.fx-btn');
  const submitLabel = submitBtn?.querySelector('.fx-btn-label');
  if (!submitBtn) {
    console.error('Submit-Button (.fx-btn) not found in form.');
    return;
  }

  // --- Navigation zur nächsten Seite ---
  function handleNextNavigate() {
    window.location.href = nextQuestionURL;
  }

  // --- Button auf "Next" umschalten ---
  function switchToNextUI() {
    submitBtn.classList.add('fx-btn--next');
    submitBtn.type = 'button';
    submitBtn.disabled = false;

    if (submitLabel) {
      submitLabel.textContent = 'Next';
    } else {
      submitBtn.textContent = 'Next';
    }

    // Kein extra Icon hinzufügen → Pfeil kommt aus CSS
    const glow = submitBtn.querySelector('.fx-btn-glow');
    if (glow) glow.style.display = 'none';

    // 🟢 Klick-Handler sicher neu setzen
    submitBtn.removeEventListener('click', handleNextNavigate);
    submitBtn.addEventListener('click', handleNextNavigate);
  }

  // --- Lösung aus Checkboxen ermitteln ---
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

  // --- Prüfen, ob Aufgabe schon gelöst ---
  try {
    if (localStorage.getItem(localStorageKey)) {
      switchToNextUI();
    }
  } catch (e) {
    console.warn('localStorage access failed:', e);
  }

  // --- Submit-Handler ---
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (errorEl) errorEl.textContent = '';
    if (successEl) successEl.style.display = 'none';

    const payload = getSolutionFromUI();
    if (!payload || !payload.solution?.length) {
      if (errorEl) errorEl.textContent = 'No messages found. Please refresh the page or check IDs.';
      return;
    }

    if (inputEl) {
      inputEl.value = JSON.stringify(payload);
    }

    let submissionSucceeded = false;

    try {
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending…';

      const response = await fetch(baseURL + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        const data = await response.json();

        if (data.token) {
          try {
            localStorage.setItem(localStorageKey, data.token);
          } catch (e) {
            console.warn('localStorage set failed:', e);
          }
        }

        // Info-Text ausblenden
        const box = document.getElementById('info_text');
        if (box) box.style.display = 'none';

        // 🟢 Direkt auf "Next" schalten & Navigation aktivieren
        switchToNextUI();
        submissionSucceeded = true;

      } else if (response.status === 400) {
        if (errorEl) errorEl.textContent = 'Wrong answer.';
      } else {
        if (errorEl) errorEl.textContent = 'An unexpected error occurred.';
      }

    } catch (error) {
      if (errorEl) errorEl.textContent = 'Network error: ' + error;
    } finally {
      submitBtn.disabled = false;
      if (!submissionSucceeded) {
        if (submitLabel) submitLabel.textContent = 'Submit';
      }
    }
  });

  // --- Glow-Effekt für Button ---
  const glow = submitBtn.querySelector('.fx-btn-glow');
  if (glow) {
    submitBtn.addEventListener('mousemove', (e) => {
      const rect = submitBtn.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.setProperty('--mx', mx + '%');
      glow.style.setProperty('--my', my + '%');
    });
  }
});