const db = require('../models');
const tokenDecode = require('../middleware/auth')

// create main model
const newo_user = db.newo_user

// 1. get all Country
const getNewoUserData = async(req, res) => {
    let userData = req.headers['x-access-token']; 
    // const taokenData = tokenDecode.parseJwt(userData); --> Not Working
    const taokenData = parseJwt(userData);

    let newouser = await newo_user.findOne({
        where:{ id: taokenData.userid},
       attributes : ['id', 'name', 'phone', 'email', 'country_code', 'password', 'profile_pic', 'Otp', 'referral_code', 'wallet_coin', 'active_date', 'status']
    })
    res.status(200).send(newouser)
}  


/*********** Temporary Solution Start *************/

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse((atob(base64)))
  };

/*********** Temporary Solution End *************/

module.exports = {
    getNewoUserData
}