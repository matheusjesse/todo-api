import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  userName!: string;
  email!: string;
  password!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: false,
    autoIncrement: false,
  },
  userName: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false,
});

export default User;
