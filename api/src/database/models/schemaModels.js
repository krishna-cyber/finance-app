import mongoose from "mongoose";


// import all schemas and create models of them and export them
import { accountSchema } from "./schemas/accountSchema.js";

 const Account = mongoose.model("Account", accountSchema);



//  export models
export { Account };