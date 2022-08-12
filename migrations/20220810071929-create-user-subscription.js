'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      newo_user_id: {
        type: Sequelize.INTEGER
      },
      subscription_start_date: {
        type: Sequelize.DATE
      },
      subscription_end_date: {
        type: Sequelize.DATE
      },
      subscription_type: {
        type: Sequelize.CHAR(1)
      },
      coupon_code: {
        type: Sequelize.STRING(45)
      },
      subscription_status: {
        type: Sequelize.CHAR(1),
        defaultValue: "1"
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
    await queryInterface.dropTable('user_subscriptions');
  }
};