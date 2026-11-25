import { Router } from "express";
import auctionRoutes from "./auctionRoutes.js";

const router = Router();

router.use("/items", auctionRoutes);

export default router;
