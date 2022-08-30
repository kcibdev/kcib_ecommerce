const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const asyncHandler = require("express-async-handler");

const Customer = require("../models/customer.model");
const PasswordReset = require("../models/passwordreset.model");
const Cart = require("../models/cart.model");

const genRandom = require("../utils/generateRandom");
const { generateJWTToken } = require("../utils/jwtTokens");

const loginController = asyncHandler(async (req, res) => {
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
        const cart = Cart.findOne({ customerId: user._id });
        if (cart) {
          user.cart = cart.items;
        }
        res.status(200).json({
          message: "Login Successful",
          success: true,
          data: {
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            cart: user.cart,
            orders: user.orders,
            token: generateJWTToken(user._id),
          },
        });
      } else {
        throw new Error("Invalid Password");
      }
    } else {
      // res.status(400).json({
      //   message: "Invalid Email Address",
      //   success: false,
      // });
      throw new Error("Invalid Email Address");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});

const registerController = asyncHandler(async (req, res) => {
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
        data: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          address: newUser.address,
          cart: newUser.cart,
          orders: newUser.orders,
          token: generateJWTToken(newUser._id),
        },
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
});

const requestPasswordController = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw new Error("Enter an email address");
    }

    const user = await Customer.findOne({
      email,
    });

    if (user) {
      const token = await PasswordReset.findOne({
        email,
      });

      if (token) await PasswordReset.deleteOne();

      const newToken = await crypto.randomBytes(32).toString("hex");
      const hashToken = await bcrypt.hash(newToken, 10);

      const saveToken = await new PasswordReset({
        email,
        token: hashToken,
      }).save();

      if (saveToken) {
        const requestTokenUrl = `${process.env.CLIENT_URI}/reset/?token=${newToken}&from=${email}`;
        res.status(200).json({
          message: "Password Reset Link Sent, Expires in 3 hours",
          success: true,
          data: {
            requestTokenUrl,
          },
        });
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
});

const logoutController = asyncHandler(async (req, res) => {
  try {
    req.user = null;
    res.status(200).json({
      message: "Logout Successful",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});

const resetPasswordController = asyncHandler(async (req, res) => {
  const { email, token, password } = req.body;
  try {
    if (!password) {
      throw new Error("Enter your password");
    }
    if (!token || !email) {
      throw new Error("Invalid credentials");
    }

    const findToken = await PasswordReset.findOne({
      email,
    });

    if (!findToken) {
      throw new Error("Invalid or expired password reset token");
    }

    const isValidToken = await bcrypt.compare(token, findToken.token);

    if (!isValidToken) {
      throw new Error("Invalid or expired password reset token");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updateUser = await Customer.updateOne(
      {
        email,
      },
      {
        $set: { password: hashedPassword },
      },
      {
        new: true,
      }
    );

    if (updateUser) {
      await findToken.deleteOne();

      const user = await Customer.findOne({
        email,
      });

      res.status(200).json({
        message: "Password Reset Successful",
        success: true,
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          cart: user.cart,
          orders: user.orders,
          token: generateJWTToken(user._id),
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});

module.exports = {
  loginController,
  registerController,
  requestPasswordController,
  resetPasswordController,
  logoutController,
};
