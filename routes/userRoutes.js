import express from "express";
import { getAllusersHandler } from "../controllers/userController.js";

const router = express.Router();

// GET all users
router.get('/users-list', getAllusersHandler);

// module.exports = router;
// router.post('/users/register', register);
// router.post('/users/login',Login);

export default router;