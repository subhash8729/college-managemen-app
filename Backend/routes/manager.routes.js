import express from "express";
import { uploadImportantInfo } from "../controllers/manager.controllers.js";


const router = express.Router();

router.post("/upload-important-info", uploadImportantInfo)




export default router;