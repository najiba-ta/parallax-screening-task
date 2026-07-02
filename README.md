Item Calculator

This project was built as part of a technical screening task for Parallax Labs.

It is a simple full-stack application where users can add items with prices, and the system calculates the total price along with the most expensive item.

Features
Add multiple items with name and price
Remove items dynamically
Calculate total price
Identify the most expensive item
Simple API integration between frontend and backend
Basic validation and error handling
Responsive UI
Tech Stack
Next.js (App Router)
React
Tailwind CSS
JavaScript (ES6+)
Project Structure
app/
  api/
    calculate/
      route.js
  layout.js
  page.js

components/
  Navbar.jsx
  Header.jsx
  ItemForm.jsx
  ItemRow.jsx
  ResultCard.jsx
  Footer.jsx
API Endpoint
POST /api/calculate

This endpoint accepts an array of items and returns the total price and the most expensive item.

Request Example
[
  { "name": "Apple", "price": 20 },
  { "name": "Laptop", "price": 1000 }
]
Response Example
{
  "success": true,
  "total": 1020,
  "mostExpensive": {
    "name": "Laptop",
    "price": 1000
  }
}
Getting Started
Clone the repository
git clone https://github.com/najiba-ta/parallax-screening-task.git
Install dependencies
npm install
Run the development server
npm run dev

Open http://localhost:3000 in your browser.

How it works
User adds items (name and price)
Data is sent to the backend API
Backend calculates total and most expensive item
Result is displayed on the UI
Notes

This is a small project built for a technical screening task.
The focus was on functionality, clean code structure, and proper API integration.

Author

Najiba Takarrum
Email: shahidnajiba@gmail.com
GitHub: https://github.com/najiba-ta