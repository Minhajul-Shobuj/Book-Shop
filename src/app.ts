import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import { BookRoute } from "./app/modules/books/book.route";
import { OrderRoute } from "./app/modules/orders/order.route";
const app = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/v1/books", BookRoute);
app.use("/api/v1/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
