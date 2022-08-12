'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('scratch_codes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prefix: {
        type: Sequelize.STRING(45)
      },
      batch: {
        type: Sequelize.STRING(45)
      },
      volume: {
        type: Sequelize.STRING(45)
      },
      scratch_code: {
        type: Sequelize.STRING(45)
      },
      is_used: {
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
    await queryInterface.dropTable('scratch_codes');
  }
};