const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    orderId: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    txnId: {
      type: String,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", Order);
