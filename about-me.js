// Updated scripts.js

const listItems = document.querySelectorAll(".unlisted-list li");
const sectionsToChange = document.querySelectorAll(".content-to-changes");

// Add the active class to the SKILLS item by default and show the skills content
listItems.forEach((item) => {
  if (item.getAttribute("data-section") === "skills") {
    item.classList.add("active");
  }
});

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove the active class from all items
    listItems.forEach((li) => li.classList.remove("active"));

    // Add the active class to the clicked item
    this.classList.add("active");

    // Hide all content sections
    sectionsToChange.forEach((section) => (section.style.display = "none"));

    // Show the clicked content section
    const sectionToShow = document.getElementById(
      this.getAttribute("data-section")
    );
    if (sectionToShow) {
      sectionToShow.style.display = "block";
    }
  });
});

const toolImages = document.querySelectorAll(".design-tools-div img");
const devToolsImages = document.querySelectorAll(".development-tools-div img");
const devToolsImagesPart2 = document.querySelectorAll(
  ".development-tools-div-part2 img"
);
const projectManagementToolsImages = document.querySelectorAll(
  ".project-management-tools-div img"
);
const testingToolsImages = document.querySelectorAll(".testing-tools-div img");
const aboutMeImages = document.querySelectorAll(".about-me-website-pic");
const projectDevToolsImages = document.querySelectorAll(
  ".project-development-tools-div img"
);
const projectDevToolsModalImages = document.querySelectorAll(
  ".project-development-tools img"
);
function addImageHoverEffect(images) {
  images.forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute("data-hover-src");
    const tooltipText = img.getAttribute("title");

    // Wrap the image in a span with the tooltip class
    const wrapper = document.createElement("span");
    wrapper.className = "tooltip";
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    // Create the tooltip text element
    const tooltip = document.createElement("span");
    tooltip.className = "tooltiptext";
    tooltip.innerText = tooltipText;
    wrapper.appendChild(tooltip);

    img.addEventListener("mouseover", () => {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", () => {
      img.src = originalSrc;
    });
  });
}
function hoverEffectWithoutToolTip(images) {
  images.forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute("data-hover-src");
    img.addEventListener("mouseover", () => {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", () => {
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
hoverEffectWithoutToolTip(aboutMeImages);
addImageHoverEffect(projectDevToolsImages);
addImageHoverEffect(projectDevToolsModalImages);

const phrases = ["Hi! Welcome to my website", "I'm Aldrin"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
const typeSpeed = 100; // Speed of typing
const deleteSpeed = 30;
const delayBetweenPhrases = 1000; // Delay before erasing
const delayAfterErasing = 500; // Delay before starting the next phrase

const headingElement = document.querySelector(".about-me-subtitle");
const cursorElement = document.createElement("span");
cursorElement.className = "typing-cursor";
headingElement.appendChild(cursorElement);

function typeEffect() {
  const currentPhrase = phrases[currentPhraseIndex];

  if (currentLetterIndex < currentPhrase.length) {
    headingElement.textContent += currentPhrase.charAt(currentLetterIndex);
    currentLetterIndex++;
    setTimeout(typeEffect, typeSpeed);
  } else {
    if (currentPhraseIndex < phrases.length - 1) {
      setTimeout(eraseEffect, delayBetweenPhrases); // Pause before erasing
    }
  }
}

function eraseEffect() {
  if (currentLetterIndex > 0) {
    const currentPhrase = phrases[currentPhraseIndex];
    headingElement.textContent = currentPhrase.substring(
      0,
      currentLetterIndex - 1
    );
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
