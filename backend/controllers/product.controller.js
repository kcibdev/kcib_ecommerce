const asyncHandler = require("express-async-handler");

const Product = require("../models/product.model");

const getProductsController = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.status(400).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
});
const getProductController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
});
const createProductController = asyncHandler(async (req, res, next) => {});
const updateProductController = asyncHandler(async (req, res, next) => {});
const deleteProductController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await product.remove();

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});
const searchProductController = asyncHandler(async (req, res, next) => {});

module.exports = {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductController,
};
