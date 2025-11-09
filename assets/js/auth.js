// Authentication system with LocalStorage

// Save user to localStorage
function registerUser(username, password, role) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // prevent duplicate usernames
  if (users.some(u => u.username === username)) {
    alert("Username already exists!");
    return false;
  }
  users.push({ username, password, role });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
  return true;
}

// Validate login
function loginUser(username, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    alert("Invalid username or password!");
    return false;
  }

  if (user.role === "admin") {
    window.location.href = "admin/index.html";
  } else if (user.role === "client") {
    window.location.href = "client/index.html";
  } else {
    alert("Role not recognized!");
  }
  return true;
}

// Handle register form
const regForm = document.getElementById("registerForm");
if (regForm) {
  regForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;
    if (username && password && role) {
      registerUser(username, password, role);
    } else {
      alert("All fields are required.");
    }
  });
}

// Handle login form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    if (username && password) {
      loginUser(username, password);
    } else {
      alert("Please enter username and password.");
    }
  });
}


// Logout helper
function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = '../login.html';
}