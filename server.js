//dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
//models
const Accounts = require("./controllers/accounts");
const Contests = require("./controllers/contests");
const Customers = require("./controllers/customers");
//port
const PORT = 3001;
//midleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//routes
app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});
app.use("/accounts", Accounts);
app.use("/contests", Contests);
app.use("/customers", Customers);

//server listener
app.listen(PORT, () => {
  console.log(`Listening to app on port: ${PORT}`);
});
