import { auth, onAuthStateChanged } from "./firebase/firebase.js";

import { logout } from "./services/authService.js";
// عناصر الواجهة
const guestActions = document.getElementById("guest-actions");

const userActions = document.getElementById("user-actions");

const usernameDisplay = document.getElementById("username-display");

const logoutBtn = document.getElementById("logout-btn");

// حماية إضافية
if (!guestActions || !userActions || !usernameDisplay) {
  console.error("Header elements not found");
} else {
  // مراقبة المستخدم
  onAuthStateChanged(auth, (user) => {
    if (user) {
      guestActions.style.display = "none";

      userActions.style.display = "flex";

      usernameDisplay.textContent = user.email.split("@")[0];
    } else {
      guestActions.style.display = "flex";

      userActions.style.display = "none";
    }

    // إظهار العناصر بعد تحديد الحالة
    guestActions.style.visibility = "visible";
    userActions.style.visibility = "visible";
  });

  // تسجيل الخروج
  logoutBtn?.addEventListener("click", async () => {
    try {
      // await signOut(auth);
      await logout();

      window.location.href = "login.html";
    } catch (error) {
      console.error(error);

      alert("Logout failed");
    }
  });
}
