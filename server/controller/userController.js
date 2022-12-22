const applicant = require("../model/userModel");

const register = async (req, res) => {
  const { name, usn, phone, email, branch } = req.body;
  const olduser = await applicant.findOne({ email });
  if (olduser) {
    res.status(401).json({ message: "Email already registered !!!" });
  } else {
    const newuser = applicant.create({
      name,
      usn,
      phone,
      email,
      branch,
    });

    if (newuser) {
      res.status(200).json({ message: "Registered successfully !!!" });
    } else {
      res.status(401).json({ message: "Something went wrong !!!" });
    }
  }
};

module.exports = register;
