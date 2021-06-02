const mongoose = require("mongoose");

const cityComment = new mongoose.Schema({
  commentBy: { type: String, default: "" },
  commentFor: { type: String, default: "" },
  commentText: { type: String, default: "" },
  commentOn: { type: Date, default: Date.now },
});

const CityComment = mongoose.model("CityComment", cityComment);

exports.CityComment = CityComment;
