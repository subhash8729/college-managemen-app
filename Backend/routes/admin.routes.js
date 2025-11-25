import express from "express";
import { add_branch_controller, add_class_controller, add_employee_controller, edit_employee_controller, get_classes_controller } from "../controllers/admin.controller.js";
import { verifyRole } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add-class", verifyRole,add_class_controller);
router.post("/get-classes", verifyRole, get_classes_controller);
router.post("/add-employees", verifyRole, add_employee_controller);
router.post("/edit-employees", verifyRole, edit_employee_controller);
router.post("/add-branch", verifyRole, add_branch_controller);

export default router