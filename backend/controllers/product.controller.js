const asyncHandler = require("express-async-handler");

const Product = require("../models/product.model");
const Reviews = require("../models/reviews.model");

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
const createProductController = asyncHandler(async (req, res, next) => {
  try {
    const saveProduct = Product(req.body);
    const product = await saveProduct.save();

    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Failed to create product",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
});
const updateProductController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    }).catch((error) => {
      console.log(error);
    });

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
      data: productId,
    });
  } catch (error) {
    next(error);
  }
});
const searchProductController = asyncHandler(async (req, res, next) => {
  const { search } = req.query;
  try {
    const products = await Product.find({
      $text: { $search: search },
    });

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
const getNewestProductController = asyncHandler(async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

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
const getPopularProductController = asyncHandler(async (req, res, next) => {});
const getFeaturedProductController = asyncHandler(async (req, res, next) => {});
const getSimilerProductController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const similerProducts = await Product.find({
      category: product.category,
    });

    return res.status(200).json({
      success: true,
      data: similerProducts,
    });
  } catch (error) {
    next(error);
  }
});
const updateViewsController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    product.views += 1;
    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    next(error);
  }
});
const getReviewsController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const reviews = await Reviews.find({ productId });

    if (!reviews) {
      return res.status(404).json({
        success: false,
        message: "No reviews found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched reviews",
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
});

const createReviewController = asyncHandler(async (req, res, next) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const review = await Reviews.create({
      ...req.body,
      productId,
    });

    if (review) {
      return res.status(200).json({
        success: true,
        message: "Successfully created review",
        data: review,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductController,
  getPopularProductController,
  getFeaturedProductController,
  getNewestProductController,
  getSimilerProductController,
  updateViewsController,
  getReviewsController,
  createReviewController,
};
