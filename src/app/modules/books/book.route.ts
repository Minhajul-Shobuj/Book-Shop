import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

// route for add a book on database.
router.post("/create-book", BookController.addBook);

// route for get all books from database.
router.get("/", BookController.getBooks);

// route for get a single book using _id from database.
router.get("/:bookId", BookController.getSingleBook);

// route for delete a single book using _id from database.
router.delete("/:bookId", BookController.deleteBook);

// route for update a book fields using _id from database.
router.put("/:id", BookController.updateBook);

export const BookRoute = router;
