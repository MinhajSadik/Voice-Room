import { Router } from "express";
import roomController from "../controllers/room.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/rooms", authMiddleware, roomController.create);
router.get("/rooms", authMiddleware, roomController.index);

export default router;
