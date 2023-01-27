require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const BodyParser = require("body-parser");
const port = process.env.PORT || 5000;
require("colors");
const path = require("path");
const connectDb = require("./db/db");

app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/signup", require("./routes/userRoutes"));
app.use("/results", require("./routes/resultsRoutes"));
app.use("/api/slot", require("./routes/slotRoutes"));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

connectDb().then(() => {
  app.listen(port, () =>
    console.log(`Server is up and running on the port ${port}`.underline.bold)
  );
});
