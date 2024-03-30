const express = require("express");
const router = express.Router();

const photoController = require("../controller/photoCars");

router
  .route("/")
  .get(photoController.getPhotos)
  .post(photoController.createPhoto);

router
  .route("/:id")
  .get(photoController.getPhoto)
  .put(photoController.updatePhoto);
module.exports = router;
