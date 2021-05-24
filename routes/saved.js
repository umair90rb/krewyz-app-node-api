const express = require("express");
const { Saved } = require("../models/saved");
const router = express.Router();

router.post("/", async (req, res) => {
  const saved = new Saved(req.body);
  const result = await saved.save();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const saved = await Saved.find({ savedBy: `${req.params.id}` });
  res.send(saved);
});

router.get("/:by/:for", async (req, res) => {
  const saved = await Saved.find({
    savedBy: `${req.params.by}`,
    savedFor: `${req.params.for}`,
  });
  res.send(saved);
});

router.put("/:id", async (req, res) => {
  const saved = await Saved.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.send(saved);
});

router.delete("/:savedFor/:savedBy", async (req, res) => {
  const result = await Saved.deleteOne({
    savedFor: req.params.savedFor,
    savedBy: req.params.savedBy,
  });
  res.send(result);
});

module.exports = router;
