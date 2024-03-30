const express = require("express");
const router = express.Router();
const cars = require("./cars");
// const photoCars = require("./photoCars");

router.use("/cars", cars);
// router.use("/photo", photoCars);

module.exports = router;
