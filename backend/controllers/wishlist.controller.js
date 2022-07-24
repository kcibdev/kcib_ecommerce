const asyncHandler = require("express-async-handler");

const Wishlist = require("../models/wishlist.model");

const getWishlistsController = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;

  try {
    const wishlists = await Wishlist.find({ customerId: userId });
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
  const { productId, price, image, title } = req.body;
  const { _id: userId } = req.user;
  try {
    if (!productId || !price || !image || !title) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
      throw new Error("Missing required fields");
    }

    //check if product already exists in wishlist
    const wishlist = await Wishlist.findOne({
      customerId: userId,
    });

    if (wishlist) {
      //check if product already exists in wishlist
      const item = wishlist.items.find(
        (product) => product.productId == productId
      );

      if (item) {
        res.status(200).json({
          success: true,
          message: "Item already exists in wishlist",
        });
      } else {
        //add product to wishlist
        wishlist.items.push({
          productId,
          price,
          image,
          title,
        });
        const wishlistSaved = await wishlist.save();
        if (wishlistSaved) {
          res.status(200).json({
            success: true,
            message: "Item successfully added to Wishlist",
            data: wishlist,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Failed to add item to wishlist",
          });
        }
      }
    } else {
      //create new wishlist
      const wishlist = new Wishlist({
        customerId: userId,
        items: [
          {
            productId,
            price,
            image,
            title,
          },
        ],
      });
      const wishlistSaved = await wishlist.save();
      if (wishlistSaved) {
        res.status(200).json({
          success: true,
          message: "Item successfully added to Wishlist",
          data: wishlist,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Failed to add item to Wishlist",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const removeWishlistController = asyncHandler(async (req, res) => {
  const { id: productId } = req.params;
  const { _id: userId } = req.user;

  try {
    const wishlist = await Wishlist.findOne({
      customerId: userId,
    });

    if (wishlist) {
      const item = wishlist.items.find(
        (product) => product.productId == productId
      );

      if (item) {
        const index = wishlist.items.indexOf(item);
        wishlist.items.splice(index, 1);
        const wishlistSaved = await wishlist.save();
        if (wishlistSaved) {
          res.status(200).json({
            success: true,
            message: "Item successfully deleted",
            data: wishlist,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Failed to delete Wishlist",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "Failed to delete Wishlist",
        });
        throw new Error("Item not found");
      }
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
