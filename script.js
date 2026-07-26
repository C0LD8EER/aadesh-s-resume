// Hamburger menu toggle logic and particle initialization
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navigation-links');
    const navLinksItems = document.querySelectorAll('.navigation-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking any link inside the navigation drawer
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Initialize tsParticles safely
    if (typeof tsParticles !== 'undefined') {
        const constellationConfig = {
            particles: {
                number: { value: 50 },
                links: {
                    enable: true,
                    distance: 140,
                    color: "#ffffff",
                    opacity: 0.35
                },
                move: { enable: true, speed: { min: 0.3, max: 0.4 } },
                size: {
                    value: { min: 0.6, max: 2 }
                }
            }
        };

        if (document.getElementById('tsparticles-1')) {
            tsParticles.load("tsparticles-1", constellationConfig);
        }
        if (document.getElementById('tsparticles-3')) {
            tsParticles.load("tsparticles-3", constellationConfig);
        }
    }
});
