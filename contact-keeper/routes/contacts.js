const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("something");
});

router.post("/", (req, res) => {
  res.send("something");
});

router.put("/:id", (req, res) => {
  res.send("something");
});

router.delete("/:id", (req, res) => {
  res.send("something");
});

module.exports = router;
