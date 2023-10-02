const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router
  .route('/api/v1/tours')
  .get(controller.getAllUsers)
  .post(controller.createUser);
router
  .route('/api/v1/tours')
  .get(controller.getUser)
  .patch(controller.editUser)
  .delete(controller.deleteUser);

module.exports = router;
