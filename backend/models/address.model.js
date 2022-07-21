const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Address = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    street: {
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
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", Address);
