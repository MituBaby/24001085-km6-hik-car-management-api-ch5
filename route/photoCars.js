const express = require("express");
const router = express.Router();

const photoController = require("../controller/photoCars");

router.route("/").get(photoController.getPhotos);

router.route("/:id").get(photoController.getPhoto);
module.exports = router;
