const db = require('../models');

// create main model
const newo_user = db.newo_user

// 1. get all Country
const getAllNewoUser = async(req, res) => {
    let newouser = await newo_user.findAll({
       // attributes : ['id', 'name', 'phone', 'email', 'country_code', 'password', 'profile_pic', 'Otp', 'referral_code', 'wallet_coin', 'active_date', 'status']
    })
    res.status(200).send(newouser)
}

module.exports = {
    getAllNewoUser
}
