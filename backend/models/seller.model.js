const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Merchant = new Schema({
  customerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer",
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  rating: {
    type: Number,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Merchant", Merchant);
