const Member = require("../model/userModel");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const olduser = await Member.findOne({ email });
  if (olduser) {
    res.status(401).json({ message: "Email already registered !!!" });
  } else {
    const salt = await bcrypt.genSalt(12);
    const hp = await bcrypt.hash(password, salt);
    const member = new Member({
      name,
      email,
      password: hp,
    });
    const newuser = member.save();
    if (newuser) {
      res.status(200).json({ message: "Registered successfully !!!" });
    } else {
      res.status(401).json({ message: "Something went wrong !!!" });
    }
  }
};

module.exports = register;
