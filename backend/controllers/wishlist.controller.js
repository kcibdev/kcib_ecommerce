const asyncHandler = require("express-async-handler");

const Wishlist = require("../models/wishlist.model");
const Customer = require("../models/customer.model");
const { generateJWTToken } = require("../utils/jwtTokens");

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

const addWishlistController = asyncHandler(async (req, res, next) => {
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
      console.log("wishlist exists");
      //check if product already exists in wishlist
      const item = wishlist.items.find(
        (product) => product.productId == productId
      );

      if (!item) {
        console.log("item does not exist");
        //add product to wishlist
        wishlist.items.push({
          productId,
          price,
          image,
          title,
        });
        const wishlistSaved = await wishlist.save();
        if (wishlistSaved) {
          console.log("wishlist saved");
          //add wishlist id to customer
          const customer = await Customer.findById(userId);
          if (customer) {
            console.log("customer found");
            customer.wishlist.push(wishlistSaved._id);
            const customerSaved = await Customer.updateOne(
              {
                userId,
              },
              {
                $set: {
                  wishlist: customer.wishlist,
                },
              }
            );
            const customerData = {
              id: customer._id,
              name: customer.name,
              email: customer.email,
              phone: customer.phone,
              address: customer.address,
              cart: customer.cart,
              orders: customer.orders,
              token: generateJWTToken(customer._id),
              wishlist: wishlist.items,
            };
            console.log("customerData", customerData);
            if (customerSaved) {
              console.log("customer saved");
              res.status(200).json({
                success: true,
                message: "Item successfully added to Wishlist",
                data: customerData,
              });
            }
          }
        } else {
          res.status(400).json({
            success: false,
            message: "Failed to add item to wishlist",
          });
        }
      } else {
        console.log("item already exists");
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
        const customer = await Customer.findById(userId);
        if (customer) {
          customer.wishlist.push(wishlistSaved._id);
          const customerSaved = await Customer.updateOne(
            {
              userId,
            },
            {
              $set: {
                wishlist: customer.wishlist,
              },
            }
          );
          const customerData = {
            id: customer._id,
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            cart: customer.cart,
            orders: customer.orders,
            token: generateJWTToken(customer._id),
            wishlist: wishlistSaved.items,
          };
          if (customerSaved) {
            res.status(200).json({
              success: true,
              message: "Item successfully added to Wishlist",
              data: customerData,
            });
          }
        }
      } else {
        res.status(400).json({
          success: false,
          message: "Failed to add item to Wishlist",
        });
      }
    }
  } catch (error) {
    next(error);
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
          //remove wishlist id from customer
          const customer = await Customer.findById(userId);
          if (customer) {
            const wishlistIndex = customer.wishlist.indexOf(wishlist._id);
            customer.wishlist.splice(wishlistIndex, 1);
            const customerSaved = await Customer.updateOne(
              {
                userId,
              },
              {
                $set: {
                  wishlist: customer.wishlist,
                },
              }
            );
            const customerData = {
              id: customer._id,
              name: customer.name,
              email: customer.email,
              phone: customer.phone,
              address: customer.address,
              cart: customer.cart,
              orders: customer.orders,
              token: generateJWTToken(customer._id),
              wishlist: wishlistSaved.items,
            };

            if (customerSaved) {
              res.status(200).json({
                success: true,
                message: "Item successfully removed from Wishlist",
                data: customer,
              });
            }
          }
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
