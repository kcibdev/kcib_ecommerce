const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reviews = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    customerName: {
      type: String,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    verifiedBuyer: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reviews", Reviews);
