const projectCloseBtn = document.querySelector(".project-modal-close");
const projectModal = document.getElementById("project-modal");
const projectModalImageTitle = document.getElementById(
  "project-modal-image-title"
);
const projectModalImage = document.getElementById("project-modal-image");
const projectModalVideo = document.getElementById("project-modal-video");
const projectModalIndex = document.getElementById("project-modal-index");
const projectItems = document.querySelectorAll(".projects-item");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentProjectId = ""; // Track the current project ID
let currentItemIndex = 0; // Track the current item index within the current project

const leftArrowExternal = document.querySelector(".left-arrow-external");
const rightArrowExternal = document.querySelector(".right-arrow-external");

// Create overlay element
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

const projects = {
  project1: {
    title: "Fishyfy",
    items: [
      { type: "image", src: "assets/img/projects/fishyfy/fishyfy.png" },
      { type: "video", src: "assets/vid/project/fishyfy/render.mp4" },
      //user
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/home-page.PNG",
      },
      { type: "image", src: "assets/img/projects/fishyfy/user-page/login.PNG" },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/signup.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/forgot-password-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/shop-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/shop-single-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/cart-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/payment-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/payment-option-cod.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/payment-option-gcash.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/payment-option-gcash-part2.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/order-details-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/catalogue.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/user-page/chatbot-page.PNG",
      },
      //admin-vendor
      {
        type: "image",
        src: "assets/img/projects/fishyfy/system-admin-page/admin-verification-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/admin-vendor-page/admin-vendor-home-page.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/admin-vendor-page/admin-vendor-product-list.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/admin-vendor-page/admin-vendor-brand-list.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/admin-vendor-page/admin-vendor-category-crude.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/admin-vendor-page/admin-vendor-item.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/admin-vendor-page/admin-vendor-manage-messages.PNG",
      },
      //system-admin
      {
        type: "image",
        src: "assets/img/projects/fishyfy/system-admin-page/system-admin-home.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/system-admin-page/system-admin-catalogue-crude.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/system-admin-page/system-admin-chatbot-crude.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/system-admin-page/system-admin-order-list.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/fishyfy/system-admin-page/system-admin-reports.PNG",
      },
    ],
    imageTitles: [
      "Fishyfy",
      "Fishyfy Teaser",
      "Home Page",
      "Login Page",
      "Sign Up Page",
      "Forgot Password Page",
      "Shop Page",
      "Shop Single Page",
      "Cart Page",
      "Payment Page",
      "Payment Option: COD",
      "Payment Option Gcash",
      "Payment Option: Gcash Scan",
      "Order Details Page",
      "Catalogue Page",
      "Chat Bot Page",
      "Admin Verification",
      "Admin Vendor: Home Page",
      "Admin Vendor: Product List",
      "Admin Vendor: Brand List",
      "Admin Vendor: Category CRUDE",
      "Admin Vendor: Item",
      "Admin Vendor: Manage Message",
      "System Admin: Home Page",
      "System Admin: Catalogue CRUDE",
      "System Admin: Chat Bot CRUDE",
      "System Admin: Order List",
      "System Admin: Reports",
    ],
    description: `Fishyfy aims to provide the client with the opportunity to monitor their products,
     both live and non-biological goods, enable them to communicate with their customers outside 
     social media platforms, and to sell and highlight their merchandise in an optimized, 
     organized manner. `,
    keyFeatures: `<li>AI Chatbot</li> 
     <li>Inventory Management System</li>
     <li>User Access Control:</li>
     <ul><li>Viewer (Can only browse the site)</li> 
     <li>User (Can buy products)</li>  <li>Admin Vendor (Has access to CRUD operations on inventory)</li> 
     <li>System Admin (Has access to all functions of Fishyfy)</li></ul>
     <li>Analytics</li>`,
  },
  project2: {
    title: "Tri-bin",
    items: [
      { type: "image", src: "assets/img/projects/tribin/tribin.png" },
      { type: "video", src: "assets/vid/project/tri-force/loop-video.mp4" },
      {
        type: "image",
        src: "assets/img/projects/tribin/best-web-app-award.png",
      },
      { type: "image", src: "assets/img/projects/tribin/certificate.png" },
      { type: "image", src: "assets/img/projects/tribin/web/login.PNG" },
      { type: "image", src: "assets/img/projects/tribin/web/dashboard.PNG" },
      {
        type: "image",
        src: "assets/img/projects/tribin/web/admin-add-user.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/tribin/web/admin-edit-user.PNG",
      },
      {
        type: "image",
        src: "assets/img/projects/tribin/web/80-percent.PNG",
      },
    ],
    imageTitles: [
      "Tri-bin",
      "Tri-bin Teaser",
      "NUFV IoT Symposium 2023: Best Web App Award",
      "Best Web App Award Certificate",
      "Login Page",
      "Dashboard",
      "Admin: Add User",
      "Admin: Edit User",
      "80% Display",
    ],
    description: `Tri-bin aims to create a cleaner and healthier environment for students, 
    professors, and staff at National University Fairview. 
    The project also aims to enhance the efficiency of housekeeping staff in waste collection by
    sending the staff alerts when the waste level reaches 80%. The National
    University Fairview housekeeping department relies on a fixed schedule for trash
    collection, resulting in overflowing bins and littered public spaces. The project's
    objective is to reduce the frequency of overflowing trash by 90%. `,
    keyFeatures: `<li>Real-time Monitoring of Trash</li> 
    <li>User Access Control:</li>
    <ul><li>User (View only)</li><li>Admin (Read and Edit Dashboard)</li> </ul>
    <li>Full Capacity Alert System</li>
    <li>Hand Sanitation</li>
    <li>Automatic Lid Opening</li>`,
  },
  project3: {
    title: "My portfolio website",
    items: [
      { type: "image", src: "assets/img/projects/about-me/about-me.png" },
      { type: "image", src: "assets/img/projects/about-me/about-me-part2.png" },
    ],
    imageTitles: ["My Portfolio Website", "My Portfolio Website"],
    description: `This website highlights my skills, education, and experience, 
    while also featuring my most impressive projects and certifications.`,
    keyFeatures: `<li>About Me (Skills, Experience, and Education</li> 
    <li>Certification Highlights</li>
    <li>Project Highlights</li>
    <li>Connect with me</li>`,
  },
};

function updateModalContent(projectId, itemIndex) {
  const project = projects[projectId];
  const projectIdTest = projectId;
  const item = project.items[itemIndex];

  console.log("Project>>>", project);
  console.log("projectIdTest>>>", projectIdTest);
  // Update the project title
  updateProjectTitle(projectId);

  // // Update modal content after the slide-out animation
  // setTimeout(() => {
  //   const slideInClass =
  //     direction === "left" ? "slide-in-left" : "slide-in-right";
  if (item.type === "image") {
    projectModalImage.setAttribute("src", item.src);
    projectModalImage.style.display = "block";
    projectModalVideo.style.display = "none";
    //     projectModalImage.classList.add(slideInClass);
    projectModalImage.classList.remove("hidden");
    //     projectModalImage.addEventListener(
    //       "animationend",
    //       function () {
    //         projectModalImage.classList.remove(slideInClass);
    //       },
    //       { once: true }
    //     );
  } else if (item.type === "video") {
    projectModalVideo.setAttribute("src", item.src);
    projectModalVideo.style.display = "block";
    projectModalImage.style.display = "none";
    // projectModalVideo.classList.add(slideInClass);
    projectModalVideo.classList.remove("hidden");
    projectModalVideo.load();
    projectModalVideo.play();
    //     projectModalVideo.addEventListener(
    //       "animationend",
    //       function () {
    //         projectModalVideo.classList.remove(slideInClass);
    //       },
    //       { once: true }
    //     );
  }

  //   // Slide animation for index and title
  projectModalIndex.textContent = `${itemIndex + 1}/${project.items.length}`;
  projectModalImageTitle.textContent = project.imageTitles[itemIndex];
  //   projectModalIndex.classList.add(slideInClass);
  //   projectModalImageTitle.classList.add(slideInClass);
  projectModalIndex.classList.remove("hidden");
  projectModalImageTitle.classList.remove("hidden");
  projectModalImageTitle.style.display = "block";
  projectModalIndex.style.display = "block";
  //   projectModalIndex.addEventListener(
  //     "animationend",
  //     function () {
  //       projectModalIndex.classList.remove(slideInClass);
  //     },
  //     { once: true }
  //   );
  //   projectModalImageTitle.addEventListener(
  //     "animationend",
  //     function () {
  //       projectModalImageTitle.classList.remove(slideInClass);
  //     },
  //     { once: true }
  //   );
  // }, 0); // Duration of the slide-out animation
  leftArrowExternal.style.display = "block";
  rightArrowExternal.style.display = "block";
  overlay.style.display = "block";
}

function closeProjectModal() {
  projectModal.style.display = "none";
  document.body.style.overflow = "auto";
  overlay.style.display = "none";
  projectModalVideo.pause();
  leftArrowExternal.style.display = "none";
  rightArrowExternal.style.display = "none";
}

projectCloseBtn.addEventListener("click", closeProjectModal);

leftArrow.addEventListener("click", function () {
  currentItemIndex =
    (currentItemIndex - 1 + projects[currentProjectId].items.length) %
    projects[currentProjectId].items.length;
  projectModalVideo.pause();
  updateModalContent(currentProjectId, currentItemIndex);
});

rightArrow.addEventListener("click", function () {
  currentItemIndex =
    (currentItemIndex + 1) % projects[currentProjectId].items.length;
  projectModalVideo.pause();
  updateModalContent(currentProjectId, currentItemIndex);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeProjectModal();
  } else if (event.key === "ArrowRight") {
    currentItemIndex =
      (currentItemIndex + 1) % projects[currentProjectId].items.length;
    projectModalVideo.pause();
    updateModalContent(currentProjectId, currentItemIndex);
  } else if (event.key === "ArrowLeft") {
    currentItemIndex =
      (currentItemIndex - 1 + projects[currentProjectId].items.length) %
      projects[currentProjectId].items.length;
    projectModalVideo.pause();
    updateModalContent(currentProjectId, currentItemIndex);
  }
});

projectItems.forEach(function (item) {
  item.addEventListener("click", function () {
    currentProjectId = item.getAttribute("data-project");
    currentItemIndex = 0;
    updateModalContent(currentProjectId, currentItemIndex);
    projectModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});
leftArrowExternal.addEventListener("click", function () {
  const projectKeys = Object.keys(projects);
  const currentIndex = projectKeys.indexOf(currentProjectId);
  const previousIndex =
    (currentIndex - 1 + projectKeys.length) % projectKeys.length;
  const previousProjectId = projectKeys[previousIndex];

  currentProjectId = previousProjectId;
  currentItemIndex = 0; // Reset to first item of the previous project
  projectModalVideo.pause();
  loadProjectHtmlContent(currentProjectId); // Pass the project ID
  updateModalContent(currentProjectId, currentItemIndex);

  // Update visibility of external arrows based on navigation
  updateExternalArrowsVisibility();
});

rightArrowExternal.addEventListener("click", function () {
  const projectKeys = Object.keys(projects);
  const currentIndex = projectKeys.indexOf(currentProjectId);
  const nextIndex = (currentIndex + 1) % projectKeys.length;
  const nextProjectId = projectKeys[nextIndex];

  currentProjectId = nextProjectId;
  currentItemIndex = 0; // Reset to first item of the next project
  projectModalVideo.pause();
  loadProjectHtmlContent(currentProjectId); // Pass the project ID
  updateModalContent(currentProjectId, currentItemIndex);

  // Update visibility of external arrows based on navigation
  updateExternalArrowsVisibility();
});

function updateProjectTitle(projectId) {
  const projectModalTitle = document.getElementById("pm-title");
  const project = projects[projectId];
  console.log("project>>>", project);
  if (projectModalTitle && project) {
    projectModalTitle.textContent = project.title;
  }
  const projectDescription = document.getElementById("project-description");
  if (projectDescription && project) {
    projectDescription.textContent = project.description;
  }
}
function loadProjectHtmlContent(projectId) {
  fetch("project.html")
    .then((response) => response.text())
    .then((data) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;
      const project = projects[projectId];

      // Select the specific project's div you want
      const specificDiv = tempDiv.querySelector(
        `.projects-item[data-project="${projectId}"] .project-development-tools-div`
      );

      const projectDevelopmentToolsDiv = document.getElementById(
        "project-development-tools"
      );

      const keyFeaturesList = document.getElementById("key-features-list");
      const gitAttButton = tempDiv.querySelector(
        `.projects-item[data-project="${projectId}"] .github-button`
      );
      const gitButt = document.getElementById("git-button");
      if (specificDiv) {
        projectDevelopmentToolsDiv.innerHTML = specificDiv.innerHTML; // Inject the specific div into the modal
        console.log("projectDevelopmentToolsDiv", projectDevelopmentToolsDiv);
        console.log(
          " projectDevelopmentToolsDiv.innerHTML",
          projectDevelopmentToolsDiv.innerHTML
        );
        // Change the display property of the images within project-development-tools-div
        const images = projectDevelopmentToolsDiv.querySelectorAll("img");
        images.forEach((img) => {
          // Change the src attribute to the value of data-hover-src
          const hoverSrc = img.getAttribute("data-hover-src");
          if (hoverSrc) {
            img.setAttribute("src", hoverSrc);
          }
        });

        keyFeaturesList.innerHTML = project.keyFeatures;
        gitButt.setAttribute("href", gitAttButton.getAttribute("href"));
        gitButt.innerHTML = gitAttButton.outerHTML;
      } else {
        console.error("Specific div not found in project.html");
      }
    })
    .catch((error) => console.error("Error loading project HTML:", error));
}

document.querySelectorAll(".projects-item").forEach((item) => {
  item.addEventListener("click", function () {
    const projectId = item.getAttribute("data-project");
    currentProjectId = projectId;
    currentItemIndex = 0;
    loadProjectHtmlContent(projectId); // Pass the project ID
    updateModalContent(projectId, currentItemIndex);
    projectModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});
