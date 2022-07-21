const mongoose= require("mongoose");const Schema = mongoose.Schema;

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
    image: {
      type: Array,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sizes: [
      type: String,
    ],
    colors: [
      type: String
    ],
    rating: {
      type: Number,
      required: true,
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
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Merchant",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
