import mongoose, { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: [true, "Customer email is required"], // Validation for required field
    match: [/.+\@.+\..+/, "Please enter a valid email address"], // Validation for email format
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book", // Reference to the Book model
    required: [true, "Product (book) is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"], // Ensure quantity is positive
  },
  totalPrice: {
    type: Number,
    required: [true, "Total price is required"],
    min: [0, "Total price must be a positive number"], // Ensure total price is non-negative
    validate: {
      validator: function (value: number) {
        return value >= this.quantity * 1; // Example logic: totalPrice must be at least `quantity * minimum product price`.
      },
      message:
        "Total price must be at least the product price multiplied by quantity",
    },
  },
});

export const OrderModel = model<Order>("Order", orderSchema);
