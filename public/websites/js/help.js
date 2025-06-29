// Funktion zum Umschalten des Hilfefensters
document.getElementById('helpButton').addEventListener('click', function() {
    const helpOverlay = document.getElementById('helpOverlay');
    if (helpOverlay.style.display === 'none' || helpOverlay.style.display === '') {
        helpOverlay.style.display = 'block';
    } else {
        helpOverlay.style.display = 'none';
    }
});

// Funktion zum Schließen des Hilfefensters
document.querySelector('#helpOverlay .close-btn').addEventListener('click', function() {
    document.getElementById('helpOverlay').style.display = 'none';
});