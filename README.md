# 🎉 EventEase - Event Management Platform

EventEase is a full-stack event management platform designed to help users browse, filter, and manage event venues across various cities. Whether it's a wedding, conference, concert, or exhibition, this platform helps users find the perfect venue based on type, guest capacity, rating, and location.

---

## ✨ Features

### ✅ Frontend
- Venue showcase with images and metadata
- Filters by location, event type, guest capacity, and rating
- Beautiful UI using Material-UI (MUI)
- Responsive Grid Layout (3x4)
- Interactive dropdowns with gradient styles

### ✅ Backend
- REST API for venue data
- MongoDB integration to manage venue details
- Express server with modular structure
- CORS enabled
- Filter, search, and sort support via API

---

## 🛠 Tech Stack

### Frontend
- React.js
- Material UI (MUI)
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv for configuration

---

## 📁 Project Structure

### Frontend
client/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── assets/images/
│ ├── App.js
│ └── main.jsx
├── package.json

shell
Copy
Edit

### Backend
server/
├── config/
│ └── db.js
├── controllers/
├── models/
├── routes/
├── app.js
├── server.js
├── .env

yaml
Copy
Edit

---

## ⚙️ Installation Guide

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/eventease.git
cd eventease
2. Backend Setup (Node.js + Express + MongoDB)
bash
Copy
Edit
cd server
npm install
👉 Create .env file in server/ with:
ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the Backend Server
bash
Copy
Edit
npm run dev
3. Frontend Setup (React)
bash
Copy
Edit
cd ../client
npm install
npm run dev
App will be running at: http://localhost:5173 (or your Vite port)
🚀 Deployment Notes
Frontend: Can be deployed using Vercel, Netlify, or GitHub Pages.

Backend: Deploy to Render, Railway, or any Node.js-compatible cloud platform.

MongoDB: Use MongoDB Atlas for cloud-hosted DB.

🙌 Contributions
Contributions are welcome! Create a pull request or raise an issue for ideas, bugs, or improvements.

📃 License
This project is licensed under the MIT License.

🧑‍💻 Author
Raju Kunarapu
Frontend & Full-Stack Web Developer
LinkedIn | Portfolio

yaml
Copy
Edit

---

Let me know if:
- You want this tailored for **Vite or Create React App**
- You’re using **MongoDB Atlas**
- You need a **live link section**
- You want a **demo gif or screenshot block**

I’ll happily update it for you.
