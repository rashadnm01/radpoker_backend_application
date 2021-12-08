const mongoose = require("./mongoose");
const { Schema, model } = mongoose;

module.exports = model(
  "Contests",
  new Schema({
    id: Number,
    name: String,
  })
);
