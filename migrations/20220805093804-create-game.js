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
        type: Sequelize.INTEGER,
        defaultValue: "2",
      },
      game_url: {
        type: Sequelize.TEXT
      },
      game_img: {
        type: Sequelize.STRING
      },
      conversion_rate: {
        type: Sequelize.DECIMAL(10,2)
      },
      game_price: {
        type: Sequelize.INTEGER,
        defaultValue: "0",
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue: "0"
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};