import { Model, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';

class DayPeriod extends Model {
  id!: number;
  morning!: boolean;
  afternoon!: boolean;
  night!: boolean;
}

DayPeriod.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  morning: {
    type: BOOLEAN,
    defaultValue: false,
  },
  afternoon: {
    type: BOOLEAN,
    defaultValue: false,
  },
  night: {
    type: BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize: db,
  modelName: 'dayPeriod',
  timestamps: false,
});

export default DayPeriod;
