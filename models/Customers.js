const mongoose = require("./mongoose");
const { Schema, model } = mongoose;

module.exports = model(
  "Customers",
  new Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    active: Number,
    account_manager_id: Number,
    reason_for_joining: String,
    created_date: String,
  })
);
