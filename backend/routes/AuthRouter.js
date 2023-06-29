import express from "express";
import {Login, Register, logOut} from "../controller/Auth.js";
import {getUserById, getUserProfile} from "../controller/Users.js";
import { refreshToken } from "../middleware/RefreshToken.js"
import { verifyToken, verifyToken2 } from "../middleware/VerifyToken.js";

const router = express.Router();


router.post('/register', Register);
router.get('/token', refreshToken);
router.get('/me', verifyToken2, getUserProfile);
router.post('/login', Login);
router.delete('/logout', logOut);

export default router;