const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = new User(req.body);

  const result = await user.save();
  res.send(result);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
});

router.get("/contribution/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.contributions += 1;
  await user.save();
  res.send(user);
});

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const result = await User.findByIdAndRemove(req.params.id);
  res.send(result);
});

module.exports = router;
