const router = require("express").Router();
const { authorizedUser } = require("../middlewares/verifyToken");

const {
  getWishlistsController,
  addWishlistController,
  removeWishlistController,
} = require("../controllers/wishlist.controller");

router.get("/", authorizedUser, getWishlistsController);
router.post("/", authorizedUser, addWishlistController);
router.delete("/:id", authorizedUser, removeWishlistController);

module.exports = router;
