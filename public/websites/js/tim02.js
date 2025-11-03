    (function () {
      const list = document.getElementById('muList');
      if (!list) return;

      let draggingEl = null;
      const placeholder = document.createElement('div');
      placeholder.className = 'mu-placeholder';

      // Hilfsfunktion: nächstes Einfüge-Element unterhalb des Mauszeigers ermitteln
      function getDragAfterElement(container, y) {
        const els = [...container.querySelectorAll('.mu-item:not(.dragging)')];
        return els.reduce(
          (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
              return { offset, element: child };
            } else {
              return closest;
            }
          },
          { offset: Number.NEGATIVE_INFINITY, element: null }
        ).element;
      }

      // Platzhalterhöhe dynamisch anpassen
      function setPlaceholderHeight(fromEl) {
        if (!fromEl) return;
        const rect = fromEl.getBoundingClientRect();
        placeholder.style.height = rect.height + 'px';
      }

      list.addEventListener('dragstart', (e) => {
        const item = e.target.closest('.mu-item');
        if (!item) return;
        draggingEl = item;
        item.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        try { e.dataTransfer.setData('text/plain', item.dataset.id || ''); } catch { }
        setPlaceholderHeight(item);
      });

      list.addEventListener('dragend', () => {
        if (draggingEl) draggingEl.classList.remove('dragging');
        draggingEl = null;
        placeholder.remove();
        [...list.children].forEach(el => el.classList.remove('drop-target'));
        // console.log(getOrder());
      });

      list.addEventListener('dragover', (e) => {
        e.preventDefault(); // notwendig, damit drop möglich ist
        const afterElement = getDragAfterElement(list, e.clientY);
        if (!list.contains(placeholder)) {
          list.insertBefore(placeholder, afterElement || null);
        } else {
          if (afterElement == null) {
            list.appendChild(placeholder);
          } else {
            list.insertBefore(placeholder, afterElement);
          }
        }
        [...list.children].forEach(el => el.classList.remove('drop-target'));
        if (afterElement) afterElement.classList.add('drop-target');
      });

      list.addEventListener('drop', (e) => {
        e.preventDefault();
        if (!draggingEl) return;
        if (list.contains(placeholder)) {
          list.insertBefore(draggingEl, placeholder);
        }
        [...list.children].forEach(el => el.classList.remove('drop-target'));
        placeholder.remove();
        // console.log('Neue Reihenfolge:', getOrder());
      });

      // Reihenfolge als Array der data-id auslesen
      function getOrder() {
        return [...list.querySelectorAll('.mu-item')].map(el => el.dataset.id);
      }

    })();



    (function () {
      const list = document.getElementById('muList');
      const submitBtn = document.getElementById('muSubmit');
      if (!list) return;

      // Reihenfolge aus der DOM-Reihenfolge
      function getOrder() {
        return [...list.querySelectorAll('.mu-item')].map(el => el.dataset.id);
      }

      // Checkbox-Zustände nach ID
      function getSelection() {
        const result = {};
        const items = [...list.querySelectorAll('.mu-item')];
        for (const item of items) {
          const id = item.dataset.id; // z. B. "msg2"
          const cb = item.querySelector('.mu-checkbox');
          if (!cb || !id) continue;
          result[id] = {
            checked: cb.checked,
            indeterminate: cb.indeterminate
          };
        }
        return result;
      }

      // Payload exakt in UI-Reihenfolge bauen
      function buildPayloadFromUI() {
        const order = getOrder();            // z. B. ["msg3","msg1","msg5","msg2","msg4"]
        const selection = getSelection();    // Map: { msg1: {checked:...}, ... }

        const solution = order.map(id => {
          const state = selection[id];
          const checked = !!(state && state.checked);
          return { [id]: checked };          // einzelnes Objekt je ID, in aktueller Reihenfolge
        });

        return { solution };
      }

      // Submit: Payload erzeugen und senden (oder erstmal loggen)
      if (submitBtn) {
        submitBtn.addEventListener('click', async () => {
          const body = buildPayloadFromUI();
        });
      }
    })();