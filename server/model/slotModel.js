const mongoose = require("mongoose");

const slotSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  usn: {
    type: String,
    required: true,
    unique: true,
  },
  time: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Slot", slotSchema);
