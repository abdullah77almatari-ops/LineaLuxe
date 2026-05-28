import { showToast } from "../utils/toast";

export async function loadComponent(selector, path) {
  try {
    const container = document.querySelector(selector);

    if (!container) return;

    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    container.innerHTML = await response.text();
  } catch (error) {
    // console.error(error);
    showToast(`Error loading component: ${error.message}`, "error");
  }
}
