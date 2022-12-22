const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB is connected".underline.cyan.bold);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
