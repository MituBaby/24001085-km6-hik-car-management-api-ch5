const express = require("express");
const router = express.Router();

const carsController = require("../controller/cars");

router.route("/").get(carsController.getCars);

module.exports = router;
