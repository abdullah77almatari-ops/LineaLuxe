// async function loadComponent(selector, url) {
//   const container = document.querySelector(selector);
//   if (!container) return;

//   const response = await fetch(url);
//   container.innerHTML = await response.text();
// }

// loadComponent("#header", "components/header.html");
// loadComponent("#footer", "components/footer.html");
// loadComponent("#newsletter", "components/newsletter.html");

async function loadComponent(selector, url) {
  const container = document.querySelector(selector);

  if (!container) return;

  const response = await fetch(url);

  container.innerHTML = await response.text();
}

// تحميل جميع المكونات
async function initLayout() {
  await loadComponent("#header", "components/header.html");

  await loadComponent("#footer", "components/footer.html");

  await loadComponent("#newsletter", "components/newsletter.html");

  // بعد تحميل الهيدر نشغل auth
  import("./headerAuth.js");
}

// تشغيل النظام
initLayout();
