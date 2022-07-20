const bcrypt = require("bcryptjs");

const Customer = require("../models/customer.model");
const genRandom = require("../utils/generateRandom");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }
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
        throw new Error("Invalid Password");
      }
    } else {
      throw new Error("Invalid Email Address");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
const registerController = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    if (!name || !email || !phone || !password) {
      throw new Error("Please fill all the fields");
    }

    const user = await Customer.findOne({
      email,
    });

    if (user) {
      throw new Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Customer({
      name,
      email,
      phone,
      password: hashedPassword,
    }).save();

    if (newUser) {
      res.status(200).json({
        message: "Registration Successful",
        success: true,
        user: newUser,
      });
    } else {
      res.status(400);
      throw new Error("Registration Failed");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};
const forgotPasswordController = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Customer.findOne({
      email,
    });
    if (user) {
      res.status(200).json({
        message: "Password Reset Link Sent",
        success: true,
      });
    } else {
      throw new Error("Invalid Email Address");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const resetPasswordController = async (req, res) => {};

module.exports = {
  loginController,
  registerController,
  forgotPasswordController,
};
