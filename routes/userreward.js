var express = require('express');
var router = express.Router();
const userrewardController = require('../controllers/userrewardController.js');

const auth = require("../middleware/auth");

router.get('/', auth, userrewardController.reward_data)

module.exports = router;