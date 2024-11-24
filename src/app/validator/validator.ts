import mongoose, { Types } from "mongoose";
import { BookModel } from "../modules/books/book.model";

//validator for checking unique book name
export const uniqueValidator = (fieldName: string, modelName: string) => {
  return async function (value: string) {
    const existingRecord = await mongoose.models[modelName].findOne({
      [fieldName]: value,
    });
    return !existingRecord;
  };
};

//validator for provided data for updating a book fields
export const validateUpdateData = (data: object): boolean => {
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
export const validateEmail = (email: string): boolean => {
  const emailRegex = /.+\@.+\..+/;
  return emailRegex.test(email);
};

export const vlidateProduct = (value: string) => {
  return mongoose.Types.ObjectId.isValid(value);
};
