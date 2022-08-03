var express = require('express');
var router = express.Router();
const registerController = require('../controllers/auth/registerController');

const auth = require("../middleware/auth");

router.post('/', registerController.registerUser)

module.exports = router;