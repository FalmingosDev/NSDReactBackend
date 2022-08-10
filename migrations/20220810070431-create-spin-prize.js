'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spin_prizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spin_id: {
        type: Sequelize.INTEGER
      },
      prize_name: {
        type: Sequelize.STRING
      },
      encode_prize: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      picture: {
        type: Sequelize.STRING
      },
      newocoin_prize: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('spin_prizes');
  }
};