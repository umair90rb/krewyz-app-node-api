const mongoose = require("mongoose");

const cityForumSchema = new mongoose.Schema({
  createdBy: { type: String, default: "" },
  createdOn: { type: Date, default: Date.now },
  description: { type: String, default: "" },
  title: { type: String, default: "" },
  city: { type: String, default: "" },
  mainHeading: { type: String, default: "" },
  mainImageUrl: { type: String, default: "" },
});

const CityForum = mongoose.model("CityForum", cityForumSchema);

exports.CityForum = CityForum;
