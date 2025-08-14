// ✅ firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl4RjW_VHtF3rE_wRqRTNxe910sVDFL0g",
  authDomain: "mediconnect-715d5.firebaseapp.com",
  projectId: "mediconnect-715d5",
  storageBucket: "mediconnect-715d5.firebasestorage.app",
  messagingSenderId: "739907331926",
  appId: "1:739907331926:web:1cf95e6d02a58cef9fd8f7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
