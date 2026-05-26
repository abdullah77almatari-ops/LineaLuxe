import { $ } from "../utils/dom.js";
// import { BREAKPOINTS } from "./constants/breakpoints";

let isMenuOpen = false;
const menuCheckbox = $("#menu-checkbox");
const navLinks = document.querySelectorAll(".nav-link");

// function closeMenu() {
//   if (!menuCheckbox) return;

//   menuCheckbox.checked = false;

//   document.body.classList.remove("menu-open");
// }
function closeMenu() {
  if (!menuCheckbox || !isMenuOpen) return;

  menuCheckbox.checked = false;

  document.body.classList.remove("menu-open");

  isMenuOpen = false;
}

export function initMobileMenu() {
  if (!menuCheckbox) return;

  menuCheckbox.addEventListener("change", () => {
    // document.body.classList.toggle("menu-open", menuCheckbox.checked);
    isMenuOpen = menuCheckbox.checked;

    document.body.classList.toggle("menu-open", isMenuOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (e) => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    const isInsideNavbar = navbar.contains(e.target);

    if (!isInsideNavbar && menuCheckbox.checked) {
      closeMenu();
    }
  });
}

/* ========================= */
/* MOBILE MENU */
/* ========================= */
// const menuCheckbox = document.getElementById("click");

// const navLinks = document.querySelectorAll(".nav-links a");

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     menuCheckbox.checked = false;
//     document.body.classList.remove("menu-open");
//   });
// });

/* منع التمرير عند فتح القائمة */

// menuCheckbox.addEventListener("change", () => {
//   if (menuCheckbox.checked) {
//     document.body.classList.add("menu-open");
//   } else {
//     document.body.classList.remove("menu-open");
//   }
// });

/* اغلاق القائمة عند تكبير الشاشة */

// window.addEventListener("resize", () => {
//   if (window.innerWidth > BREAKPOINTS.DESKTOP) {
//     menuCheckbox.checked = false;
//     document.body.classList.remove("menu-open");
//   }
// });
/* ========================= */
/* CLOSE MENU WHEN CLICK OUTSIDE */
/* ========================= */
// const overlay = document.querySelector(".overlay");

// if (overlay) {
//   overlay.addEventListener("click", () => {
//     menuCheckbox.checked = false;
//     document.body.classList.remove("menu-open");
//   });
// }
