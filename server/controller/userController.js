const applicant = require("../model/userModel");

const register = async (req, res) => {
  const { name, email, phone, branch, usn } = req.body;

  try {
    if (!name || !email || !phone || !branch || !usn) {
      res
        .status(400)
        .json({ message: "Please fill in all the details properly !!!" });
    }
    const olduser = await applicant.findOne({ email });
    if (olduser) {
      res.status(400).json({ message: "Email already registered !!!" });
    }
    const newuser = applicant.create({
      name,
      usn,
      branch,
      email,
      phone,
    });
    if (newuser) {
      res.status(200).json({ message: "Registered successfully !!!" });
    } else {
      res
        .status(400)
        .json({ message: "Please fill in all the details properly !!!" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Please fill in all the details properly !!!" });
  }
};

module.exports = register;
