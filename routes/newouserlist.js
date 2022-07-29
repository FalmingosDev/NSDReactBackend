var express = require('express');
var router = express.Router();
const newouserController = require('../controllers/newouserController.js');

const auth = require("../middleware/auth");

/* GET Country listing. */
/*router.get('/', function(req, res, next) {
    res.send('Respond with a userlist');
    // res.send(newouserController.getAllNewoUser);
    // console.log(res);
    // res.render('user', { title: 'Respond with a Country List' });
    // router.get('/', newouserController.getAllNewoUser);

    //const usrlist = res.json(newouserController.getAllNewoUser);
    //console.log(usrlist)
    //... some code here
    // data = whatever the JSON you want to hash 
    // const token = generateAccessToken(data);
    // res.json(token);
    
});*/

router.get('/', auth, newouserController.getAllNewoUser);

module.exports = router;