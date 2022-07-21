const router = require("express").Router();

const {
  getProductsController,
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  searchProductController,
  getBestProductController,
  getTopProductController,
  getSimilerProductController,
} = require("../controllers/product.controller");
const { authorizedUser } = require("../middlewares/verifyToken");

router.post("/", authorizedUser, createProductController);
router.get("/", authorizedUser, getProductsController);
router.put("/:id", authorizedUser, updateProductController);
router.delete("/:id", authorizedUser, deleteProductController);
router.get("/:id", getProductController);
router.get("/search/:keyword", searchProductController);
router.get("/best", getBestProductController);
router.get("/top", getTopProductController);
router.get("/similer", getSimilerProductController);

module.exports = router;
