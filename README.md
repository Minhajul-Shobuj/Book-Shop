# 📚 Project Name

_This is a backend application for e-commerce app. The application is created using typescript, express, mongoose. Used MongoDb atlas for database. It has maximum number of crud operation that an e-commerce application needed._

---

## 🚀 Live Demo

🌐 [Click here to view the live version](https://assignment-2-rho-six.vercel.app/)

---

## ✨ Features

✅ **Feature 1**: Can add, update, delete product. Can get products and can also get exact product using \_id;  
✅ **Feature 2**: Can post order and get total revenue from all orders.

✅ **Feature 3**: All api has meningful validation with error message and where it stucked.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- 🟢 [Node.js](https://nodejs.org/) (v16+)
- 🗄️ [MongoDB](https://www.mongodb.com/) (or a MongoDB Atlas cluster)

---

## 🛠️ Installation

### Step 1: Clone the repository

```bash
git https://github.com/Minhajul-Shobuj/Book-Shop
cd your-repository-name

```

### Step 2: Install dependencies

```bash
npm install

```

### Step 3: Setup Environment Variables

Create a .env file in the root directory and add your environment variables:

```
NODE_ENV=development
PORT=5000
MONGO_URI=your-mongodb-uri

```

▶️ Usage
Development Server:
Start the development server:

```bash
npm run dev
```

Production Server:

1. Build the project:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

📖 API Endpoints

📚 Books

1. GET /api/books: Get all books.
2. GET /api/books/:id: Get a single book by ID.
3. POST /api/books: Create a new book.
4. PUT /api/books/:id: Update a book by ID.
5. DELETE /api/books/:id: Delete a book by ID.

   🛒 Orders

6. POST /api/orders: Create a new order.
7. GET /api/orders/revenue: Calculate total revenue from orders

🔧 Scripts

1. npm run dev: Start the development server.
2. npm run build: Build the project.
3. npm start: Start the production server.

🤝 Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch:

```bash
git checkout -b feature-branch
Make changes and commit:
```

```bash
git commit -m "Add feature or fix bug"
Push changes to your fork:
```

```bash
git push origin feature-branch
```

Submit a pull request.

🙏 Acknowledgments
Special thanks to [Programming Hero](https://github.com/ProgrammingHero1) for guidance and support.

<H1>🌟 Don't forget to star ⭐ the repository if you found this helpful!</H1>
