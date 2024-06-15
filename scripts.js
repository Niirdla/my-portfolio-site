// Updated scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    
    const nav = document.querySelector('nav');
    let isScrolling;

    // Set initial background state
    nav.classList.add('transparent');

    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        nav.classList.add('scrolled');
        nav.classList.remove('transparent');

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            nav.classList.remove('scrolled');
            nav.classList.add('transparent');
        }, 200);
    });
});