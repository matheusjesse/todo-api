'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('daysOfTheWeek', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sunday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      monday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      tuesday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      wednesday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      thrusday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      friday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      saturday: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('daysOfTheWeek');
  }
};
