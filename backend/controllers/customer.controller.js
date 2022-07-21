const asyncHandler = require("express-async-handler");
const Customer = require("../models/customer.model");

const getCustomersController = asyncHandler(async (req, res, next) => {});
const getCustomerController = asyncHandler(async (req, res, next) => {});
const updateCustomerController = asyncHandler(async (req, res, next) => {});
const deleteCustomerController = asyncHandler(async (req, res, next) => {});
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
