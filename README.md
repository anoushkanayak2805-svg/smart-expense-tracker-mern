# 💰 Smart Expense Tracker (MERN Stack)

A full-stack Expense Tracker web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Users can add, edit, delete, and visualize their expenses with an interactive UI.

---

## 🚀 Live Demo

🌐 Frontend: https://smart-expense-tracker-mern-peach.vercel.app
🔗 Backend API: https://expense-tracker-backend1-jfp5.onrender.com

---

## 📌 Features

* ➕ Add new expenses
* ✏️ Edit existing expenses
* ❌ Delete expenses
* 📊 Visualize expenses using Pie Chart
* 💰 Total expense calculation
* ⚡ Real-time updates
* 🌐 Fully deployed (Frontend + Backend)

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios
* Chart.js
* CSS

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Atlas)

### Deployment:

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
smart-expense-tracker-mern/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── index.html
│
└── README.md
```

---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/anoushkanayak2805-svg/smart-expense-tracker-mern.git
cd smart-expense-tracker-mern
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/expenses     | Get all expenses |
| POST   | /api/expenses     | Add new expense  |
| PUT    | /api/expenses/:id | Update expense   |
| DELETE | /api/expenses/:id | Delete expense   |

---

## 📊 Example Request

```json
{
  "amount": 100,
  "category": "food",
  "description": "burger"
}
```

---

## ⚠️ Notes

* Free tier backend (Render) may take ~30 seconds to wake up.
* Ensure MongoDB Atlas IP access is set to `0.0.0.0/0`.

---

## 📈 Future Improvements

* 🔐 User Authentication (Login/Signup)
* 📅 Date-wise filtering
* 📊 Advanced analytics (monthly/yearly)
* 📱 Mobile responsiveness improvements

---

## 👩‍💻 Author

**Anoushka Nayak**
GitHub: https://github.com/anoushkanayak2805-svg

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
