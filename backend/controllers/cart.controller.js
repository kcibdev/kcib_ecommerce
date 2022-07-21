const asyncHandler = require("express-async-handler");

const Cart = require("../models/cart.model");

const getCartsController = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  try {
    const carts = await Cart.find({ customerId: userId });
    res.status(200).json(carts);
  } catch (error) {
    console.log(error);
  }
});

const addCartController = asyncHandler(async (req, res) => {
  const { userId, productId, quantity, price, image, title } = req.body;
  try {
    if (!userId || !productId || !quantity || !price || !image || !title) {
      throw new Error("Missing required fields");
    }

    const cart = await Cart.create({
      customerId: userId,
      productId,
      quantity,
      price,
      image,
      titlee,
    }).catch((error) => {
      console.log("Cart Creation: ", error);
    });

    if (cart) {
      res.status(200).json({
        success: true,
        message: "Cart successfully Added",
        data: cart,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to add cart",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

const updateCartController = asyncHandler(async (req, res) => {
  const { id: cartId } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await Cart.findByIdAndUpdate(cartId, {
      quantity,
    });
    if (cart) {
      res.status(200).json({
        success: true,
        message: "Cart successfully updated",
        data: cart,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteCartController = asyncHandler(async (req, res) => {
  const { id: cartId } = req.params;

  try {
    const cart = await Cart.findByIdAndDelete(cartId);
    if (cart) {
      res.status(200).json({
        success: true,
        message: "Cart successfully removed",
        data: cart,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getCartsController,
  addCartController,
  updateCartController,
  deleteCartController,
};
