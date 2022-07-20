const router = require("express").Router();
const {
  loginController,
  registerController,
  forgotPasswordController,
} = require("../controllers/auth.controller");

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/forgot-password", forgotPasswordController);

module.exports = router;
