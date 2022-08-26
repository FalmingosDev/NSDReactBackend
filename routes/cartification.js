var express = require('express');
var router = express.Router();
const cartificationController = require('../controllers/cartificationController');

router.get('/', cartificationController.getAllCartification);

module.exports = router;