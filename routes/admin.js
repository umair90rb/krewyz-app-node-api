const express = require("express");
const router = express.Router();

router.get("/:email/:pass", async (req, res) => {
  const email = req.params.email;
  const pass = req.params.pass;
  if (email == "admin@mail.com" && pass == "123456") {
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;
