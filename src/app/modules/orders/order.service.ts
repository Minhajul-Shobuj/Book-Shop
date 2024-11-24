import mongoose, { Types } from "mongoose";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";
import { BookModel } from "../books/book.model";

const createOrderIndb = async (order: Order) => {
  try {
    const checkBook = await BookModel.findById(order.product);
    if (!checkBook) {
      throw new Error("Check your product _id");
    }
    const result = await OrderModel.create(order);
    return result;
  } catch (err: any) {
    throw new Error(err);
  }
};

const CalculateRevenue = async () => {
  try {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);
    return result[0]?.totalRevenue || 0;
  } catch (err) {
    throw err;
  }
};

export const OrderService = {
  createOrderIndb,
  CalculateRevenue,
};
