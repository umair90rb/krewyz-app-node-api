const mongoose = require("mongoose");

const saved = new mongoose.Schema({
  savedBy: { type: String, default: "" },
  savedFor: { type: String, default: "" },
  savedOn: { type: Date, default: Date.now },
  saved: { type: Boolean, default: true },
});

const Saved = mongoose.model("Saveds", saved);

exports.Saved = Saved;
