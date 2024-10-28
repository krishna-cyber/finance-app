import { Router } from "express";
import accountController from "../controllers/accountController.js";

const accountRouter = Router();

accountRouter.get("/users",accountController.getAllAccounts );


export default accountRouter;