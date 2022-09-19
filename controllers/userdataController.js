const db = require('../models');
const tokenDecode = require('../middleware/auth');
const {Sequelize, DataTypes} = require('sequelize');
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];
const { Op } = require("sequelize");

// create main model
const newo_user = db.newo_user
const referral_transaction = db.referral_transaction
const wallet_detail = db.wallet_detail

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = Sequelize;

// 1. get all Country
const getNewoUserData = async(req, res) => {
    let userData = req.headers['x-access-token']; 
    // const taokenData = tokenDecode.parseJwt(userData); --> Not Working
    const taokenData = parseJwt(userData);

    let newouser = await newo_user.findOne({
        where:{ id: taokenData.userid},
       attributes : ['id', 'name', 'phone', 'email', 'country_code', 'password', 'profile_pic', 'Otp', 'referral_code', 'wallet_coin', 'active_date', 'status']
    })

    let referrer_point = await referral_transaction.findOne({
		where:{ user_id: taokenData.userid},
		attributes: [[sequelize.fn('sum', sequelize.col('referrer_point')), 'referrer_point']],
        group: ['user_id'],
	});

    let reward_point = await wallet_detail.findOne({
        where:{[Op.or]: [{wallet_action_id: 4},{wallet_action_id: 10}], [Op.and]: [{user_id: taokenData.userid}]},
		attributes: [[sequelize.fn('sum', sequelize.col('wallet_point')), 'reward_point']],
        group: ['user_id'],
	});

    user_data = {"user": newouser, "referrer_point": referrer_point, "reward_point": reward_point}

    res.status(200).send(user_data)
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