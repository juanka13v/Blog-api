const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("base conectada...");
    } catch (error) {
        console.log(error);
    }
}

app.use("/lama", (req, res) => {
  console.log("hey this is lama url");
  res.send("hola2");
});

app.listen("5000", connectDB);
