const form = document.getElementById('registerForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let isValid = true;

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Full name validation
  if (fullName === "") {
    nameError.textContent = "Full name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation
  const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{3,}$/;
  if (!passPattern.test(password)) {
    passwordError.textContent = "Password must include A-Z, a-z, @ and min 3 chars.";
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    form.reset();
  }
});
