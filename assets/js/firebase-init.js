// assets/js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  // 🔐 Your Firebase config here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

