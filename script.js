document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menu) {
    menu.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      menu.textContent = open ? "×" : "☰";
    });
  }

  document.querySelectorAll(".mobile-nav a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menu?.setAttribute("aria-expanded", "false");
      if (menu) menu.textContent = "☰";
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
