const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  name: String,
  year: Number,
  usn: String,
});

module.exports = mongoose.model("results", resultSchema);
