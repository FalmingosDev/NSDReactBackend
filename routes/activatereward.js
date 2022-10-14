var express = require('express');
var router = express.Router();
const userrewardController = require('../controllers/userrewardController.js');

const auth = require("../middleware/auth");

router.post('/', auth, userrewardController.activate_user_reward)

module.exports = router;