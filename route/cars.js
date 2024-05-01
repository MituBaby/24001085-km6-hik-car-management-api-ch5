const express = require("express");
const router = express.Router();

const carsController = require("../controller/cars");
const {authMiddleware} = require("../middleware/auth");

router.route("/").get(authMiddleware(["user", "admin"]), carsController.getCars).post(authMiddleware(["admin"]), carsController.createCars);
router
  .route("/:id")
  .get(authMiddleware(["user", "admin"]), carsController.getCar)
  .put(authMiddleware(["admin"]), carsController.updateCars)
  .delete(authMiddleware(["admin"]), carsController.deleteCars);

module.exports = router;
