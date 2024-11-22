import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/create-book", BookController.createBook);
router.get("/", BookController.getBooks);
router.get("/:id", BookController.getSingleBook);
router.delete("/:id", BookController.deleteBook);
router.put("/:id", BookController.updateBook);

export const BookRoute = router;
