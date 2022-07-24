const asyncHandler = require("express-async-handler");
const Order = require("../models/order.model");

const getOrderController = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Order fetched successfully",
      success: true,
      data: order,
    });
  } catch (err) {
    next(err);
  }
});
const getOrdersController = asyncHandler(async (req, res, next) => {
  const { _id: userId } = req.user;
  try {
    const orders = await Order.find({
      customerId: userId,
    });
    if (!orders) {
      return res.status(404).json({
        message: "Orders not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "Orders fetched successfully",
      success: true,
      data: orders,
    });
  } catch (err) {
    next(err);
  }
});
const createOrderController = asyncHandler(async (req, res, next) => {
  const { _id: userId } = req.user;
  const { items, totalAmount } = req.body;
  const orderId = Math.floor(Math.random() * 1000000);
  const order = new Order({
    customerId: userId,
    orderId,
    totalAmount,
    items,
  });
  try {
    const newOrder = await order.save();
    res.status(201).json({
      message: "Order created successfully",
      success: true,
      data: newOrder,
    });
  } catch (err) {
    next(err);
  }
});
const updateOrderController = asyncHandler(async (req, res, next) => {});
const deleteOrderController = asyncHandler(async (req, res, next) => {});

module.exports = {
  getOrderController,
  getOrdersController,
  createOrderController,
  updateOrderController,
  deleteOrderController,
};
