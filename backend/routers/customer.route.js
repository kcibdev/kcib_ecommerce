const router = require("express").Router();
const {
  getCustomersController,
  getCustomerController,
  updateCustomerController,
  deleteCustomerController,
  searchCustomersController,
  createAddressController,
  getAddressController,
  updateAddressController,
  deleteAddressController,
} = require("../controllers/customer.controller");
const { authorizedUser } = require("../middlewares/verifyToken");

router.get("/", authorizedUser, getCustomersController);
router.get("/:id", authorizedUser, getCustomerController);
router.put("/:id", authorizedUser, updateCustomerController);
router.delete("/:id", authorizedUser, deleteCustomerController);
router.get("/search/:keyword", authorizedUser, searchCustomersController);
router.post("/address", authorizedUser, createAddressController);
router.get("/address", authorizedUser, getAddressController);
router.put("/address/:id", authorizedUser, updateAddressController);
router.delete("/address/:id", authorizedUser, deleteAddressController);

module.exports = router;
