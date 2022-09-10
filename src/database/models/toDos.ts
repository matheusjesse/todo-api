import { Model, STRING, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import DayPeriod from './dayPeriod';
import User from './user';
import DaysOfTheWeek from './daysOfTheWeek';

class ToDos extends Model {
  id!: number;
  noteText!: string;
  completed!: boolean;
  dayOfTheWeekId!: number;
  dayPeriodId!: number;
  userId!: number;
}

ToDos.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  noteText: {
    type: STRING,
    allowNull: false,
  },
  completed: {
    type: BOOLEAN,
    defaultValue: false,
  },
  dayOfTheWeekId: {
    type: INTEGER,
    allowNull: false,
  },
  dayPeriodId: {
    type: INTEGER,
    allowNull: false,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'toDos',
  underscored: true,
  timestamps: false,
  tableName: 'toDos',
});

User.hasMany(ToDos, { foreignKey: 'userId', as: 'todos', onDelete: 'CASCADE' });

DayPeriod.hasOne(ToDos, {
  foreignKey: 'dayPeriodId',
  as: 'dayPeriod',
  onDelete: 'CASCADE',
});
ToDos.belongsTo(DayPeriod, {
  onDelete: 'CASCADE',
  foreignKey: { allowNull: false },
});
DaysOfTheWeek.hasOne(ToDos, {
  foreignKey: { name: 'dayOfTheWeekId' },
  as: 'daysOfTheWeek',
  onDelete: 'CASCADE',
});
ToDos.belongsTo(DaysOfTheWeek, {
  foreignKey: { name: 'dayOfTheWeekId', allowNull: false },
  onDelete: 'CASCADE',
});

export default ToDos;
