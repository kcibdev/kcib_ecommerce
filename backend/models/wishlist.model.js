const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Wishlist = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        price: {
          type: Number,
          default: 0,
          required: true,
        },
        image: {
          type: String,
          default: "",
          required: true,
        },
        title: {
          type: String,
          default: "",
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Wishlist", Wishlist);
