export async function loadPageFeatures() {
  const path = window.location.pathname;

  if (path.includes("login")) {
    await import("../login.js");
  }

  if (path.includes("signup")) {
    await import("../signup.js");
  }
}
