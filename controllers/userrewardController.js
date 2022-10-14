const db = require('../models');
const tokenDecode = require('../middleware/auth');
const {Sequelize, DataTypes, where} = require('sequelize');
const env = process.env.NODE_ENV || 'test';
const config = require(__dirname + '/../config/config.json')[env];
const { Op } = require("sequelize");


const reward = db.reward
const user_reward = db.user_reward
const wallet_detail = db.wallet_detail


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = Sequelize;


const reward_data = async (req, res)=>{
    let userData = req.headers['x-access-token'];
    const tokenData = parseJwt(userData);
    let reward_list = await sequelize.query('SELECT r.id, r.rewards_title, r.rewards_desc, r.reward_coin, r.status, DATE_FORMAT(r.start_date, "%d %M, %Y") start_date, DATE_FORMAT(r.end_date, "%d %M, %Y") end_date, ur.apply_date, now() as today, us.subscription_start_date, r.user_active_date - DATEDIFF(curdate(),str_to_date(us.subscription_start_date,"%Y-%m-%d")) AS date_diff,CASE WHEN NOW() BETWEEN r.start_date AND r.end_date THEN CASE WHEN r.id = 1 AND DATEDIFF(curdate(),str_to_date(us.subscription_start_date,"%Y-%m-%d")) >= 0 THEN "Valid" WHEN r.id = 2 AND DATEDIFF(curdate(),str_to_date(us.subscription_start_date,"%Y-%m-%d")) >= 7 THEN "Valid" WHEN r.id = 3 AND DATEDIFF(curdate(),str_to_date(us.subscription_start_date,"%Y-%m-%d")) >= 15 THEN "Valid" WHEN r.id = 4 AND DATEDIFF(curdate(),str_to_date(us.subscription_start_date,"%Y-%m-%d")) >= 30 THEN "Valid" ELSE "User Active" END WHEN r.start_date > NOW() THEN "Coming Soon"	ELSE "Expired" END validity,CASE WHEN apply_date IS NULL THEN "Not Applied"	ELSE "Applied" END reward_apply FROM rewards r LEFT JOIN user_rewards ur ON r.id = ur.reward_id AND ur.newo_user_id = '+tokenData.userid+' LEFT JOIN user_subscriptions us ON us.newo_user_id = '+tokenData.userid+' ORDER BY r.id')

    response_data = {"message": "success", "reward_list":reward_list};

    res.status(200).send(response_data)
}

const activate_user_reward = async (req, res)=>{
    let userData = req.headers['x-access-token'];
    const tokenData = parseJwt(userData);
    let reward_id = req.body.reward_id;
    try{
      user_reward_data = {
        newo_user_id : tokenData.userid,
        reward_id : reward_id,
        status : 1
      }
      const userreward = await user_reward.create(user_reward_data);

      let reward_coin = await reward.findOne({
        where : {id: reward_id},
        attributes : ['reward_coin']
      })

      save_to_wallet = {
        user_id : tokenData.userid,
        category_id : 3,
        category_detail_id : reward_id,
        wallet_point : reward_coin.reward_coin,
        wallet_action_id : 4,
      }
      const savetowallet = await wallet_detail.create(save_to_wallet);

      response_data = {"message": "success"};

      res.status(200).send(response_data)
    }
    catch{
      response_data = {"message": "fail"}

      res.status(403).send(response_data)
    }
    
}


function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse((atob(base64)))
};


module.exports = {
  reward_data,
  activate_user_reward
}