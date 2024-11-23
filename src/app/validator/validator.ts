import mongoose, { Types } from "mongoose";
import { BookModel } from "../modules/books/book.model";

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
//email validator
export const validateEmail = (email: string): boolean => {
  const emailRegex = /.+\@.+\..+/;
  return emailRegex.test(email);
};

// Custom product validator
export const validateProduct = async (productId: string): Promise<boolean> => {
  if (!Types.ObjectId.isValid(productId)) {
    return false;
  }
  const productExists = await BookModel.exists({ _id: productId });
  return !!productExists;
};
