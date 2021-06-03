const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("../routes/users");
const forums = require("../routes/forums");
const cityForums = require("../routes/cityForums");
const listing = require("../routes/listing");
const likes = require("../routes/likes");
const reviews = require("../routes/reviews");
const comments = require("../routes/comments");
const saved = require("../routes/saved");
const files = require("../routes/file");
const admin = require("../routes/admin");
const city = require("../routes/city");
const forumComment = require("../routes/cityComment");

module.exports = function (app) {
  app.use(express.json());
  app.use("/public", express.static(__dirname + "/public"));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/users", users);
  app.use("/api/forums", forums);
  app.use("/api/city", cityForums);
  app.use("/api/listing", listing);
  app.use("/api/likes", likes);
  app.use("/api/reviews", reviews);
  app.use("/api/comments", comments);
  app.use("/api/saved", saved);
  app.use("/api/cities", city);
  app.use("/api/files", files);
  app.use("/api/admin", admin);
  app.use("/api/forumComment", forumComment);
};
