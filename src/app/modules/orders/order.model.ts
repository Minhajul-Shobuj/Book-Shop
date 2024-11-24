import mongoose, { model, Schema } from "mongoose";
import { Order } from "./order.interface";
import { validateEmail, validateBookId } from "../../validator/validator";

const orderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      validate: {
        validator: validateEmail,
        message: "Please enter a valid email address",
      },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: [true, "Product is required"],
      validate: {
        validator: validateBookId,
        message: "Please enter a valid Product id",
      },
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
      min: [0, "Total price must be a positive number"],
      validate: {
        validator: function (value: number) {
          return value >= this.quantity * 1;
        },
        message:
          "Total price must be at least the product price multiplied by quantity",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const OrderModel = model<Order>("Order", orderSchema);
