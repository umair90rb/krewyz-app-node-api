const mongoose = require("mongoose");

const likes = new mongoose.Schema({
  likedBy: { type: String, default: "" },
  likedOn: { type: Date, default: Date.now },
  liked: { type: Boolean, default: true },
  likedFor: String,
});

const Like = mongoose.model("Likes", likes);

exports.Like = Like;
