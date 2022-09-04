import { Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';

class DaysOfTheWeek extends Model {
  id!: number;
  sunday!: boolean;
  monday!: boolean;
  tuesday!: boolean;
  wednesday!: boolean;
  thrusday!: boolean;
  friday!: boolean;
  saturday!: boolean;
}

DaysOfTheWeek.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  sunday: {
    type: BOOLEAN,
    defaultValue: false,
  },
  monday: {
    type: BOOLEAN,
    defaultValue: false,
  },
  tuesday: {
    type: BOOLEAN,
    defaultValue: false,
  },
  wednesday: {
    type: BOOLEAN,
    defaultValue: false,
  },
  thrusday: {
    type: BOOLEAN,
    defaultValue: false,
  },
  friday: {
    type: BOOLEAN,
    defaultValue: false,
  },
  saturday: {
    type: BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize: db,
  modelName: 'daysOfTheWeek',
  timestamps: false,
  tableName: 'daysOfTheWeek',
});

export default DaysOfTheWeek;
