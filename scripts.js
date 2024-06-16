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

    const listItems = document.querySelectorAll('.unlisted-list li');
    const sectionsToChange = document.querySelectorAll('.content-to-changes');

    // Add the active class to the SKILLS item by default and show the skills content
    listItems.forEach(item => {
        if (item.getAttribute('data-section') === 'skills') {
            item.classList.add('active');
        }
    });

    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove the active class from all items
            listItems.forEach(li => li.classList.remove('active'));
            
            // Add the active class to the clicked item
            this.classList.add('active');
            
            // Hide all content sections
            sectionsToChange.forEach(section => section.style.display = 'none');
            
            // Show the clicked content section
            const sectionToShow = document.getElementById(this.getAttribute('data-section'));
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
            }
        });
    });
});