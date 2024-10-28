import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// connect to mongodb atlas database url from .env file
mongoose
  .connect(process.env.DATABASE_URL, {
    dbName: process.env.DB_NAME,
    autoCreate: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
