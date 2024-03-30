const express = require("express");
const router = express.Router();

const carsController = require("../controller/cars");

router.route("/").get(carsController.getCars).post(carsController.createCars);
router
  .route("/:id")
  .get(carsController.getCar)
  .put(carsController.updateCars)
  .delete(carsController.deleteCars);

module.exports = router;
