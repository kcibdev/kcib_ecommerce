const router = require("express").Router();
const {
  loginController,
  registerController,
  requestPasswordController,
  resetPasswordController,
} = require("../controllers/auth.controller");

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot", requestPasswordController);
router.post("/reset", resetPasswordController);

module.exports = router;
