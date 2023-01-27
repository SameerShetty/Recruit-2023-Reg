const express = require("express");
const router = express.Router();
const Slot = require("../model/slotModel");
router.post("/", async (req, res) => {
  const { usn } = req.body;
  const gotUser = await Slot.findOne({ usn });
  console.log(gotUser);
  if (gotUser) {
    return res.status(200).json(gotUser);
  } else {
    return res.status(404).json({ message: "No such candidate exists !!!" });
  }
});
module.exports = router;
