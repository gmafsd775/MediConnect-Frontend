// lang.js

const LANG_STORAGE_KEY = 'selectedLang';
const DEFAULT_LANG = 'en';
const LANG_JSON_PATH = 'lang/lang.json';

let translations = {};
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;

// Load translations from JSON file
async function loadTranslations() {
  try {
    const response = await fetch(LANG_JSON_PATH);
    translations = await response.json();
    applyTranslations();
    updateDirection();
    populateDropdown();
    setDropdownValue();
  } catch (error) {
    console.error('Translation load failed:', error);
  }
}

// Apply translations to all elements with data-key
function applyTranslations() {
  document.querySelectorAll('[data-key]').forEach((el) => {
    const key = el.getAttribute('data-key');
    const translatedText = translations[currentLang]?.[key];
    if (translatedText) el.innerText = translatedText;
  });
}

// Update page direction (RTL for Urdu and Arabic)
function updateDirection() {
  const rtlLangs = ['ur', 'ar'];
  document.documentElement.dir = rtlLangs.includes(currentLang) ? 'rtl' : 'ltr';
}

// Populate dropdown dynamically
function populateDropdown() {
  const dropdown = document.getElementById('lang-select');
  if (!dropdown) return;

  const languageNames = {
    en: "English",
    ur: "اردو",
    hi: "हिन्दी",
    fr: "Français",
    ar: "العربية"
  };

  dropdown.innerHTML = ''; // Clear existing options

  Object.keys(translations).forEach((lang) => {
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = languageNames[lang] || lang;
    dropdown.appendChild(option);
  });
}

// Set dropdown to current language
function setDropdownValue() {
  const dropdown = document.getElementById('lang-select');
  if (dropdown) dropdown.value = currentLang;
}

// Handle language change
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  applyTranslations();
  updateDirection();
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('lang-select');
  if (dropdown) {
    dropdown.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  const getStartedBtn = document.getElementById('getStarted');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      window.location.href = 'choose-specialist.html';
    });
  }

  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      firebase.auth().signOut().then(() => {
        window.location.href = 'index.html';
      }).catch((error) => {
        console.error('Logout failed:', error);
      });
    });
  }

  loadTranslations();
});
