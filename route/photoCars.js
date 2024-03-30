const express = require("express");
const router = express.Router();

const photoController = require("../controller/photoCars");

router.route("/").get(photoController.getPhotos);
module.exports = router;
