document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE MENÚ HAMBURGUESA ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const menuItems = document.querySelectorAll('.nav-item');

    if (hamburger && navLinks) {
        // Alternar menú al pulsar el botón hamburguesa
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier opción
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // --- PAUSA AUTOMÁTICA DE VIDEO AL SALIR DE PANTALLA (IntersectionObserver) ---
    const video = document.getElementById('videoBarrioLimpio');
    if (video && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Si el video deja de ser visible en más del 20%, pausarlo
                if (!entry.isIntersecting && !video.paused) {
                    video.pause();
                }
            });
        }, { threshold: 0.2 });

        observer.observe(video);
    }
});