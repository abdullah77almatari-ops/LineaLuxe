import { initMobileMenu } from "./components/mobileMenu.js";

initMobileMenu();

/* ========================= */
/* Accordion */
/* ========================= */

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  if (!header) return;

  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
