const asyncHandler = require("express-async-handler");

const Wishlist = require("../models/wishlist.model");

const getWishlistsController = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  try {
    const wishlists = await wishlists.find({ customerId: userId });
    res.status(200).json({
      success: true,
      message: "Successfully Fetched",
      data: wishlists,
    });
  } catch (error) {
    console.log(error);
  }
});

const addWishlistController = asyncHandler(async (req, res) => {
  const { userId, productId, price, image, title } = req.body;
  try {
    if (!userId || !productId || !price || !image || !title) {
      throw new Error("Missing required fields");
    }

    //check if wishlist already exists
    const wishlistExist = await Wishlist.findOne({
      customerId: userId,
      productId: productId,
    });

    if (wishlistExist) {
      res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      customerId: userId,
      productId,
      price,
      image,
      title,
    }).catch((error) => {
      console.log("Wishlist Creation: ", error);
    });

    if (wishlistExist) {
      res.status(200).json({
        success: true,
        message: "Successfully Saved",
        data: wishlistExist,
      });
    } else {
      throw new Error("Failed to save wishlist");
    }
  } catch (error) {
    console.log(error);
  }
});

const removeWishlistController = asyncHandler(async (req, res) => {
  const { id: wishlistId } = req.params;

  try {
    const wishlist = await Wishlist.findByIdAndDelete(wishlistId);
    if (wishlist) {
      res.status(200).json({
        success: true,
        message: "Wishlist successfully removed",
        data: wishlistId,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getWishlistsController,
  addWishlistController,
  removeWishlistController,
};
