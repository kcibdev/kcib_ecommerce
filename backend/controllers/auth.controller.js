const bcrypt = require("bcryptjs");
const Customer = require("../models/customer.model");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Customer.findOne({
      email,
    });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.status(200).json({
          message: "Login Successful",
          success: true,
          user,
        });
      } else {
        throw new Error("Password does not match");
      }
    } else {
      throw new Error("Invalid Email Address");
    }
  } catch (error) {}
};
const registerController = async (req, res) => {
  const { name, email, phone, password } = req.body;
};
const forgotPasswordController = async (req, res) => {};

module.exports = {
  loginController,
  registerController,
  forgotPasswordController,
};
