import { Request, Response, NextFunction } from "express";
import { Types } from "mongoose";
import { BookModel } from "../modules/books/book.model";

export const checkBookonDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { product } = req.body;

    if (!product || !Types.ObjectId.isValid(product)) {
      res.status(400).json({
        success: false,
        message: "Invalid product ID. Provide a valid MongoDB ObjectId.",
      });
    }

    const book = await BookModel.findById(product);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book not found in the database.",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};
