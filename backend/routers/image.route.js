const router = require("express").Router();

const upload = require("../middlewares/fileUpload");

router.post("/", upload.single("image"), (req, res, next) => {
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
    });
  }
});

module.exports = router;
