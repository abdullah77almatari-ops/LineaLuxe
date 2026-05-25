/* ========================= */
/* Accordion */
/* ========================= */

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* ========================= */
/* (Hamburger Menu) */
/* ========================= */
// const btnClick = document.getElementById("click");
// const nav = document.getElementById("navbar");
// function hamburger(selector1, selector2) {
//   if (selector1) {
//     selector2.Visibility = visible;
//   }
//   selector2.Visibility = hidden;
// }
// hamburger(btnClick, nav);

// Testimonials slider (simple)
let currentTestimonial = 0;

const testimonials = document.querySelectorAll(".test-card");
const prevBtn = document.querySelector(".slid-btn:first-child");
const nextBtn = document.querySelector(".slid-btn:last-child");

function updateSlider() {
  // يعمل فقط للشاشات الصغيرة
  if (window.innerWidth <= 700) {
    testimonials.forEach((card, index) => {
      card.style.display = index === currentTestimonial ? "block" : "none";
    });
  } else {
    // في الشاشات الكبيرة يظهر الكرتين معاً
    testimonials.forEach((card) => {
      card.style.display = "block";
    });
  }
}

// أزرار التنقل
prevBtn.addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;

  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;

  updateSlider();
});

// عند تحميل الصفحة
updateSlider();

// عند تغيير حجم الشاشة
window.addEventListener("resize", updateSlider);
