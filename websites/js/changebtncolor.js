document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.btn-layer');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            // Alle Buttons zurücksetzen
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove('active-btn');
            }
            // Aktiven Button hervorheben
            this.classList.add('active-btn');
        });
    }
});