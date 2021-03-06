const Customers = require("../models/Customers");
const router = require("express").Router();
const data = require("./jsondata/customers.json");

const getCustomers = async () => {
  await Customers.deleteMany({});
  data.forEach(async (customer) => {
    await Customers.create({
      id: customer.id,
      first_name: customer.first_name,
      last_name: customer.last_name,
      email: customer.email,
      active: customer.active,
      account_manager_id: customer.account_manager_id,
      reason_for_joining: customer.reason_for_joining,
      created_date: customer.created_date,
    });
  });
};

//index
router.get("/", async (req, res) => {
  getCustomers();
  try {
    res.json(await Customers.find({}));
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
