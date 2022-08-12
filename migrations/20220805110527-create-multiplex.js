'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('multiplexes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creator_id: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER,
        defaultValue:"1"
      },
      name: {
        type: Sequelize.STRING
      },
      tag_line: {
        type: Sequelize.STRING
      },
      media: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      stars: {
        type: Sequelize.TEXT
      },
      genere: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER
      },
      certificate: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue:"0.00"
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      use_coin: {
        type: Sequelize.INTEGER
      },
      use_amount: {
        type: Sequelize.DECIMAL(10,2)
      },
      reting: {
        type: Sequelize.DECIMAL(10,2)
      },
      views: {
        type: Sequelize.INTEGER
      },
      duration_sec: {
        type: Sequelize.INTEGER
      },
      duration_time: {
        type: Sequelize.STRING(100)
      },
      year: {
        type: Sequelize.INTEGER(4)
      },
      show_banner: {
        type: Sequelize.CHAR(1),
        defaultValue:"0"
      },
      status: {
        type: Sequelize.CHAR(1),
        defaultValue:"P"
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
    await queryInterface.dropTable('multiplexes');
  }
};