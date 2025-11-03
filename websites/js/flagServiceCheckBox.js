document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.getElementById('solutionForm');
  const inputEl = document.getElementById('solution'); // optional/evtl. nicht vorhanden
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');
  const apiResponseEl = document.getElementById('api-response');

  if (!formEl) {
    console.error('solutionForm nicht gefunden.');
    return;
  }

  const submitBtn = formEl.querySelector('.fx-btn');
  const submitLabel = submitBtn?.querySelector('.fx-btn-label');

  // Sicherstellen, dass Button existiert
  if (!submitBtn) {
    console.error('Submit-Button (.fx-btn) nicht im Formular gefunden.');
    return;
  }

  function getSolutionFromUI() {
    const list = document.getElementById('muList');
    if (!list) return null;
    const items = [...list.querySelectorAll('.mu-item')];
    if (!items.length) return null;

    // UI-Reihenfolge beibehalten
    const solution = items.map(item => {
      const id = item.dataset.id;
      const cb = item.querySelector('.mu-checkbox');
      const checked = !!(cb && cb.checked);
      return { [id]: checked };
    });

    return { solution };
  }

  formEl.addEventListener('submit', async function(event) {
    event.preventDefault();

    // Reset
    if (errorEl) errorEl.textContent = '';
    if (successEl) successEl.style.display = 'none';

    const payload = getSolutionFromUI();
    if (!payload || !payload.solution?.length) {
      if (errorEl) errorEl.textContent = 'Keine Nachrichten gefunden. Bitte Seite aktualisieren oder IDs prüfen.';
      return;
    }

    // Optional: Debug-Feld nur setzen, wenn vorhanden
    if (inputEl) {
      inputEl.value = JSON.stringify(payload);
    }

    try {
      // Optional: Button-Feedback
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sende…';

      const response = await fetch(baseURL + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.token) localStorage.setItem(localStorageKey, data.token);

        // Anzeige
        //if (successEl) successEl.style.display = 'block';
        //if (apiResponseEl) {
        //  apiResponseEl.textContent = `Der Token ist: ${String(data.token ?? '')}.`;
        //  apiResponseEl.classList.add('token-text');
        // }

        //Info Box ausblenden
        const box = document.getElementById('info_text');
        box.style.display = 'none';

        submitBtn.classList.add('fx-btn--next');
        if (submitBtn) submitBtn.innerHTML = '<span class="fx-next-icon">→</span> Next';
        const glow = submitBtn.querySelector('.fx-btn-glow');
        if (glow) glow.style.display = 'none';

        submitBtn.type = 'button';
        submitBtn.addEventListener('click', handleNextNavigate, { once: true });

      } else if (response.status === 400) {
        if (errorEl) errorEl.textContent = 'Wrong answer.';
      } else {
        if (errorEl) errorEl.textContent = 'An unexpected error occurred.';
      }
    } catch (error) {
      if (errorEl) errorEl.textContent = 'Network error: ' + error;
    } finally {
      submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Submit';
    }
  });

  function handleNextNavigate() {
    window.location.href = nextQuestionURL;
  }

  // Optional: Glow-Follow
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
