import { Router } from "express";
import accountRouter from "../routers/acountRoute.js";
import { requireAuth } from "@clerk/express";

const router = Router();

router.use("/account", accountRouter);
// router.use("/account", accountRouter);
export default router;
