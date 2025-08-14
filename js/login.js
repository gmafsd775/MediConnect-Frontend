document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    showToast('⚠️ Please enter both email and password.');
    return;
  }

  // Simulate successful login
  showToast('✅ Login successful! Redirecting to doctors list...');

  setTimeout(() => {
    window.location.href = 'doctors.html';
  }, 2000); // Wait 2 seconds before redirect
});

// Toast function
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.querySelector('p').textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hidden');
  }, 1800);
}
