const express = require("express");
const { Comment } = require("../models/comment");
const router = express.Router();

router.post("/", async (req, res) => {
  const comment = new Comment(req.body);
  const result = await comment.save();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const comment = await Comment.find({ commentFor: `${req.params.id}` });
  res.send(comment);
});

router.get("by/:id", async (req, res) => {
  const comment = await Comment.find({ commentBy: `${req.params.id}` });
  res.send(comment);
});

router.get("/:for/:by", async (req, res) => {
  const comment = await Comment.find({
    commentBy: `${req.params.by}`,
    commentFor: `${req.params.for}`,
  });
  res.send(comment);
});

router.delete("/:for/:by", async (req, res) => {
  const result = await Comment.deleteOne({
    commentFor: req.params.for,
    commentBy: req.params.by,
  });
  res.send(result);
});

module.exports = router;
