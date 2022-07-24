const asyncHandler = require("express-async-handler");

const Merchant = require("../models/merchant.model");

const addMerchant = asyncHandler(async (req, res) => {
  try {
    const merchant = await Merchant.create(req.body);
    if (!merchant) {
      return res.status(400).json({
        success: false,
        message: "Failed to create merchant",
      });
    }
    return res.status(201).json({
      success: true,
      message: `Successfully created ${merchant.companyName}`,
      data: merchant,
    });
  } catch (error) {
    console.log(error);
  }
});
const updateMerchant = asyncHandler(async (req, res) => {
  const { id: merchantId } = req.params;
  try {
    const merchant = await Merchant.findByIdAndUpdate(merchantId, req.body, {
      new: true,
    });
    if (!merchant) {
      return res.status(400).json({
        success: false,
        message: "Failed to update merchant",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Successfully updated ${merchant.companyName}`,
      data: merchant,
    });
  } catch (error) {
    console.log(error);
  }
});
const deleteMerchant = asyncHandler(async (req, res) => {
  const { id: merchantId } = req.params;
  try {
    const merchant = await Merchant.findByIdAndDelete(merchantId);
    if (!merchant) {
      return res.status(400).json({
        success: false,
        message: "Failed to delete merchant",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Successfully deleted merchant`,
      data: merchantId,
    });
  } catch (error) {
    console.log(error);
  }
});
const getMerchant = asyncHandler(async (req, res) => {
  const { id: merchantId } = req.params;
  try {
    const merchant = await Merchant.findById(merchantId);
    if (!merchant) {
      return res.status(400).json({
        success: false,
        message: "Failed to get merchant",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Successfully got merchant`,
      data: merchant,
    });
  } catch (error) {
    console.log(error);
  }
});
const getMerchants = asyncHandler(async (req, res) => {
  try {
    const merchants = await Merchant.find();
    if (!merchants) {
      return res.status(400).json({
        success: false,
        message: "Failed to get merchants",
      });
    }
    return res.status(200).json({
      success: true,
      message: `Successfully got merchants`,
      data: merchants,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  addMerchant,
  updateMerchant,
  deleteMerchant,
  getMerchant,
  getMerchants,
};
