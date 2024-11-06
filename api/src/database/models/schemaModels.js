import mongoose from "mongoose";


// import all schemas and create models of them and export them
import { accountSchema } from "../schemas/accountSchema.js";
 const accountModel = mongoose.model("Account", accountSchema);



//  export models
export { accountModel };