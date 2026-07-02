# Item Calculator

This project was developed as part of a technical screening task for **Parallax Labs**.

It is a simple full-stack application where users can add multiple items with prices, and the system calculates the total price along with the most expensive item using a custom API built with Next.js.

---

## ✨ Features

- Add multiple items dynamically (name & price)
- Remove items as needed
- Real-time form validation
- Calculate total price using backend API
- Identify the most expensive item
- Clean API integration (frontend ↔ backend)
- Responsive and modern UI

---

## 🛠 Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- JavaScript (ES6+)

---

## 📁 Project Structure


app/
├── api/
│ └── calculate/
│ └── route.js
├── layout.js
└── page.js

components/
├── Navbar.jsx
├── Header.jsx
├── ItemForm.jsx
├── ItemRow.jsx
├── ResultCard.jsx
└── Footer.jsx


---

## 🔌 API Endpoint

### POST `/api/calculate`

This endpoint receives an array of items and returns the total price and the most expensive item.

---

### 📥 Request Example
[
  { "name": "Apple", "price": 20 },
  { "name": "Laptop", "price": 1000 }
]
📤 Response Example
{
  "success": true,
  "total": 1020,
  "mostExpensive": {
    "name": "Laptop",
    "price": 1000
  }
}
🚀 Getting Started
1. Clone the repository
git clone https://github.com/najiba-ta/parallax-screening-task.git
2. Install dependencies
npm install
3. Run the development server
npm run dev

Open:

http://localhost:3000
⚙️ How it works
User adds items (name and price)
Data is sent to the backend API
Backend calculates:
Total price
Most expensive item
Result is displayed instantly on UI
🌐 Live Demo

👉 https://parallax-screening-task.vercel.app

📝 Notes

This project was built as a part of a technical screening task.

The focus was on:

Clean code structure
Functional full-stack implementation
Proper API integration
User-friendly UI/UX
👨‍💻 Author

Najiba Takarrum

Email: shahidnajiba@gmail.com
GitHub: https://github.com/najiba-ta
