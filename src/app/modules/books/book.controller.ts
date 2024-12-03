import { NextFunction, Request, Response } from 'express';
import { BookService } from './book.service';

// controller for adding new book on database.
const addBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = req.body;
    const result = await BookService.addBookIndb(book);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// controller for getting all book from database.
const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await BookService.getAllBooks();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    next(err);
  }
};

// controller for getting a specific book using _id from database.
const getSingleBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.productId;
    const book = await BookService.getBookById(id);
    if (!book) {
      const error = new Error('Book not found');
      return next(error);
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    next(err);
  }
};

// controller for deleting a specific book using _id from database.
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.productId;
    const book = await BookService.deleteBook(id);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    next(err);
  }
};

// controller for updating a specific book fields using _id on database.
const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.productId;
    const data = req.body;
    const updatedBook = await BookService.updateBook(id, data);
    res.status(200).json({
      success: true,
      data: updatedBook,
    });
  } catch (err) {
    next(err);
  }
};

export const BookController = {
  addBook,
  getBooks,
  getSingleBook,
  deleteBook,
  updateBook,
};
