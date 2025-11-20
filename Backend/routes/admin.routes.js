import express from "express";
import { add_class_controller, get_classes_controller } from "../controllers/admin.controller.js";
import { verifyRole } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add-class", verifyRole,add_class_controller);
router.post("/get-classes", verifyRole, get_classes_controller);

export default router