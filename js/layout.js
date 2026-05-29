import { loadComponent } from "./components/loadComponent.js";
import { initMobileMenu } from "./components/mobileMenu.js";

await Promise.all([
  loadComponent("#header", "/components/header.html"),

  loadComponent("#footer", "/components/footer.html"),

  loadComponent("#newsletter", "/components/newsletter.html"),
]);
initMobileMenu();
await import("./headerAuth.js");
