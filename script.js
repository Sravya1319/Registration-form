document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  // Full Name validation
  const fullName = document.getElementById('fullName').value;
  const nameError = document.getElementById('nameError');
  if (fullName.length < 5) {
      nameError.textContent = "Name must be at least 5 characters long.";
      isValid = false;
  } else {
      nameError.textContent = "";
  }

  // Email validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  if (!email.includes('@')) {
      emailError.textContent = "Enter a valid email.";
      isValid = false;
  } else {
      emailError.textContent = "";
  }

  // Phone Number validation
  const phoneNumber = document.getElementById('phoneNumber').value;
  const phoneError = document.getElementById('phoneError');
  if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      phoneError.textContent = "Enter a valid 10-digit phone number.";
      isValid = false;
  } else {
      phoneError.textContent = "";
  }

  // Password validation
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  if (password.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters long.";
      isValid = false;
  } else if (password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      passwordError.textContent = "Password cannot be 'password' or the same as the user's name.";
      isValid = false;
  } else {
      passwordError.textContent = "";
  }

  // Confirm Password validation
  if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
  } else {
      confirmPasswordError.textContent = "";
  }

  if (isValid) {
      alert("Form submitted successfully!");
      // Here you can add the code to submit the form data to the server
  }
});
