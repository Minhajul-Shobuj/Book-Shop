import { Request, Response } from "express";
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

export const OrderController = {
  createOrder,
};
