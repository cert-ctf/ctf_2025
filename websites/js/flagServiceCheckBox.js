document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.getElementById('solutionForm');
  const inputEl = document.getElementById('solution'); // optional/evtl. nicht vorhanden
  const errorEl = document.getElementById('error-message');
  const successEl = document.getElementById('success-message');
  const apiResponseEl = document.getElementById('api-response');

  if (!formEl) {
    console.error('solutionForm not found.');
    return;
  }

  const submitBtn = formEl.querySelector('.fx-btn');
  const submitLabel = submitBtn?.querySelector('.fx-btn-label');

  // Ensure button exists
  if (!submitBtn) {
    console.error('Submit-Button (.fx-btn) not found in form.');
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
      if (errorEl) errorEl.textContent = 'No messages found. Please refresh the page or check IDs.';
      return;
    }

    // Optional: Debug-Feld nur setzen, wenn vorhanden
    if (inputEl) {
      inputEl.value = JSON.stringify(payload);
    }

    try {
      // Optional: Button-Feedback
      submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Sending…';

      const response = await fetch(baseURL + url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        const data = await response.json();
        if (data.token) localStorage.setItem(localStorageKey, data.token);

        // Display
        //if (successEl) successEl.style.display = 'block';
        //if (apiResponseEl) {
        //  apiResponseEl.textContent = `The token is: ${String(data.token ?? '')}.`;
        //  apiResponseEl.classList.add('token-text');
        // }

        //Info Box ausblenden
        const box = document.getElementById('info_text');
        box.style.display = 'none';

// UI: Vom "Submit" zum "Next" umschalten, ohne innerHTML zu setzen
submitBtn.classList.add('fx-btn--next');
submitBtn.type = 'button';
submitBtn.disabled = false; // sicherstellen, dass wieder klickbar

// Label austauschen, ohne DOM zu zerstören
if (submitLabel) {
  submitLabel.textContent = 'Next';
} else {
  // Fallback, falls kein Label vorhanden
  submitBtn.textContent = 'Next';
}

// Optional: Icon ergänzen, ohne das Label zu entfernen
let nextIcon = submitBtn.querySelector('.fx-next-icon');
if (!nextIcon) {
  nextIcon = document.createElement('span');
  nextIcon.className = 'fx-next-icon';
  nextIcon.textContent = '→';
  // Icon vor das Label setzen
  submitBtn.insertBefore(nextIcon, submitBtn.firstChild);
}

// Glow entfernen, falls vorhanden
const glow = submitBtn.querySelector('.fx-btn-glow');
if (glow) glow.style.display = 'none';

// WICHTIG: Event-Listener erst NACH allen Änderungen setzen
submitBtn.removeEventListener('click', handleNextNavigate); // defensiv
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
