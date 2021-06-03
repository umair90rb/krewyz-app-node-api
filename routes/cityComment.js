const { CityComment } = require("../models/cityComment");
const { CityForum } = require("../models/cityForum");

const express = require("express");
const router = express.Router();

router.post("/:city", async (req, res) => {
  const forums = await CityForum.findOne({ city: `${req.params.city}` });
  if (!forums) res.status(404).send("No forum against this city.");
  const body = req.body;
  body.commentFor = forums._id;
  const cityComment = new CityComment(body);
  const result = await cityComment.save();
  res.send(result);
});

router.get("/", async (req, res) => {
  const cityComment = await CityComment.find();
  res.send(cityComment);
});

router.get("/user/:user", async (req, res) => {
  const cityComment = await CityComment.find({
    commentBy: `${req.params.user}`,
  });
  res.send(cityComment);
});

router.get("/forum/:id", async (req, res) => {
  const cityComment = await CityComment.find({
    commentFor: `${req.params.id}`,
  });
  res.send(cityComment);
});

router.get("/:id", async (req, res) => {
  const cityComment = await CityComment.findById(req.params.id);
  res.send(cityComment);
});

router.put("/:id", async (req, res) => {
  const cityComment = await CityComment.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(cityComment);
});

router.delete("/:id", async (req, res) => {
  const result = await CityComment.findByIdAndRemove(req.params.id);
  res.send(result);
});

module.exports = router;
