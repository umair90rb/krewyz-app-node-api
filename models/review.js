const mongoose = require("mongoose");

const reviews = new mongoose.Schema({
  reviewBy: { type: String, default: "" },
  reviewFor: { type: String, default: "" },
  reviewText: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  imageUri: { type: String, default: "" },
  reviewOn: { type: Date, default: Date.now },
  rating: { type: Number, default: 0 },
});

const Review = mongoose.model("Reviews", reviews);

exports.Review = Review;
