const router = require("express").Router();

const upload = require("../middlewares/fileUpload");

router.post("/", upload.single("file"), (req, res, next) => {
  try {
    if (req.file) {
      res.status(201).json({
        message: "Image uploaded successfully",
        data: `${req.protocol}://${req.get("host")}/public/images/${
          req.file.filename
        }`,
      });
    } else {
      res.status(400).json({
        message: "Error Creating file",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
});

module.exports = router;
