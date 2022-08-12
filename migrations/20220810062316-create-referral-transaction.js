'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('referral_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      used_by: {
        type: Sequelize.INTEGER
      },
      use_date: {
        type: Sequelize.DATE
      },
      user_point: {
        type: Sequelize.STRING(45)
      },
      referrer_point: {
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
    await queryInterface.dropTable('referral_transactions');
  }
};