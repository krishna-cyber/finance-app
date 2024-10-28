import { Router } from "express";

import accountRouter from "../routers/acountRoute.js";


const router = Router();

router.use("/account", accountRouter);




export default router
