import { model, Schema } from "mongoose";
import { Book } from "./book.interface";

const bookSchema = new Schema<Book>({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"], // Custom error message
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: {
      values: ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"],
      message:
        "{VALUE} is not a valid category. Allowed categories are Fiction, Science, SelfDevelopment, Poetry, Religious.",
    },
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [500, "Description cannot exceed 500 characters"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity cannot be negative"],
  },
  inStock: {
    type: Boolean,
    required: [true, "InStock is required"],
  },
});

export const BookModel = model<Book>("Book", bookSchema);
