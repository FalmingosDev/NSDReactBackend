var express = require('express');
var router = express.Router();
const userdataController = require('../controllers/userdataController.js');

const auth = require("../middleware/auth");

router.get('/', auth, userdataController.checkSubscriber)

module.exports = router;