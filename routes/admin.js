const express = require("express");
const router = express.Router();
// var path = require("path");

router.get("/:email/:pass", async (req, res) => {
  const email = req.params.email;
  const pass = req.params.pass;
  if (email == "admin@mail.com" && pass == "123456") {
    res.send(true);
  } else {
    res.send(false);
  }
});

// router.get("/static", (req, res) => {
//   res.send(path.join(__dirname, "public"));
// });

module.exports = router;
