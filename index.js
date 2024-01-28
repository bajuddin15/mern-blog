import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db/connectDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
