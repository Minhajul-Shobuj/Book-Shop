import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

//route for posting an order in database
router.post('/create-order', OrderController.createOrder);

//route for getting total revenue form database
router.get('/revenue', OrderController.getRevenue);

export const OrderRoute = router;
