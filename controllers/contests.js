const Contests = require("../models/Contests");
const data = require("./jsondata/contests.json");
const router = require("express").Router();
const getContests = async () => {
  await Contests.deleteMany({});
  data.forEach(async (contest) => {
    await Contests.create({
      id: contest.id,
      name: contest.name,
    });
  });
};

//index
router.get("/", async (req, res) => {
  getContests();
  try {
    res.json(await Contests.find({}));
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
