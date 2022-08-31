const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Brand = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: Buffer,
      required: true,
      contentType: String,
      default: "",
    },
    description: {
      type: String,
      required: true,
    },
    totalProducts: {
      type: Number,
      required: true,
      default: 0,
    },
    totalOrders: {
      type: Number,
      required: true,
      default: 0,
    },
    totalSales: {
      type: Number,
      required: true,
      default: 0,
    },
    totalRating: {
      type: Number,
      required: true,
      default: 0,
    },
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
    subCategory: String,
    available: {
      type: Boolean,
      required: true,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Brand", Brand);
