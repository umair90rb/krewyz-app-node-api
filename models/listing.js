const mongoose = require("mongoose");

const listing = new mongoose.Schema({
  createdBy: { type: String, default: "" },
  createdOn: { type: Date, default: Date.now },
  description: { type: String, default: "" },
  address: { type: String, default: "" },
  category: { type: String, default: "" },
  endTime: { type: String, default: "" },
  startTime: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  mainImageUrl: { type: String, default: "" },
  latitude: { type: Number, default: 0 },
  longitude: { type: Number, default: 0 },
  name: { type: String, default: "" },
  otherImages: { type: [String], default: [] },
});

const Listing = mongoose.model("Listing", listing);

exports.Listing = Listing;
