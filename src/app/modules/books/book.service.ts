import { Types } from "mongoose";
import { Book } from "./book.interface";
import { BookModel } from "./book.model";

const createBookIndb = async (book: Book) => {
  try {
    const result = await BookModel.create(book);
    return result;
  } catch (error) {
    throw error;
  }
};
const getAllBooks = async () => {
  try {
    const result = await BookModel.find();
    return result;
  } catch (err) {
    throw err;
  }
};

const getBookById = async (id: string) => {
  try {
    const result = await BookModel.findById(id);
    return result;
  } catch (err) {
    throw err;
  }
};

const deleteBook = async (id: string) => {
  try {
    const result = await BookModel.deleteOne({ _id: id });
    return result;
  } catch (err) {
    throw err;
  }
};

const updateBook = async (id: string, data: object) => {
  try {
    const result = await BookModel.findOneAndUpdate({ _id: id }, data);
    return result;
  } catch (err) {
    throw err;
  }
};
export const BookService = {
  createBookIndb,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};
