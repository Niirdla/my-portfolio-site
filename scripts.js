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

    const toolImages = document.querySelectorAll('.design-tools-div img');
    const devToolsImages = document.querySelectorAll('.development-tools-div img');
    const devToolsImagesPart2 = document.querySelectorAll('.development-tools-div-part2 img');
    const projectManagementToolsImages= document.querySelectorAll('.project-management-tools-div img')
    const testingToolsImages = document.querySelectorAll('.testing-tools-div img')
    function addImageHoverEffect(images) {
        images.forEach(img => {
            const originalSrc = img.src;
            const hoverSrc = img.getAttribute('data-hover-src');
            const tooltipText = img.getAttribute('title');
    
            // Wrap the image in a span with the tooltip class
            const wrapper = document.createElement('span');
            wrapper.className = 'tooltip';
            img.parentNode.insertBefore(wrapper, img);
            wrapper.appendChild(img);
    
            // Create the tooltip text element
            const tooltip = document.createElement('span');
            tooltip.className = 'tooltiptext';
            tooltip.innerText = tooltipText;
            wrapper.appendChild(tooltip);
    
            img.addEventListener('mouseover', () => {
                img.src = hoverSrc;
            });
    
            img.addEventListener('mouseout', () => {
                img.src = originalSrc;
            });
        });
    }
    
    // Apply the hover effect to both sets of images
    addImageHoverEffect(toolImages);
    addImageHoverEffect(devToolsImages);
    addImageHoverEffect(devToolsImagesPart2);
    addImageHoverEffect(projectManagementToolsImages);
    addImageHoverEffect(testingToolsImages);

    const phrases = ["Hi! Welcome to my website", "I'm Aldrin"];
    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    const typeSpeed = 100; // Speed of typing
    const deleteSpeed=30;
    const delayBetweenPhrases = 1000; // Delay before erasing
    const delayAfterErasing = 500; // Delay before starting the next phrase
    
    const headingElement = document.querySelector('.about-me-subtitle');
    const cursorElement = document.createElement('span');
    cursorElement.className = 'typing-cursor';
    headingElement.appendChild(cursorElement);
    
    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];
    
        if (currentLetterIndex < currentPhrase.length) {
            headingElement.textContent += currentPhrase.charAt(currentLetterIndex);
            currentLetterIndex++;
            setTimeout(typeEffect, typeSpeed);
        } else {
            if(currentPhraseIndex < phrases.length - 1){
            setTimeout(eraseEffect, delayBetweenPhrases); // Pause before erasing
        }
        }
    }
    
    function eraseEffect() {
        if (currentLetterIndex > 0) {
            const currentPhrase = phrases[currentPhraseIndex];
            headingElement.textContent = currentPhrase.substring(0, currentLetterIndex - 1);
            currentLetterIndex--;
            setTimeout(eraseEffect, deleteSpeed);
        } else {
            currentPhraseIndex++; // Move to the next phrase
            if (currentPhraseIndex < phrases.length) {
                setTimeout(typeEffect, delayAfterErasing); // Pause before typing next phrase
            }
        }
    }
    
    // Start the typing animation
    typeEffect();

    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');

    // Get all certifications-item elements
    const certificationItems = document.querySelectorAll('.certifications-item');

    // Attach click event to each certification item
    certificationItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Get image source from clicked item
            const imgSrc = this.querySelector('img').getAttribute('src');
            modalImage.setAttribute('src', imgSrc);

            // Show modal
            modal.style.display = 'block';
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when user clicks outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Prevent modal from closing when user clicks on modal content
    modal.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});