import { accountModel } from "../database/models/schemaModels.js";
import { clerkMiddleware, getAuth, requireAuth } from "@clerk/express";

class AccountController {
  getAllAccounts = async (req, res) => {
    try {
      // const userId = req.auth.userId;
      const { userId } = getAuth(req);
      console.log("userId", userId);
      if (userId) {
        let accounts = await accountModel.find();

        return res.status(200).json({
          result: accounts,
          message: "All accounts fetched successfully",
          meta: null,
        });
      }
      return res.status(401).json({
        result: null,
        message: "Unauthorized",
        meta: null,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new AccountController();
