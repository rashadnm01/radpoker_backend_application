const Accounts = require("../models/Accounts");
const router = require("express").Router();
const data = require("./jsondata/accounts.json");
const createAccounts = async () => {
  await Accounts.deleteMany({});
  data.forEach(async (account) => {
    await Accounts.create({
      id: account.id,
      customer_id: account.customer_id,
      address: account.address,
      city: account.city,
      state: account.state,
      zip_code: account.zip_code,
      contest_id: account.contest_id,
      rating: account.rating,
      created_date: account.created_date,
    });
  });
};

//index
router.get("/", async (req, res) => {
  try {
    createAccounts();
    res.json(await Accounts.find({}));
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
