const mongoose = require("mongoose");

const forumSchema = new mongoose.Schema({
  createdBy: { type: String, default: "" },
  createdOn: { type: Date, default: Date.now },
  description: { type: String, default: "" },
  title: { type: String, default: "" },
});

const Forum = mongoose.model("Forum", forumSchema);

exports.Forum = Forum;
