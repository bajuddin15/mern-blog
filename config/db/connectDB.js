import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then((conn) => {
      console.log(
        `MongoDB connected successfully with host : `,
        conn.connection.host
      );
    })
    .catch((err) => {
      console.log("Mongodb connection error : ", err.message);
      process.exit(1);
    });
};

export default connectDB;
