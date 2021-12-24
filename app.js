const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

app.use(express.json());

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("base conectada...");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)

app.listen("5000", connectDB);
