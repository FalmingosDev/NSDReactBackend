'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_name: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER
      },
      game_url: {
        type: Sequelize.TEXT
      },
      game_img: {
        type: Sequelize.STRING
      },
      conversion_rate: {
        type: Sequelize.DECIMAL
      },
      game_price: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.CHAR
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};