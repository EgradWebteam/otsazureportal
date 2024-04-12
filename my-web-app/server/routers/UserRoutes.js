// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import controller
const userController = require('../controllers/userController');

// Define routes
router.post('/users', userController.createUser);

module.exports = router;
