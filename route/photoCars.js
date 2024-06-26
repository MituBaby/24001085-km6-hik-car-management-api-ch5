const express = require("express");
const router = express.Router();

const photoController = require("../controller/photoCars");
const {authMiddleware} = require("../middleware/auth");

router
  .route("/")
  .get(authMiddleware(["user", "admin"]), photoController.getPhotos)
  .post(authMiddleware(["admin"]), photoController.createPhoto);

router
  .route("/:id")
  .get(authMiddleware(["user", "admin"]), photoController.getPhoto)
  .put(authMiddleware(["admin"]), photoController.updatePhoto)
  .delete(authMiddleware(["admin"]), photoController.deletePhoto);
module.exports = router;
