'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hashtag_user_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag_user_address.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    language: DataTypes.STRING,
    profession: DataTypes.STRING,
    maritial_status: DataTypes.STRING,
    user_country: DataTypes.INTEGER,
    user_state: DataTypes.STRING,
    user_city: DataTypes.STRING,
    user_pincode: DataTypes.INTEGER,
    user_address: DataTypes.STRING,
    user_landmark: DataTypes.STRING,
    user_contact_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hashtag_user_address',
  });
  return hashtag_user_address;
};