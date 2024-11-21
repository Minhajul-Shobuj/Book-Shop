import { Book } from "./book.interface";
import { BookModel } from "./book.model";

const createBookIndb = async (book: Book) => {
  try {
    const result = await BookModel.create(book);
    return result;
  } catch (error) {
    console.error("Error creating user in DB:", error);
    throw error;
  }
};
export const BookService = {
  createBookIndb,
};
