'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creator.init({
    newo_user_id: DataTypes.INTEGER,
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
  return creator;
};