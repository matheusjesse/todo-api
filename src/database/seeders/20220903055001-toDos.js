'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('toDos',
  [
    {
      note_text: 'tomar café',
      completed: true,
      day_of_the_week_id: 3,
      day_period_id: 1,
      user_id: 1
    },
    {
      note_text: 'Estudar',
      completed: true,
      day_of_the_week_id: 2,
      day_period_id: 2,
      user_id: 2
    },
    {
      note_text: 'Lavar roupa',
      completed: false,
      day_of_the_week_id: 4,
      day_period_id: 3,
      user_id: 4
    },
    {
      note_text: 'beber àgua',
      completed: true,
      day_of_the_week_id: 1,
      day_period_id: 4,
      user_id: 3
    },
    {
      note_text: 'Comprar manteiga',
      completed: false,
      day_of_the_week_id: 5,
      day_period_id: 5,
      user_id: 1
    }  
  ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('toDos', null, {})
  }
};
