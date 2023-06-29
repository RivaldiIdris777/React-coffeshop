import express from "express";
import {
    getProducts2,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/Products.js";
import { adminOnly } from "../middleware/AuthUser.js";
import { verifyToken } from "../middleware/VerifyToken.js"

const router = express.Router();

router.get('/products', getProducts2);
router.get('/product/:uuid', getProductById);
router.post('/product', verifyToken, adminOnly, createProduct);
router.patch('/product/:uuid', verifyToken, adminOnly, updateProduct);
router.delete('/product/:id', verifyToken, adminOnly, deleteProduct);

export default router;