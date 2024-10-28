import express from "express";
import morgan from "morgan";


import "../database/dbConnect.js"; // import database connection file and connect to mongodb atlas database url from .env file\\\
import router from "./routerConfig.js";


const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// router mounting point
app.use(router)

// app.get('/users', async (req, res) => {
//     try {
//       const allUsers = await db.select().from(accounts);
//       res.json(allUsers);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// 404 middleware
app.use((req, res, next) => {
  next({
    statusCode: 404,
    message: "Resource not found",
    detail: null,
  });
});

// error handling middleware
app.use((err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let detail = err.detail || null;

  // handling mongoose validation error
  if (err.code === 11000) {
    console.log("Validation error at mongodb");
    const uniqueFieldKeys = Object.keys(err.keyPattern); // ['email','phone'] throws array of unique failed keys
    console.log(uniqueFieldKeys);
    detail = {};
    detail[uniqueFieldKeys] = uniqueFieldKeys
      .map((key) => `${key} must be unique`)
      .join(",");
    message = "Validation Error";
    statusCode = 400;
  }

  console.log("error handling middleware", err);

  res.status(statusCode).json({
    result: detail,
    message: message,
    meta: null,
  });
});

// exporting express application
export default app;
