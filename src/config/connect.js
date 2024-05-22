import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(mongoose.connection.host + " connected successfully");
  } catch (error) {
    console.log("mongodb connection error");
  }
}
