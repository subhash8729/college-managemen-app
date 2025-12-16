import express from "express";
import { add_branch_controller, add_class_controller, add_employee_controller, add_subject_controller, edit_employee_controller, get_branches_controller, get_branches_details_controller, get_classes_controller, get_subject_controller, update_branch_controller, update_subject_controller } from "../controllers/admin.controller.js";
import { verifyRole } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/add-class", verifyRole,add_class_controller);
router.post("/get-classes", verifyRole, get_classes_controller);
router.post("/add-employees", verifyRole, add_employee_controller);
router.post("/edit-employees", verifyRole, edit_employee_controller);
router.post("/add-branch", verifyRole, add_branch_controller);
router.post("/get-branches", verifyRole, get_branches_controller);
router.post("/get-branches-details", verifyRole, get_branches_details_controller);
router.post("/update-branch", verifyRole, update_branch_controller);
router.post("/add-subject", verifyRole, add_subject_controller);
router.post("/get-subjects", verifyRole, get_subject_controller);
router.patch("/update-subject", verifyRole, update_subject_controller);

export default router