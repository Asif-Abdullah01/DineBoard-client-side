# 🍽️ DineBoard – Restaurant Management Website

## 🧾 Project Overview

DineBoard is a full-featured restaurant management web application developed using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It enhances a restaurant's online presence, improves user interaction, and simplifies internal management for staff.

**🌐 Live URL:** [https://phero-assignment.web.app/](https://phero-assignment.web.app/)

---

## ✨ Features

- 📱 Fully responsive design for mobile, tablet, and desktop
- 🔐 Secure authentication (Email/Password + Google/GitHub)
- 🔒 JWT token-based private route protection
- 🔑 Firebase and MongoDB credentials secured using environment variables
- 🌗 Light/Dark theme toggling
- 🔍 Pagination and search for food items
- 📝 Add, update, and purchase food items through user-friendly forms
- 🖼️ Gallery with lightbox image preview
- 📢 Toast and alert notifications for user actions
- ⏳ Loading spinners for data fetching states

---

## ⚙️ Tech Stack

### 🔧 Frontend:
- React.js
- React Router DOM
- Firebase Authentication
- Axios
- Tailwind CSS
- Swiper.js

### 🖥️ Backend:
- Node.js
- Express.js
- MongoDB (Atlas)
- JWT (jsonwebtoken)
- dotenv

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dineboard.git
cd dineboard
```

### 2. Install Dependencies

```bash
npm install
# Do this separately for both client and server folders if structured that way
```

### 3. Add Environment Variables

#### `.env` in Frontend:

```env
VITE_API_URL=https://your-backend-api.com
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
```

#### `.env` in Backend:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
```

### 4. Start the Development Server

Frontend:

```bash
npm run dev
```

Backend:

```bash
nodemon index.js
```

---

## 🔑 Default Credentials (for demo)

- Any valid email and password

---

## 📸 Screenshots (Add Here)

![alt text](image.png)

---

## 📦 NPM Packages Used

- `react-router-dom`
- `axios`
- `jsonwebtoken`
- `firebase`
- `yet-another-react-lightbox`
- `dotenv`
- `cors`
- `express`
- `react-toastify`
- `react-hot-toast`
- `react-helmet`
- `react-icons`
- `swiper`

---
