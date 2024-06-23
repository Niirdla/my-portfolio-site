const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");
const certificationItems = document.querySelectorAll(".certifications-item");
const certModalIndex = document.getElementById("cert-modal-index");

const certModalLeftArrowExternal = document.querySelector(
  ".cert-modal-left-arrow-external"
);
const certModalRightArrowExternal = document.querySelector(
  ".cert-modal-right-arrow-external"
);

let currentCertIndex = -1; // Track the current index of the certification

// Array to store the image sources
const certImages = Array.from(certificationItems).map((item) =>
  item.querySelector("img").getAttribute("src")
);

// Function to update the modal image
function updateModalImage(index) {
  modalImage.setAttribute("src", certImages[index]);
  currentCertIndex = index;
  modal.style.display = "block";
  certModalIndex.textContent = `${index + 1} / ${certImages.length}`;
  certModalLeftArrowExternal.style.display = "block";
  certModalRightArrowExternal.style.display = "block";
  document.body.style.overflow = "hidden";
}
// Event listener for certification items
certificationItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    updateModalImage(index);
  });
});

// Event listener for closing the modal
function closeModal() {
  modal.style.display = "none";
  certModalLeftArrowExternal.style.display = "none";
  certModalRightArrowExternal.style.display = "none";
  document.body.style.overflow = "auto";
}

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowRight" && modal.style.display === "block") {
    currentCertIndex = (currentCertIndex + 1) % certImages.length;
    updateModalImage(currentCertIndex);
  } else if (event.key === "ArrowLeft" && modal.style.display === "block") {
    currentCertIndex =
      (currentCertIndex - 1 + certImages.length) % certImages.length;
    updateModalImage(currentCertIndex);
  }
});

// Event listeners for external arrows
certModalLeftArrowExternal.addEventListener("click", function () {
  currentCertIndex =
    (currentCertIndex - 1 + certImages.length) % certImages.length;
  updateModalImage(currentCertIndex);
});

certModalRightArrowExternal.addEventListener("click", function () {
  currentCertIndex = (currentCertIndex + 1) % certImages.length;
  updateModalImage(currentCertIndex);
});
