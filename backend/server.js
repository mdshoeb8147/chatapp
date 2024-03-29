import express from "express";
import dotenv from "dotenv";

import authRoute from "./router/auth.route.js";
import messageRoute from "./router/message.route.js";
import userRoutes from "./router/user.route.js";

import mongoose from "mongoose";

const app = express();
dotenv.config();
app.use(express.json());

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
app.use("/api/message", messageRoute);
app.use("/api/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
