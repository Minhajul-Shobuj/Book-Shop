import { NextFunction, Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderService.createOrderIndb(order);
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

const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const totalRevenue = await OrderService.CalculateRevenue();
    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      data: {
        totalRevenue,
      },
    });
  } catch (err) {
    const error = new Error(
      "Failed to calculate revenue. Please try again later"
    );
    next(error);
  }
};
export const OrderController = {
  createOrder,
  getRevenue,
};
