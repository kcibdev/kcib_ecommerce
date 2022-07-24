const router = require("express").Router();

const {
  addMerchant,
  updateMerchant,
  deleteMerchant,
  getMerchant,
  getMerchants,
} = require("../controllers/merchant.controller");
const { authorizedUser } = require("../middlewares/verifyToken");

router.get("/", authorizedUser, getMerchants);
router.post("/", authorizedUser, addMerchant);
router.put("/:id", authorizedUser, updateMerchant);
router.delete("/:id", authorizedUser, deleteMerchant);
router.get("/:id", getMerchant);

module.exports = router;
