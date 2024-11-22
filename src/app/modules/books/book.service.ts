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
  const result = await BookModel.findById(id);
  return result;
};

// const getBookById = async (id: string) => {
//   try {
//     if (!Types.ObjectId.isValid(id)) {
//       throw new Error("Id is not valid");
//     }
//     const result = await BookModel.findById(id);
//     return result;
//   } catch (err) {
//     throw err;
//   }
// };
export const BookService = {
  createBookIndb,
  getAllBooks,
  getBookById,
};
