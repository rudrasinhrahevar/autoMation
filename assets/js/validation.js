
function validateRegisterForm() {
  const fullname = document.getElementById("fullname").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const department = document.getElementById("department").value;
  const interest = document.getElementById("interest").value;
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const role = document.getElementById("role").value;

  // ✅ Regex Patterns
  const usernamePattern = /^[a-zA-Z0-9]+$/; // only alphanumeric
  // allow common email characters like + and % (e.g. user+tag@example.com)
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/; // valid email
  const phonePattern = /^[0-9]{10}$/; // exactly 10 digits
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // at least 8 chars, 1 letter, 1 number, 1 special char

  // ✅ Validation sequence
if (fullname.trim() === "") {
  alert("Please enter your full name.");
  return false;
}


  if (!usernamePattern.test(username)) {
    alert("Username must contain only letters and numbers.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phonePattern.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }

  if (address === "") {
    alert("Please enter your address.");
    return false;
  }

  if (department === "") {
    alert("Please select your department.");
    return false;
  }

  if (interest === "") {
    alert("Please select your automation area of interest.");
    return false;
  }

  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long and include one letter, one number, and one special character."
    );
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  if (role === "") {
    alert("Please select your role.");
    return false;
  }

  alert("Registration Successful!");
  return true;
}