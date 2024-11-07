import { accountModel } from "../database/models/schemaModels.js";

class AccountController {
  getAllAccounts = async (req, res) => {
    try {
      let accounts = await accountModel.find();

      res
        .status(200)
        .json({
          result: accounts,
          message: "All accounts fetched successfully",
          meta: null,
        });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new AccountController();
