import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // تحقق بسيط
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    // تسجيل الدخول
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("Login Success:", userCredential.user);

    alert("Login successful!");

    // تحويل للصفحة الرئيسية
    window.location.href = "index.html";
  } catch (error) {
    console.error(error);

    switch (error.code) {
      case "auth/invalid-credential":
        alert("Invalid email or password");
        break;

      case "auth/user-not-found":
        alert("User not found");
        break;

      case "auth/wrong-password":
        alert("Wrong password");
        break;

      default:
        alert(error.message);
    }
  }
});
