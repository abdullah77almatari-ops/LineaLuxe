import * as authService from "./services/authService.js";

import { isValidEmail } from "./utils/validators.js";

import { getFirebaseErrorMessage } from "./utils/errorHandler.js";
import { showToast } from "./utils/toast.js";

const form = document.getElementById("loginForm");

if (form) {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const submitBtn = form.querySelector("button");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();

    if (!email || !password) {
      // alert("Please fill all fields");
      showToast("Please fill all fields", "error");
      return;
    }

    if (!isValidEmail(email)) {
      // alert("Invalid email format");
      showToast("Invalid email format", "error");
      return;
    }

    try {
      submitBtn.disabled = true;

      submitBtn.textContent = "Loading...";

      await authService.login(email, password);

      // console.log("Login Success:", userCredential.user);

      showToast("Login Success");

      window.location.href = "index.html";
    } catch (error) {
      // console.error(error);
      showToast("An error occurred. Please try again later.", "error");

      showToast(getFirebaseErrorMessage(error), "error");
    } finally {
      submitBtn.disabled = false;

      submitBtn.textContent = "Login";
    }
  });
}
