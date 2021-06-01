const { City } = require("../models/city");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const city = new City(req.body);

  const result = await city.save();
  res.send(result);
});

router.get("/", async (req, res) => {
  const city = await City.find();
  res.send(city);
});

router.get("/:id", async (req, res) => {
  const city = await City.findById(req.params.id);
  res.send(city);
});

router.put("/:id", async (req, res) => {
  const city = await City.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(city);
});

router.delete("/:id", async (req, res) => {
  const result = await City.findByIdAndRemove(req.params.id);
  res.send(result);
});

module.exports = router;
