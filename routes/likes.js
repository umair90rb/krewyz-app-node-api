const express = require("express");
const { Like } = require("../models/like");
const router = express.Router();

router.post("/", async (req, res) => {
  const like = new Like(req.body);
  const result = await like.save();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const likes = await Like.find({ likedFor: `${req.params.id}` });
  res.send(likes);
});

router.get("/:id/:like", async (req, res) => {
  const like = await Like.find({
    _id: `${req.params.like}`,
    likeFor: `${req.params.id}`,
  });
  res.send(like);
});

router.put("/:id", async (req, res) => {
  const like = await Like.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(like);
});

router.delete("/:likedFor/:likedBy", async (req, res) => {
  const result = await Like.deleteOne({
    likedFor: req.params.likedFor,
    likedBy: req.params.likedBy,
  });
  res.send(result);
});

module.exports = router;
