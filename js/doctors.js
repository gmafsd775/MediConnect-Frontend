document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("category-grid");

  const categories = [
    { name: "Cardiology", icon: "images/Dr. Zarrar Ahmed.jpg", count: 12 },
    { name: "Neurology", icon: "images/Dr. Tahreem Ahmed.jpg", count: 8 },
    { name: "Dermatology", icon: "images/Dr. Usman Ahmed.jpg", count: 10 },
    { name: "pediatrics", icon: "images/Dr. Ayesha Tariq.jpg", count: 10 },
    { name: "orthopedics", icon: "images/Dr. Kamran Raza.jpg", count: 10 },
    { name: "psychiatry", icon: "images/Dr. Nadia Shah.jpg", count: 10 },
    { name: "ent", icon: "images/Dr. Bilal Qureshi.jpg", count: 10 },
    { name: "Ophthalmology", icon: "images/Dr. Hina Malik.png", count: 6 },
    { name: "gastro", icon: "images/Dr. Usman Farooq.png", count: 9 },
    { name: "pulmonology", icon: "images/Dr. Farah Javed.png", count: 11 }
  ];

  categories.forEach(cat => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.innerHTML = `
      <img src="${cat.icon}" alt="${cat.name}" />
      <h2>${cat.name}</h2>
      <p>${cat.count} doctors available</p>
    `;
    card.onclick = () => {
      // Redirect to doctor dashboard
      window.location.href = "doctor-dashboard.html";
    };
    grid.appendChild(card);
  });
});
