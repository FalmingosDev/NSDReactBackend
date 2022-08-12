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
        type: Sequelize.DECIMAL(10,2)
      },
      bank_ref_no: {
        type: Sequelize.STRING(100)
      },
      order_id: {
        type: Sequelize.STRING(100)
      },
      tracking_id: {
        type: Sequelize.STRING
      },
      txn_status: {
        type: Sequelize.STRING(45)
      },
      paymode: {
        type: Sequelize.STRING(45)
      },
      card_name: {
        type: Sequelize.STRING
      },
      txn_date: {
        type: Sequelize.STRING(45)
      },
      remarks: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('payment_transactions');
  }
};