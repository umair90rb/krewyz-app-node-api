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
  res.send(`${req.headers["host"]}/${file.filename}`);
});

router.post("/multiple", upload.array("file", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  var arr = [];

  files.forEach((file) => arr.push(`${req.headers["host"]}/${file.filename}`));

  res.send(arr);
});

// const imageFilter = function (req, file, cb) {
//   // Accept images only
//   if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//     req.fileValidationError = "Only image files are allowed!";
//     return cb(new Error("Only image files are allowed!"), false);
//   }
//   cb(null, true);
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },

//   // By default, multer removes file extensions so let's add them back
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// router.post("/upload", (req, res) => {
//   console.log(req.file);
//   // 'profile_pic' is the name of our file input field in the HTML form
//   let upload = multer({
//     storage: storage,
//     fileFilter: imageFilter,
//   }).single("file");

//   upload(req, res, function (err) {
//     // req.file contains information of uploaded file
//     // req.body contains information of text fields, if there were any

//     if (req.fileValidationError) {
//       return res.send(req.fileValidationError);
//     } else if (!req.file) {
//       return res.send("Please select an image to upload");
//     } else if (err instanceof multer.MulterError) {
//       return res.send(err);
//     } else if (err) {
//       return res.send(err);
//     }

//     // Display uploaded image for user validation
//     res.send(req.file.path);
//   });
// });

// router.post("/multiple", (req, res) => {
//   // 10 is the limit I've defined for number of uploaded files at once
//   // 'multiple_images' is the name of our file input field
//   let upload = multer({
//     storage: storage,
//     fileFilter: imageFilter,
//   }).array("files", 10);

//   upload(req, res, function (err) {
//     if (req.fileValidationError) {
//       return res.send(req.fileValidationError);
//     } else if (!req.file) {
//       return res.send("Please select an image to upload");
//     } else if (err instanceof multer.MulterError) {
//       return res.send(err);
//     } else if (err) {
//       return res.send(err);
//     }

//     let result;
//     const files = req.files;
//     let index, len;
//     for (index = 0, len = files.length; index < len; ++index) {
//       result += files[index].path;
//     }
//     res.send(result);
//   });
// });

module.exports = router;
