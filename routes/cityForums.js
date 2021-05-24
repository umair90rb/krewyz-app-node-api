const { CityForum } = require("../models/cityForum");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const forum = new CityForum(req.body);
  const result = await forum.save();
  res.send(result);
});

router.get("/", async (req, res) => {
  const forums = await CityForum.find();
  res.send(forums);
});

router.get("/createdBy/:id", async (req, res) => {
  const forums = await CityForum.find({ createdBy: `${req.params.id}` });
  res.send(forums);
});

router.get("/createdOn", async (req, res) => {
  const forums = await CityForum.find({}, null, { sort: { createdOn: -1 } });
  res.send(forums);
});

router.get("/:id", async (req, res) => {
  const forum = await CityForum.findById(req.params.id);
  res.send(forum);
});

router.put("/:id", async (req, res) => {
  const forum = await CityForum.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(forum);
});

router.delete("/:id", async (req, res) => {
  const forum = await CityForum.findByIdAndRemove(req.params.id);
  res.send(forum);
});

module.exports = router;
