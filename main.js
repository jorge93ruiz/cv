// hide all sections
(() => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    if (!section.classList.contains("active")) {
      section.classList.add("hide");
    }
  });
})();

// menu handler
(() => {
  document.addEventListener("click", (e) => {
    if(e.target.classList.contains("menu-item")) {
      e.preventDefault();
      const targetSection = e.target.hash;
      // deactivate section
      document.querySelector(".section.active").classList.add("hide");
      document.querySelector(".section.active").classList.remove("active");
      // activate section
      document.querySelector(targetSection).classList.remove("hide");
      document.querySelector(targetSection).classList.add("active");
    }
  });
})();