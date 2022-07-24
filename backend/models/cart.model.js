const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          default: 0,
        },
        image: {
          type: String,
          default: "",
        },
        title: {
          type: String,
          default: "",
          required: true,
        },
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", Cart);
