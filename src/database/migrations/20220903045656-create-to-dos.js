'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('toDos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      noteText: {
        type: Sequelize.STRING,
        field: 'note_text',
        allowNull: false
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dayOfTheWeekId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'day_of_the_week_id',
        references: {
          model: 'daysOfTheWeek',
          key: 'id'
        }
      },
      dayPeriodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'day_period_id',
        references: {
          model: 'dayPeriod',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('toDos');
  }
};
