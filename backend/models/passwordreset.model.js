const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PasswordReset = new Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: "3h",
  },
});

module.exports = mongoose.model("PasswordReset", PasswordReset);
