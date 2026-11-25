import { Router } from "express";
import { getItems } from "../controller/apiController.js";

const router = Router();

router.get("/", getItems);

export default router;
