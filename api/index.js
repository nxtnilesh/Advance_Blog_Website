import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error(`MongoDB error ${error}`));

const app = express();

app.use(express.json());
app.use(cookieParser());

// all routes
import authRouter from "./routes/auth.route.js";
app.use("/api/auth", authRouter);

const Port = process.env.PORT || 4000;

app.listen(Port, () => console.log(`Server running on port ${Port}`));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
