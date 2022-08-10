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
        type: Sequelize.CHAR
      },
      coupon_code: {
        type: Sequelize.STRING
      },
      subscription_status: {
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
    await queryInterface.dropTable('user_subscriptions');
  }
};