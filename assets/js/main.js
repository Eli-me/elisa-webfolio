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

  

  // Chiudi nav su resize > 900px
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      nav.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});


