import { initMobileMenu } from "./components/mobileMenu.js";

import { loadPageFeatures } from "./router/pageLoader.js";
import { showToast } from "./utils/toast.js";

initMobileMenu();

try {
  await loadPageFeatures();
} catch (error) {
  // showToast('Failed to load page features ${error.message}', "error");
  showToast(`Failed to load page features: ${error.message}`, "error");
}

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
