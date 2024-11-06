import { accountModel } from "../database/models/schemaModels.js";

class AccountController {
  getAllAccounts = async (req, res) => {
    try {
      let accounts = await accountModel.find();

      res
        .status(200)
        .json({ message: "All accounts fetched successfully", accounts });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new AccountController();
