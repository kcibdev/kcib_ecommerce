const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart = new Schema({});

module.exports = mongoose.model("Cart", Cart);
