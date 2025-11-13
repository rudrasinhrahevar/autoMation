# 🔧 AutoLogic Automation Portal

A responsive **client dashboard and automation management system** built with modern web technologies.  
It includes secure authentication, profile management, project tracking, and client support sections — all designed with a clean dark theme.

---

## 🚀 Live Demo  
👉 [**Visit the Live Site**](https://rudrasinhrahevar.github.io/autoMation/)

---

## 📂 Project Structure

```
autoMation/
│
├── index.html              # Dashboard
├── projects.html           # Project list & status
├── invoices.html           # Client invoices
├── support.html            # Support & helpdesk
├── profile.html            # Client profile management
│
├── assets/
│   ├── css/
│   │   ├── theme.css       # Custom dark theme styles
│   ├── js/
│   │   ├── auth.js         # Authentication logic
│   │   ├── ui.js           # UI interactions and theme toggle
│   │   ├── profileValidation.js # Profile & security form validation
│   └── img/                # Images and icons
│
└── README.md
```

---

## 🧩 Key Features

- **Client Role Management** – Secure role-based access (`requireRole('client')`)
- **Responsive Design** – Fully optimized for mobile and desktop
- **Profile Management** – Edit name, email, phone, and preferences
- **Security Settings** – Password update and two-factor authentication option
- **Activity Log** – Displays recent actions (login, profile update, etc.)
- **Dark Mode UI** – Modern neon-accented interface
- **Validation** – Frontend input validation for registration and profile forms

---

## 🧠 Technologies Used

- **HTML5**  
- **CSS3 / Bootstrap 5.3**  
- **JavaScript (ES6)**  
- **SweetAlert2** (for popups and alerts)  
- **Lucide Icons** (modern SVG icon set)  

---

## ⚙️ Setup & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudrasinhrahevar/autoMation.git
   ```

2. **Open the project folder**
   ```bash
   cd autoMation
   ```

3. **Run locally**
   - Simply open `login.html` or `index.html` in a web browser.
   - No server setup required (pure client-side project).

---

## 🔐 Form Validation

Profile and security form validations are handled via `profileValidation.js`:
- Ensures valid name, email, and phone formats
- Strong password requirements (min 8 chars, number, letter, and special character)
- Confirm password match before submission

---

## 👤 Author

**Rudrasinh Rahevar**  
📧 [rudrasinhrevar@gmail.com](mailto:rudrasinhrevar@gmail.com)  
🌐 [GitHub Profile](https://github.com/rudrasinhrahevar)

---

## 📝 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.

---

✨ *AutoLogic Automation Portal – Smart, Secure, and Scalable.*
