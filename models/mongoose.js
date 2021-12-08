//dependencies
require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB_URL, CONFIG);

mongoose.connection
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("disconnected from mongo"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
