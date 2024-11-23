import { Types } from "mongoose";
import { Book } from "./book.interface";
import { BookModel } from "./book.model";

//add new book on database.
const addBookIndb = async (book: Book) => {
  try {
    const result = await BookModel.create(book);
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

//get all book from database
const getAllBooks = async () => {
  try {
    const result = await BookModel.find();
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

//get a specific book using _id from database
const getBookById = async (id: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("ID is not valid. Provide a mongodb _id");
    }
    const result = await BookModel.findById(id);
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

//delete a specific book from database usig _id
const deleteBook = async (id: string) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("ID is not valid. Provide a mongodb _id");
    }
    const checkBook = await BookModel.findById(id);
    if (!checkBook) {
      const error = new Error("Book not found");
      throw error;
    }
    const result = await BookModel.deleteOne({ _id: id });
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

//update a specific book fields on database using _id
const updateBook = async (id: string, data: object) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("ID is not valid. Provide a mongodb _id");
    }
    const checkData = validateUpdateData(data);
    if (!checkData) {
      const error = new Error("data is not valid");
      throw error;
    }
    const result = await BookModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
    return result;
  } catch (err) {
    throw err;
  }
};

//checking provided data for updating a book fields
const validateUpdateData = (data: object): boolean => {
  const allowedFields = [
    "title",
    "author",
    "price",
    "category",
    "description",
    "quantity",
    "inStock",
  ];
  const keys = Object.keys(data);
  const isValid = keys.every((key) => allowedFields.includes(key));
  return isValid && keys.length > 0;
};
export const BookService = {
  addBookIndb,
  getAllBooks,
  getBookById,
  deleteBook,
  updateBook,
};
