const { Listing } = require("../models/listing");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const listing = new Listing(req.body);
  const result = await listing.save();
  res.send(result);
});

router.get("/", async (req, res) => {
  const listings = await Listing.find();
  res.send(listings);
});

router.get("/rating", async (req, res) => {
  const listings = await Listing.find({}, null, { sort: { rating: -1 } });
  res.send(listings);
});

router.get("/createdOn", async (req, res) => {
  const listings = await Listing.find({}, null, { sort: { createdOn: -1 } });
  res.send(listings);
});

router.post("/category", async (req, res) => {
  const category = req.body["category"];
  const listings = await Listing.find({ category: { $in: category } });
  res.send(listings);
});

router.get("/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.send(listing);
});

router.put("/:id", async (req, res) => {
  const listing = await Listing.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(listing);
});

router.delete("/:id", async (req, res) => {
  const listing = await Listing.findByIdAndRemove(req.params.id);
  res.send(listing);
});

module.exports = router;
