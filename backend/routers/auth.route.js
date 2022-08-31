const router = require("express").Router();
const {
  loginController,
  registerController,
  requestPasswordController,
  resetPasswordController,
  logoutController,
  adminLoginController,
} = require("../controllers/auth.controller");

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/logout", logoutController);
router.post("/forgot", requestPasswordController);
router.post("/reset", resetPasswordController);
router.post("/admin", adminLoginController);

module.exports = router;
