'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dayPeriod', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      morning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      afternoon: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      night: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('dayPeriod');
  }
};
