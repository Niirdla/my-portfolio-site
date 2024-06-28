document.addEventListener("DOMContentLoaded", function () {
  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = '<div class="loading-screen">Loading...</div>';
  document.body.appendChild(overlay);

  function renderHTML(htmlFile, targetElementId) {
    fetch(htmlFile)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");

        // Append the content to the target element
        const targetElement = document.getElementById(targetElementId);
        targetElement.innerHTML = doc.body.innerHTML;

        // Append CSS links to the head
        doc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
          document.head.appendChild(link.cloneNode(true));
        });

        // Append JS scripts to the body and ensure they are executed after the content is added
        doc.querySelectorAll("script").forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {
            newScript.src = script.src;
            newScript.defer = true; // Ensure defer attribute is set
          } else {
            newScript.textContent = script.textContent;
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      })
      .finally(() => {
        // Remove the overlay after all fetch operations are complete
        document.body.removeChild(overlay);
      });
  }

  renderHTML("about-me.html", "aboutMeContainer");
  renderHTML("certification.html", "certificationContainer");
  renderHTML("project.html", "projectContainer");
  renderHTML("connect.html", "connectContainer");

  const sections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  const nav = document.querySelector("nav");
  let isScrolling;

  // Set initial background state
  nav.classList.add("transparent");

  window.addEventListener("scroll", function () {
    window.clearTimeout(isScrolling);
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      nav.classList.remove("scrolled");
      nav.classList.add("transparent");
    }, 200);
  });
});
