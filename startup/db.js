const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://admin:onetofive@cluster0.zl6ds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => winston.info("Connected to mongodb..."));
};
