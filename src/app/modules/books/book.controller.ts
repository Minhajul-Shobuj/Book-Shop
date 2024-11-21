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

export const BookController = {
  createBook,
};
