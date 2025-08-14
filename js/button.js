console.log("✅ button.js loaded");

// 🔐 Logout Button
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    alert("Logging out...");

    // 🔒 Optional: Firebase logout logic (uncomment if needed)
    // firebase.auth().signOut().then(() => {
    //   window.location.href = "index.html";
    // }).catch((error) => {
    //   console.error("Logout error:", error);
    // });
  });
}

// 🚀 Get Started Button
const getStartedBtn = document.getElementById("get-started-btn");
if (getStartedBtn) {
  getStartedBtn.addEventListener("click", () => {
    // Redirect to dashboard (adjust path if needed)
    window.location.href = "dashboard.html"; // or "doctor/dashboard.html"
  });
}
