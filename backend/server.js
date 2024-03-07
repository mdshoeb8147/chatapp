import express from "express";
import dotenv from "dotenv";
import authRoute from "./router/auth.route.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

try {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("connected to Database"));
} catch (error) {
  console.log(error.message);
}

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World..");
});

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
