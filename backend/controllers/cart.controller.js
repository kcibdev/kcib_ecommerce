const asyncHandler = require("express-async-handler");

const Cart = require("../models/cart.model");

const getCartsController = asyncHandler(async (req, res) => {
  const { _id: userId } = req.user;

  try {
    const carts = await Cart.find({ customerId: userId });
    res.status(200).json({
      success: true,
      message: "Cart successfully fetched",
      data: carts,
    });
  } catch (error) {
    console.log(error);
  }
});

const addCartController = asyncHandler(async (req, res) => {
  const { productId, quantity, price, image, title } = req.body;
  const { _id: userId } = req.user;
  try {
    if (!productId || !quantity || !price || !image || !title) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
      throw new Error("Missing required fields");
    }

    //check if product already exists in cart
    const cart = await Cart.findOne({
      customerId: userId,
    });

    if (cart) {
      //check if product already exists in cart
      const item = cart.items.find(
        (product) => product.productId === productId
      );

      if (item) {
        res.status(200).json({
          success: true,
          message: "Product already exists in cart",
        });
      } else {
        //add product to cart
        cart.items.push({
          productId,
          quantity,
          price,
          image,
          title,
        });
        const calculatedPrice = price * quantity;
        cart.total += calculatedPrice;
        const cartSaved = await cart.save();
        if (cartSaved) {
          res.status(200).json({
            success: true,
            message: "Product successfully added",
            data: cart,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Failed to add product to cart",
          });
        }
      }
    } else {
      //create new cart
      const cart = new Cart({
        customerId: userId,
        items: [
          {
            productId,
            quantity,
            price,
            image,
            title,
          },
        ],
        total: price * quantity,
      });
      const cartSaved = await cart.save();
      if (cartSaved) {
        res.status(200).json({
          success: true,
          message: "Item successfully added to cart",
          data: cart,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "Failed to add product to cart",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

const updateCartController = asyncHandler(async (req, res) => {
  const { id: cartId } = req.params;
  const { quantity } = req.body;
  const { _id: userId } = req.user;
  try {
    const cart = await Cart.findOne({
      customerId: userId,
    });

    if (cart) {
      const item = cart.items.find((product) => product.productId === cartId);
      if (item) {
        item.quantity = quantity;
        const calculatedPrice = item.price * quantity;
        cart.total += calculatedPrice;
        const cartSaved = await cart.save();
        if (cartSaved) {
          res
            .status(200)
            .json({
              success: true,
              message: "Cart successfully updated",
              data: cart,
            })
            .catch((error) => {
              console.log("Cart Update: ", error);
            });
        } else {
          res.status(400).json({
            success: false,
            message: "Failed to update cart",
          });
        }
      }
    } else {
      res.status(400).json({
        success: false,
        message: "Failed to update cart",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteCartController = asyncHandler(async (req, res) => {
  const { id: cartId } = req.params;
  const { _id: userId } = req.user;

  try {
    const cart = await Cart.findOne({
      customerId: userId,
    });

    if (cart) {
      const item = cart.items.find((product) => product.productId === cartId);
      if (item) {
        const index = cart.items.indexOf(item);
        cart.items.splice(index, 1);
        cart.total -= item.price;
        const cartSaved = await cart.save();
        if (cartSaved) {
          res.status(200).json({
            success: true,
            message: "Item successfully deleted",
            data: cart,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Failed to delete cart",
          });
        }
      }
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
