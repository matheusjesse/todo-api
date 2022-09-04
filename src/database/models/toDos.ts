import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import DayPeriod from './dayPeriod';
import User from './user';
import DaysOfTheWeek from './daysOfTheWeek';

class ToDos extends Model {
  id!: number;
  noteText!: string;
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
});

User.hasMany(ToDos, { foreignKey: 'id', as: 'todos' });
ToDos.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
DayPeriod.belongsTo(ToDos, { foreignKey: 'dayPeriodId', targetKey: 'id' });
DaysOfTheWeek.belongsTo(ToDos, { foreignKey: 'dayOfTheWeekId', targetKey: 'id' });

export default ToDos;
