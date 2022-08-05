'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class multiplex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  multiplex.init({
    creator_id: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tag_line: DataTypes.STRING,
    media: DataTypes.STRING,
    trailer: DataTypes.STRING,
    image: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    stars: DataTypes.TEXT,
    genere: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    certificate: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    use_coin: DataTypes.INTEGER,
    use_amount: DataTypes.DECIMAL,
    reting: DataTypes.DECIMAL,
    views: DataTypes.INTEGER,
    duration_sec: DataTypes.INTEGER,
    duration_time: DataTypes.STRING,
    year: DataTypes.INTEGER,
    show_banner: DataTypes.CHAR,
    status: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'multiplex',
  });
  return multiplex;
};