'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hashtag_bank_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      bank_name: {
        type: Sequelize.STRING
      },
      bank_ifsc: {
        type: Sequelize.STRING
      },
      bank_account_number: {
        type: Sequelize.INTEGER
      },
      bank_account_holder: {
        type: Sequelize.STRING
      },
      upi_id: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('hashtag_bank_infos');
  }
};