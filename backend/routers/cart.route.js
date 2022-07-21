const router = require("express").Router();

const {
  getCartsController,
  addCartController,
  updateCartController,
  deleteCartController,
} = require("../controllers/cart.controller");

router.get("/", getCartsController);
router.post("/", addCartController);
router.put("/:id", updateCartController);
router.delete("/:id", deleteCartController);

module.exports = router;
