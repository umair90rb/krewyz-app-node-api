const express = require("express");
const { Review } = require("../models/review");
const router = express.Router();

router.post("/", async (req, res) => {
  const review = new Review(req.body);
  const result = await review.save();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const reviews = await Review.find({ reviewFor: `${req.params.id}` });
  res.send(reviews);
});

router.get("/by/:id", async (req, res) => {
  const reviews = await Review.find({ reviewBy: `${req.params.id}` });
  res.send(reviews);
});

router.get("/:for/:by", async (req, res) => {
  const review = await Review.find({
    reviewBy: `${req.params.by}`,
    reviewFor: `${req.params.for}`,
  });
  res.send(review);
});

router.delete("/:for/:by", async (req, res) => {
  const result = await Review.deleteOne({
    reviewFor: req.params.for,
    reviewBy: req.params.by,
  });
  res.send(result);
});

module.exports = router;
