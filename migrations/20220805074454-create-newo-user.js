'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('newo_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100)
      },
      phone: {
        type: Sequelize.INTEGER(15)
      },
      email: {
        type: Sequelize.STRING(100)
      },
      profile_pic: {
        type: Sequelize.STRING
      },
      country_code: {
        type: Sequelize.STRING(45)
      },
      password: {
        type: Sequelize.STRING(20)
      },
      otp: {
        type: Sequelize.STRING(45),
        defaultValue: "0",
      },
      referral_code: {
        type: Sequelize.STRING(45)
      },
      wallet_coin: {
        type: Sequelize.INTEGER,
        defaultValue: "0",
      },
      active_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.CHAR(1)
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
    await queryInterface.dropTable('newo_users');
  }
};