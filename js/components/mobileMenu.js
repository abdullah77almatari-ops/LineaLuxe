import { $, $$ } from "../utils/dom.js"; // 🌟 تأكد فقط من أن هذا المسار يؤدي إلى ملف dom.js لديك

// دالة مساعدة لإغلاق القائمة وإعادة التمرير للموقع
function closeMenu(menuCheckbox) {
  if (!menuCheckbox) return;
  menuCheckbox.checked = false;
  document.body.classList.remove("menu-open");
}

export function initMobileMenu() {
  // 🌟 استخدام دوال المساعدة الـ الخاصه بك لجلب العناصر بعد حقن الـ HTML
  const menuCheckbox = $("#click"); // يعادل document.querySelector("#click")
  const navLinks = $$(".nav-links a"); // يعادل document.querySelectorAll(".nav-links a")
  const overlay = $(".overlay"); // يعادل document.querySelector(".overlay")

  if (!menuCheckbox) return;

  // مراقبة فتح وإغلاق القائمة لمنع تمرير الصفحة الخلفية
  menuCheckbox.addEventListener("change", () => {
    document.body.classList.toggle("menu-open", menuCheckbox.checked);
  });

  // 1. إغلاق القائمة عند الضغط على أي رابط تنقل
  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu(menuCheckbox));
  });

  // 2. إغلاق القائمة عند الضغط على الـ Overlay الرمادي (خارج النافبار)
  if (overlay) {
    overlay.addEventListener("click", () => closeMenu(menuCheckbox));
  }
}
