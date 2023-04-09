import express from "express";
import { Login, getUsers, register } from "../controllers/userController.js";

const router = express.Router();

router.get('/users/users-list', getUsers);
router.post('/users/register', register);
router.post('/users/login',Login);

export default router;