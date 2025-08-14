document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("download-pdf-btn");

  btn.addEventListener("click", function () {
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection) return;

    html2pdf().from(activeSection).set({
      margin: 10,
      filename: 'doctor-summary.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { format: 'a4', orientation: 'portrait' }
    }).save();
  });
});
