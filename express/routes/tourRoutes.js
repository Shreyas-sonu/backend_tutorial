const express = require('express');
const controller = require('../controllers/tourController');
const router = express.Router();

router.route('/').get(controller.getAllTours).post(controller.createTour);
router
  .route('/:id')
  .get(controller.getTour)
  .patch(controller.editTour)
  .delete(controller.deleteTour);

module.exports = router;
