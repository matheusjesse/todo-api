'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
  [
    {
      user_name: 'Juliana Maria',
      email: 'julia@jumaria.com',
      password: 'a32qwe12343az13'
    },
    {
      user_name: 'Justos Santos',
      email: 'justos@justo.com',
      password: 'a3qsdw3444413'
    },
    {
      user_name: 'Mario Eleno',
      email: 'mario@eleno.com',
      password: 'a3ads212asss13'
    },
    {
      user_name: 'João Maria',
      email: 'joaoeu@joaa.com',
      password: 'a32s123sd11sss3'
    },
    {
      user_name: 'Ana Julia',
      email: 'anajulia@outlook.com',
      password: 'a32s12a31231d32as13'
    }  
  ])
},

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('users', null, {})
  }
};
