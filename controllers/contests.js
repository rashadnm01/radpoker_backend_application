const Contests = require("../models/Contests");
const data = require("./jsondata/contests.json");
const router = require("express").Router();
const getContests = async () => {
  await Contests.deleteMany({});
  data.forEach((contest) => {
    Contests.create({
      id: contest.id,
      name: contest.name,
    });
  });
};

//index
router.get("/", async (req, res) => {
  getContests();
  res.json(await Contests.find({}));
});
module.exports = router;
