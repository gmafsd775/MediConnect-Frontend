// ✅ DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  // 🔄 Tab Switching
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      tabPanels.forEach(panel => panel.classList.add("hidden"));
      const targetId = btn.getAttribute("data-tab");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.remove("hidden");
    });
  });

  // 🔒 Logout Logic
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "logout.html"; // Replace with Firebase signOut if needed
    });
  }

  // 🧾 PDF Export using jsPDF
  const exportBtn = document.getElementById("export-pdf");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const reportElement = document.getElementById("report-content");
      if (reportElement) {
        const reportText = reportElement.innerText.trim();
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(reportText, 10, 20);
        doc.save("medical-report.pdf");
      } else {
        alert("Report content not found.");
      }
    });
  }

  // 💬 Chatbot Mock
  const chatLog = document.getElementById("chat-log");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");

  if (chatSend && chatInput && chatLog) {
    chatSend.addEventListener("click", () => {
      const userMsg = chatInput.value.trim();
      if (userMsg) {
        const userBubble = document.createElement("div");
        userBubble.className = "chat-bubble user";
        userBubble.textContent = "You: " + userMsg;
        chatLog.appendChild(userBubble);

        const botBubble = document.createElement("div");
        botBubble.className = "chat-bubble bot";
        botBubble.textContent = "Bot: I'm still learning. Try again later.";
        chatLog.appendChild(botBubble);

        chatInput.value = "";
      }
    });
  }
});
