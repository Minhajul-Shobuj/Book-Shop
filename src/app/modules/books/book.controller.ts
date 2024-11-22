import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = await BookService.createBookIndb(book);
    console.log(result);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
      message: "something went wrong",
    });
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch books",
      error: err,
    });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = await BookService.getBookById(id);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Book not Found",
      error: err,
    });
  }
};
const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const book = await BookService.deleteBook(id);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Book not Found",
      error: err,
    });
  }
};
const updateBook = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedBook = await BookService.updateBook(id, data);
    res.status(200).json({
      success: true,
      data: updateBook,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Book not Found",
      error: err,
    });
  }
};

export const BookController = {
  createBook,
  getBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
