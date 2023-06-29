import express from "express";
import {
    getUsers,
    getUserById,
    createUser2,
    updateUser,
    deleteUser
} from "../controller/Users.js";
import { adminOnly } from "../middleware/AuthUser.js";
import { verifyToken } from "../middleware/VerifyToken.js"


const router = express.Router();

router.get('/users', verifyToken, adminOnly, getUsers);
router.get('/users/:id', getUserById);
router.post('/users', verifyToken, adminOnly, createUser2);
router.patch('/users/:uuid', verifyToken, adminOnly, updateUser);
router.delete('/users/:uuid', verifyToken, adminOnly, deleteUser);

export default router;