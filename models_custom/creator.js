'use strict';
const {
  Model
} = require('sequelize');
const newo_user = require('./newo_user');
module.exports = (sequelize, DataTypes) => {
  class Creator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Creator.init({
    newo_user_id: {
        type: DataTypes.INTEGER,
        referances:{
            model: newo_user,
            key: 'id'
        }
    }, 
    creator_profile_pic: DataTypes.STRING,
    creator_user_name: DataTypes.STRING, 
    creator_dob: DataTypes.DATE, 
    creator_topic: DataTypes.STRING, 
    creator_desc: DataTypes.TEXT, 
    creator_status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'creator',
  });
  return Creator;
};