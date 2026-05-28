import * as authService from "./services/authService.js";

import { isValidEmail, isStrongPassword } from "./utils/validators.js";

import { getFirebaseErrorMessage } from "./utils/errorHandler.js";
import { showToast } from "./utils/toast.js";

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
      // alert("Please fill all fields");
      showToast("Please fill all fields", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showToast("Invalid email format", "error");
      return;
    }

    if (!isStrongPassword(password)) {
      showToast("Password must be at least 8 characters", "error");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    try {
      await authService.register(email, password);

      showToast("Account created successfully!", "success");

      window.location.href = "login.html";
    } catch (error) {
      showToast(getFirebaseErrorMessage(error), "error");
    }
  });
}
