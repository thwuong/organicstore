import "dotenv/config";
import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.URL_DB, {});

    console.log("Connect to DB successfully");
  } catch (error) {
    console.log(error);
  }
}
