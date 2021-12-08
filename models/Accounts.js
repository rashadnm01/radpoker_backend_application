const mongoose = require("./mongoose");
const { Schema, model } = mongoose;

module.exports = model(
  "Accounts",
  new Schema({
    id: Number,
    customer_id: Number,
    address: String,
    city: String,
    state: String,
    zip_code: String,
    contest_id: Number,
    rating: Number,
    created_date: String,
  })
);
