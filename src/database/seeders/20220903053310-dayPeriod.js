'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dayPeriod',
  [
    {
      morning: true,
      afternoon: false,
      night: false
    },
    {
      morning: false,
      afternoon: false,
      night: true
    },
    {
      morning: true,
      afternoon: false,
      night: false
    },
    {
      morning: true,
      afternoon: false,
      night: true
    },
    {
      morning: true,
      afternoon: true,
      night: true
    }  
  ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('dayPeriod', null, {})
  }
};
