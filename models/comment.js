const mongoose = require("mongoose");

const comments = new mongoose.Schema({
  commentBy: { type: String, default: "" },
  commentFor: { type: String, default: "" },
  commentText: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  imageUri: { type: String, default: "" },
  commentOn: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comments", comments);

exports.Comment = Comment;
