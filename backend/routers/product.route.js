const router = require("express").Router();

const {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductController,
} = require("../controllers/product.controller");

router.post("/", createProductController);
router.get("/", getProductsController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);
router.get("/:id", getProductController);
router.get("/search/:keyword", searchProductController);

module.exports = router;
