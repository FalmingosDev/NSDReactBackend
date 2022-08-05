'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newo_leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  newo_leads.init({
    leads_id: DataTypes.INTEGER,
    leads_email: DataTypes.STRING,
    coupon_use: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'newo_leads',
  });
  return newo_leads;
};