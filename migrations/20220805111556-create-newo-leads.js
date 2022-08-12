'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('newo_leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leads_id: {
        type: Sequelize.INTEGER
      },
      leads_email: {
        type: Sequelize.STRING
      },
      coupon_use: {
        type: Sequelize.CHAR(1),
        defaultValue:"0"
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
    await queryInterface.dropTable('newo_leads');
  }
};