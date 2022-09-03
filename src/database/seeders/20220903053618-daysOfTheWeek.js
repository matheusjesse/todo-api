'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('daysOfTheWeek',
  [
    {
      sunday: true,
      monday: false,
      tuesday: false,
      wednesday: true,
      thrusday: false,
      friday: true,
      saturday: true
    },
    {
      sunday: true,
      monday: true,
      tuesday: false,
      wednesday: true,
      thrusday: false,
      friday: false,
      saturday: false
    },
    {
      sunday: true,
      monday: false,
      tuesday: false,
      wednesday: true,
      thrusday: true,
      friday: true,
      saturday: false
    },
    {
      sunday: true,
      monday: false,
      tuesday: false,
      wednesday: false,
      thrusday: true,
      friday: true,
      saturday: false
    },
    {
      sunday: true,
      monday: true,
      tuesday: true,
      wednesday: true,
      thrusday: true,
      friday: true,
      saturday: true
    }  
  ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('daysOfTheWeek', null, {})
  }
};
