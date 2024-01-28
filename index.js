import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db/connectDB.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API is working..." });
});
app.use("/api/user", userRoute);

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
