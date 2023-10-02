const express = require('express');
const controller = require('../controllers/tourController');
const router = express.Router();
router.param('id', controller.checkId);
router
  .route('/')
  .get(controller.getAllTours)
  .post(controller.checkBody, controller.createTour);
router
  .route('/:id')
  .get(controller.getTour)
  .patch(controller.editTour)
  .delete(controller.deleteTour);

module.exports = router;
