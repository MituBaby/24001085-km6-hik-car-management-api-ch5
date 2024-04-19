const express = require("express");
const router = express.Router();
const auth = require("./auth");
const cars = require("./cars");
const photoCars = require("./photoCars");

router.use("/auth", auth);
router.use("/cars", cars);
router.use("/photo", photoCars);

module.exports = router;
