const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Reviews = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    userReviews: [
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
          default: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reviews", Reviews);
