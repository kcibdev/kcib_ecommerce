const asyncHandler = require("express-async-handler");
const Customer = require("../models/customer.model");

const getCustomersController = asyncHandler(async (req, res, next) => {
  try {
    const customers = await Customer.find().select("-password");

    if (!customers) {
      return res.status(400).json({
        success: false,
        message: "No users found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully retrieved users",
      data: customers,
    });
  } catch (error) {
    console.log(error);
  }
});
const getCustomerController = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const customer = await Customer.findById(userId).select("-password");

    if (!customer) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched user",
      data: customer,
    });
  } catch (error) {
    console.log(error);
  }
});
const updateCustomerController = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const customer = await Customer.findById(userId);

    if (customer) {
      const updatedCustomer = await Customer.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      );
      return res.status(200).json({
        success: true,
        message: "Successfully updated user",
        data: updatedCustomer,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
const deleteCustomerController = asyncHandler(async (req, res, next) => {
  const { id: userId } = req.params;
  try {
    const customer = await Customer.findByIdAndDelete(userId);

    if (!customer) {
      return res.status(400).json({
        success: false,
        message: "No customer found",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully deleted customer",
      data: userId,
    });
  } catch (error) {
    console.log(error);
  }
});
const searchCustomersController = asyncHandler(async (req, res, next) => {});
const createAddressController = asyncHandler(async (req, res, next) => {});
const getAddressController = asyncHandler(async (req, res, next) => {});
const updateAddressController = asyncHandler(async (req, res, next) => {});
const deleteAddressController = asyncHandler(async (req, res, next) => {});

module.exports = {
  getCustomersController,
  getCustomerController,
  updateCustomerController,
  deleteCustomerController,
  searchCustomersController,
  createAddressController,
  getAddressController,
  updateAddressController,
  deleteAddressController,
};
