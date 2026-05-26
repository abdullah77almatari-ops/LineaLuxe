import * as authService from "./services/authService.js";

import { isValidEmail } from "./utils/validators.js";

import { getFirebaseErrorMessage } from "./utils/errorHandler.js";

const form = document.getElementById("loginForm");

if (form) {
  const emailInput = document.getElementById("email");

  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email format");
      return;
    }

    try {
      const userCredential = await authService.login(email, password);

      console.log("Login Success:", userCredential.user);

      window.location.href = "index.html";
    } catch (error) {
      console.error(error);

      alert(getFirebaseErrorMessage(error));
    }
  });
}
