const mongoose = require("mongoose");

const cities = new mongoose.Schema({
  at: { type: Date, default: Date.now },
  city: { type: String, default: "" },
});

const City = mongoose.model("Cities", cities);

exports.City = City;
