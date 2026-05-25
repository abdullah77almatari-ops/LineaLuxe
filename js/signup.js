import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.getElementById("signupForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // تحقق من الحقول
  if (!username || !email || !password || !confirmPassword) {
    alert("Please fill all fields");
    return;
  }

  // تحقق من تطابق كلمة المرور
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    // إنشاء الحساب
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User Created:", userCredential.user);

    alert("Account created successfully!");

    // تحويل لصفحة الدخول
    window.location.href = "login.html";
  } catch (error) {
    console.error(error);

    switch (error.code) {
      case "auth/email-already-in-use":
        alert("Email already exists");
        break;

      case "auth/invalid-email":
        alert("Invalid email");
        break;

      case "auth/weak-password":
        alert("Weak password");
        break;

      default:
        alert(error.message);
    }
  }
});
