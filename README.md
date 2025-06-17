# 🎓 EduLoop - Online Group Study Platform

**Live Site:** [https://eduloop.surge.sh](https://eduloop.surge.sh)  
**Client Repository:** [GitHub - Client](https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-IamFreak10)  
**Server Repository:** [GitHub - Server](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-IamFreak10)

## 🧠 Project Purpose

**EduLoop** is a MERN stack web application designed for collaborative online group study. It allows users (friends) to create assignments, attempt them, and evaluate their friends' submissions. This project was developed as part of a job assessment for BJET Inc. and emphasizes secure authentication, user-friendly interactions, and real-world development best practices.

---

## 🚀 Key Features

- 🔐 **Secure Authentication** (Email/Password & Google Sign-In)
- ✍️ **Create, Update, Delete Assignments**
- 📩 **Assignment Submission with Google Docs Link & Notes**
- 🧪 **Grading System**: Review & mark friends' submissions
- 🔎 **Search & Filter Assignments by Difficulty**
- 📜 **JWT Authentication** & Protected Routes
- 🌗 **Dark/Light Theme Toggle**
- 📱 **Fully Responsive Design** (Mobile, Tablet, Desktop)
- 🎭 **Framer Motion Animations**
- 🔔 **Toast/Sweet Alerts** for feedback & status
- 🧾 **Form Validation** for all input fields

---

## 🔐 Authentication Features

- Register with name, email, password, and photo
- Login via email/password or Google
- Password must include uppercase, lowercase, and be ≥6 characters
- JWT token-based private routes
- Profile picture & dropdown menu in navbar
- Persist login state across page reloads

---

## 🗂 Pages & Routes

| Page                       | Public/Private | Description |
|----------------------------|----------------|-------------|
| Home                       | Public         | Banner, Features, FAQ, Theme Toggle |
| Assignments                | Public         | View all assignments, filter & search |
| Create Assignment          | Private        | Form with validation and date picker |
| My Attempted Assignments   | Private        | See all submitted assignments by logged-in user |
| Pending Assignments        | Private        | Grade others’ pending submissions |
| Assignment Details         | Private        | View assignment & take it via form |
| Login/Register             | Public         | Auth forms with validation and feedback |

---

## 🔧 Tech Stack

### 💻 Frontend
- React.js
- React Router
- Tailwind CSS + DaisyUI
- Firebase Authentication
- React Datepicker
- Framer Motion
- Axios
- SweetAlert2
- React Hook Form
- Lottie Animation
- RSuite
- SwiperJS
- React Spinners

### 🌐 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS
- JSON Web Tokens (JWT)
- dotenv

---

## 📦 NPM Packages Used

### 👉 Dependencies
```bash
npm i axios firebase lottie-react lucide-react motion react react-dom react-router react-datepicker react-icons react-spinners react-type-animation rsuite sweetalert2 swiper tailwindcss @tailwindcss/vite react-awesome-reveal
