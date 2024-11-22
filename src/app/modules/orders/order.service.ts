import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIndb = async (order: Order) => {
  try {
    const result = await OrderModel.create(order);
    console.log(result);
    return result;
  } catch (err) {
    console.error("Error creating user in DB:", err);
    throw err;
  }
};

const getAllOrders = async () => {
  try {
    const result = await OrderModel.find().populate("product");
    return result;
  } catch (err) {
    console.error("Error creating user in DB:", err);
    throw err;
  }
};

export const OrderService = {
  createOrderIndb,
  getAllOrders,
};
