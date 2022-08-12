'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('otts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      season: {
        type: Sequelize.INTEGER
      },
      episode: {
        type: Sequelize.INTEGER
      },
      media: {
        type: Sequelize.STRING
      },
      poster: {
        type: Sequelize.STRING
      },
      show_banner: {
        type: Sequelize.CHAR(1),
        defaultValue: "0"
      },
      thumb: {
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
      watch_coin: {
        type: Sequelize.INTEGER,
        defaultValue: "0"
      },
      duration_sec: {
        type: Sequelize.BIGINT(20)
      },
      status: {
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
    await queryInterface.dropTable('otts');
  }
};