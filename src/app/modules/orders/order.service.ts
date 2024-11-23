import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIndb = async (order: Order) => {
  try {
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
          _id: null, // Group all documents together
          totalRevenue: { $sum: "$totalPrice" }, // Sum the `totalPrice` field across all orders
        },
      },
      {
        $project: {
          _id: 0, // Exclude `_id` from the result
          totalRevenue: 1, // Include `totalRevenue` in the result
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
