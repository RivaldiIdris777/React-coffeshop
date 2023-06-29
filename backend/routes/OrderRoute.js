import express from "express";
import {
    getOrder,
    getOrderById,    
    createOrder,
    updateOrder,
    deleteOrder
} from "../controller/Order.js";

const router = express.Router();

router.get('/order', getOrder);
router.get('/order/:uuid', getOrderById);
router.post('/order', createOrder);
router.patch('/order/:uuid', updateOrder);
router.delete('/order/:uuid', deleteOrder);

export default router;