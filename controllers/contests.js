const Contests = require("../models/Contests");
const data = require("./jsondata/contests.json");
const router = require("express").Router();
Contests.deleteMany({})
  .then(console.log("deleted"))
  .catch((error) => console.log(error));
data.forEach((contest) => {
  Contests.create({
    id: contest.id,
    name: contest.name,
  });
});
//index
router.get("/", async (req, res) => {
  try {
    res.json(await Contests.find({}));
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
