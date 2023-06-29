import express from "express";
import {
    getCart,
    getCartById,    
    createCart,
    updateCart,
    deleteCart,
    getCartByUserId
} from "../controller/Cart.js";
import { verifyToken, verifyToken2 } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/cart', getCart);
router.get('/cartid/', verifyToken2, getCartByUserId);
router.get('/cart/:uuid', getCartById);
router.post('/cart', createCart);
router.patch('/cart/:uuid', updateCart);
router.delete('/cart/:uuid', deleteCart);

export default router;