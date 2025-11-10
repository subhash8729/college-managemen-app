import express from "express"
import { getImportantInfo } from "../controllers/public.controller.js";

const publicRouter = express.Router();


publicRouter.get("/get-important-info", getImportantInfo)


export default publicRouter