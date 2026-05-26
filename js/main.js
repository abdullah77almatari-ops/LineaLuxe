import { initMobileMenu } from "./components/mobileMenu.js";

import { loadPageFeatures } from "./router/pageLoader.js";

initMobileMenu();

await loadPageFeatures();

/* ========================= */
/* Accordion */
/* ========================= */

document.addEventListener("click", (e) => {
  const header = e.target.closest(".accordion-header");

  if (!header) return;

  const item = header.closest(".accordion-item");

  if (!item) return;

  item.classList.toggle("active");
});
