const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reviews = new Schema({});

module.exports = mongoose.model("Reviews", Reviews);
