export function renderHeader(user) {
  const registerBtn = document.getElementById("register-btn");
  const userBox = document.getElementById("user-section");
  const username = document.getElementById("username-text");

  if (user) {
    registerBtn.style.display = "none";
    userBox.style.display = "flex";

    // اسم المستخدم من الإيميل
    username.textContent = user.email.split("@")[0];
  } else {
    registerBtn.style.display = "block";
    userBox.style.display = "none";
  }
}
