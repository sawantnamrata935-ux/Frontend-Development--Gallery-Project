function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function filterImages(category) {
  let images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    img.style.display =
      category === "all" || img.classList.contains(category)
        ? "block"
        : "none";
  });
}