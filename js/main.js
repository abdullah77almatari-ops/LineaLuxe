/* ========================= */
/* Accordion */
/* ========================= */
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* ========================= */
/* MOBILE MENU */
/* ========================= */
const menuCheckbox = document.getElementById("click");

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
    document.body.classList.remove("menu-open");
  });
});

/* منع التمرير عند فتح القائمة */

menuCheckbox.addEventListener("change", () => {
  if (menuCheckbox.checked) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});

/* اغلاق القائمة عند تكبير الشاشة */

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    menuCheckbox.checked = false;
    document.body.classList.remove("menu-open");
  }
});
/* ========================= */
/* CLOSE MENU WHEN CLICK OUTSIDE */
/* ========================= */
const overlay = document.querySelector(".overlay");

if (overlay) {
  overlay.addEventListener("click", () => {
    menuCheckbox.checked = false;
    document.body.classList.remove("menu-open");
  });
}
