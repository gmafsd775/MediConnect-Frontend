document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Please fill in both fields.');
    return;
  }

  // Firebase logic or custom backend
  console.log('Signup:', email, password);

  alert('Account created successfully!');
  window.location.href = 'login.html';
});
