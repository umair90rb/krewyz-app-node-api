const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: String,
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: String,
    imageUrl: { type: String, default: "" },
    socialAccount: { type: String, default: "" },
    status: { type: String, default: "" },
    contributions: { type: Number, default: 0 },
    createdOn: { type: Date, default: Date.now },
    airlineName: { type: String, default: "" },
    address: { type: String, default: "" },
  },
  { _id: false }
);

const User = mongoose.model("User", userSchema);

exports.User = User;
