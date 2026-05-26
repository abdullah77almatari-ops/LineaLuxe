import * as authService from "./services/authService.js";

import { isValidEmail, isStrongPassword } from "./utils/validators.js";

import { getFirebaseErrorMessage } from "./utils/errorHandler.js";

const form = document.getElementById("signupForm");

if (form) {
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

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email format");
      return;
    }

    if (!isStrongPassword(password)) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await authService.register(email, password);

      alert("Account created successfully!");

      window.location.href = "login.html";
    } catch (error) {
      console.error(error);

      alert(getFirebaseErrorMessage(error));
    }
  });
}
