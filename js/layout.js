import { loadComponent } from "./components/loadComponent.js";

await Promise.all([
  loadComponent("#header", "/components/header.html"),

  loadComponent("#footer", "/components/footer.html"),

  loadComponent("#newsletter", "/components/newsletter.html"),
]);
await import("./headerAuth.js");
