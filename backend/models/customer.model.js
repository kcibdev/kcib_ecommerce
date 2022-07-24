const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            value
          );
        },
      },
    },
    phone: String,
    password: {
      type: String,
      required: true,
      minLength: 7,
      trim: true,
    },
    address: [
      {
        type: Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    // cart: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Cart",
    //   },
    // ],
    // wishlist: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Wishlist",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", Customer);
