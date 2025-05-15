document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("primary-menu");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.contains("open");
      nav.classList.toggle("open");
      menuBtn.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  // Carosello base
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const nextBtn = carousel.querySelector(".carousel-next");
    const prevBtn = carousel.querySelector(".carousel-prev");
    let index = 0;

    const showSlide = (i) => {
      slides.forEach((slide, idx) => {
        slide.style.display = idx === i ? "block" : "none";
      });
    };

    showSlide(index);

    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prevBtn?.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });
  }

  // Chiudi nav su resize > 900px
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      nav.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});
