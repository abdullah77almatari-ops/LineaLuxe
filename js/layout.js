import { loadComponent } from "./components/loadComponent.js";
import { initMobileMenu } from "./mobileMenu.js";

await Promise.all([
  loadComponent("#header", "/components/header.html"),

  loadComponent("#footer", "/components/footer.html"),

  loadComponent("#newsletter", "/components/newsletter.html"),
]);
initMobileMenu();
await import("./headerAuth.js");
