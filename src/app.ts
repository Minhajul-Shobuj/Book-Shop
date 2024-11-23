import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import { BookRoute } from "./app/modules/books/book.route";
import { OrderRoute } from "./app/modules/orders/order.route";
import errorHandler from "./app/middlewares/errorHandler";
const app = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/books", BookRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Book Shop B4A2V1");
});

//middleWares
app.use(errorHandler);
export default app;
