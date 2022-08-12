'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('creators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      newo_user_id: {
        type: Sequelize.INTEGER
      },
      creator_profile_pic: {
        type: Sequelize.STRING
      },
      creator_user_name: {
        type: Sequelize.STRING(45)
      },
      creator_dob: {
        type: Sequelize.DATE
      },
      creator_topic: {
        type: Sequelize.STRING(100)
      },
      creator_desc: {
        type: Sequelize.TEXT
      },
      creator_status: {
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
    await queryInterface.dropTable('creators');
  }
};