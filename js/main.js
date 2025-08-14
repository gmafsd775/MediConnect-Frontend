document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtn = document.getElementById("get-started-btn");
  if (getStartedBtn) {
    getStartedBtn.addEventListener("click", () => {
      // Redirect to login or signup page
      window.location.href = "login.html"; // or "signup.html"
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
      }).catch((error) => {
        console.error("Logout failed:", error);
      });
    });
  }
});
// Load translations and apply them
const LANG_STORAGE_KEY = 'selectedLanguage';
const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
if (savedLang) {
  document.getElementById("lang-select").value = savedLang;
  document.querySelectorAll("[data-key]").forEach(el => {
    el.textContent = translations[savedLang][el.dataset.key];
  });
}function toggleChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.classList.toggle("chat-hidden");
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");
  const userMsg = input.value.trim();
  if (!userMsg) return;

  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.textContent = userMsg;
  chatBody.appendChild(userDiv);

  const botDiv = document.createElement("div");
  botDiv.className = "bot-msg";
  botDiv.textContent = getBotReply(userMsg);
  chatBody.appendChild(botDiv);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("report")) return "You can view your reports in the Reports section.";
  if (msg.includes("appointment")) return "Appointments are managed via the dashboard.";
  return "Sorry, I didn’t understand. Try asking about reports or appointments.";
}
