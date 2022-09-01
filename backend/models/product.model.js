const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    image: [
      {
        type: String,
        required: true,
      },
    ],
    brand: {
      type: String,
      default: "",
    },
    quantity: {
      type: Number,
      required: true,
    },
    sizes: Array,
    colors: Array,
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    category: {
      type: String,
      required: true,
    },
    totalOrders: {
      type: Number,
      required: true,
      default: 0,
    },
    subCategory: String,
    available: {
      type: Boolean,
      required: true,
      default: true,
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Merchant",
    },
    views: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
