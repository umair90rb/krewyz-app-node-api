const express = require("express");
const router = express.Router();
var multer = require("multer");

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(`${req.protocol}://${req.headers["host"]}/${file.filename}`);
});

router.post("/multiple", upload.array("file", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  var arr = [];

  files.forEach((file) =>
    arr.push(`${req.protocol}/${req.headers["host"]}/${file.filename}`)
  );

  res.send(arr);
});

module.exports = router;
