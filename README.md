# Gamecels
Gamecels is a locally hosted website that helps users to search  up any video game of their choice and fetching all details for that game.
#🎮 Gamecels is a full-stack video game e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse games, view game details, add items to a cart, place orders, and manage authentication.

---

## 🚀 Features

- 🖥️ Landing page with navigation
- 🕹️ Games catalog with pricing and "Details" button
- 📦 Game details page with "Add to Cart"
- 🛒 Shopping cart review & checkout process
- 🧾 Order history page
- 🔐 Login and Signup with user authentication

---

## 🧰 Tech Stack

| Frontend        | Backend            | Database     |
|----------------|--------------------|--------------|
| React.js       | Node.js + Express  | MongoDB      |
| React Router   | JWT Authentication | 
| CSS Modules    | Body-parser        |

---

## 📁 Project Structure

gamecels/
├── client/ # React Frontend
│ └── src/# React pages (Landing, Login, Games, etc.)
│ ├── public/ 
│ ├── App.js # React Router setup
│ └── index.js
├── server/ # Express Backend
│ ├── node modules/ 
│ └── server.js # Express server entry
├── .env # Environment variables
├── README.md # Project documentation
└── package.json # Scripts & dependencies


### Prerequisites
- Node.js and npm
- MongoDB Atlas account (or local MongoDB)

---

### 🔧 Installation


1. Install backend dependencies
bash
Copy
Edit
cd server
npm install
2. Install frontend dependencies
bash
Copy
Edit
cd ../client
npm install
3. Set up environment variables
Create a .env file inside the server/ directory:

ini
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/gamecels
JWT_SECRET=yourSecretKey
🏃 Running the App (Dev Mode)
From the root folder:

bash
Copy
Edit
npm install
npm run start
This runs both the frontend (localhost:3000) and backend (localhost:5000) using concurrently.



🤝 Contributing
Contributions are welcome!
Feel free to fork the repo and open a pull request.

📜 License
This project is open source and available under the MIT License.

👨‍💻 Author
ShreyasSreenivas23
