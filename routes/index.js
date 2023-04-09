import express from "express";
import { getUsers } from "../controllers/userController.js";
import { register } from "../controllers/userController.js";

const router = express.Router();

router.get('/users/users-list', getUsers);
router.post('/users/register', register);

export default router;