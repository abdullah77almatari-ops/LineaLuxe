import { loadComponent } from "./components/loadComponent.js";

await loadComponent("#header", "/components/header.html");

await loadComponent("#footer", "/components/footer.html");

await loadComponent("#newsletter", "/components/newsletter.html");

await import("./headerAuth.js");
