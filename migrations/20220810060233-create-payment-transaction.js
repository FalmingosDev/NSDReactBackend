'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL
      },
      bank_ref_no: {
        type: Sequelize.STRING
      },
      order_id: {
        type: Sequelize.STRING
      },
      tracking_id: {
        type: Sequelize.STRING
      },
      txn_status: {
        type: Sequelize.STRING
      },
      paymode: {
        type: Sequelize.STRING
      },
      card_name: {
        type: Sequelize.STRING
      },
      txn_date: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('payment_transactions');
  }
};