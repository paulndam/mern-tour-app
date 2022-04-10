const express = require("express");

const TourController = require("../controller/tourController");

const router = express.Router();

// router.param("id", TourController.checkID);
router.route("/").get(TourController.getAllTours);
router.route("/").post(TourController.createTour);

// route to get single tour, updating and deleting tour.
router
  .route("/:id")
  .get(TourController.getTour)
  .patch(TourController.updateTour)
  .delete(TourController.deleteTour);

module.exports = router;
