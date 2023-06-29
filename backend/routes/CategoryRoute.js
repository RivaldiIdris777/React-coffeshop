import express from "express";
import {
    getCategory,
    getCategoryById,    
    createCategory,
    updateCategory,
    deleteCategory
} from "../controller/Categories.js";

const router = express.Router();

router.get('/category', getCategory);
router.get('/category/:uuid', getCategoryById);
router.post('/category', createCategory);
router.patch('/category/:uuid', updateCategory);
router.delete('/category/:uuid', deleteCategory);

export default router;