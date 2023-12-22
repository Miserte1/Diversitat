document.addEventListener('DOMContentLoaded', function () {
    // Reproducir música automáticamente al cargar la página
    var audio = new Audio('song.mp3'); // Ajusta la ruta y el nombre de tu archivo de música
    audio.play(); // Reproduce la música al cargar la página

    // Ocultar el botón después de hacer clic (si lo deseas)
    document.getElementById('play-container').style.display = 'none';

    // Contador regresivo para el examen de Eco
    const examDate = new Date('January 10, 2024 00:00:00 GMT');
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = examDate - now;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            countdownElement.textContent = `${days} días restantes para el examen de Eco`;
        } else {
            countdownElement.textContent = '¡El examen de Eco está aquí!';
        }
    }

    // Actualiza el contador cada segundo
    setInterval(updateCountdown, 1000);

    // Actualiza el contador cuando se carga la página
    updateCountdown();
});
