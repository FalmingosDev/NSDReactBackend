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
        type: Sequelize.STRING(45)
      },
      bank_ifsc: {
        type: Sequelize.STRING(45)
      },
      bank_account_number: {
        type: Sequelize.INTEGER
      },
      bank_account_holder: {
        type: Sequelize.STRING(45)
      },
      upi_id: {
        type: Sequelize.STRING(45)
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
    await queryInterface.dropTable('hashtag_bank_infos');
  }
};