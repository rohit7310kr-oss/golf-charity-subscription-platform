const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Database configuration
const DB = process.env.MONGO_URI.replace("<PASSWORD>", process.env.DB_PASSWORD);

exports.connectDB = async function () {
  try {
    const conn = await mongoose.connect(DB);
    console.log("connection successfull: " + conn.connection.host);
  } catch (err) {
    console.log(`err: ${err.message}`);
  }
};
