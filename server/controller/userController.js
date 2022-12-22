const applicant = require("../model/userModel");

const register = async (req, res) => {
  const { name, usn, phone, email, branch } = req.body;
  const olduser = await applicant.findOne({ email });
  if (olduser) {
    return res.status(400).json({ message: "Email already registered !!!" });
  } else {
    const newuser = applicant.create({
      name,
      usn,
      phone,
      email,
      branch,
    });

    if (newuser) {
      return res.status(200).json({ message: "Registered successfully !!!" });
    } else {
      return res.status(400).json({ message: "Something went wrong !!!" });
    }
  }
};

module.exports = register;
