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
  expiration: {
    type: Date,
    required: true,
  },
});

module.export = mongoose.model("PasswordReset", PasswordReset);
