const router = require("express").Router();
const { authorizedUser } = require("../middlewares/verifyToken");

const {
  getCartsController,
  addCartController,
  updateCartController,
  deleteCartController,
} = require("../controllers/cart.controller");

router.get("/", authorizedUser, getCartsController);
router.post("/", authorizedUser, addCartController);
router.put("/:id", authorizedUser, updateCartController);
router.delete("/:id", authorizedUser, deleteCartController);

module.exports = router;
