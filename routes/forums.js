const { Forum } = require("../models/forum");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const forum = new Forum(req.body);
  const result = await forum.save();
  res.send(result);
});

router.get("/", async (req, res) => {
  const forums = await Forum.find();
  res.send(forums);
});

router.get("/:id", async (req, res) => {
  const forum = await Forum.findById(req.params.id);
  res.send(forum);
});

router.put("/:id", async (req, res) => {
  const forum = await Forum.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(forum);
});

router.delete("/:id", async (req, res) => {
  const forum = await Forum.findByIdAndRemove(req.params.id);
  res.send(forum);
});

module.exports = router;
