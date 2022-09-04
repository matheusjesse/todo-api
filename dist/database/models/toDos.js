"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const dayPeriod_1 = __importDefault(require("./dayPeriod"));
const user_1 = __importDefault(require("./user"));
const daysOfTheWeek_1 = __importDefault(require("./daysOfTheWeek"));
class ToDos extends sequelize_1.Model {
}
ToDos.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    noteText: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    dayOfTheWeekId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    dayPeriodId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'toDos',
    underscored: true,
    timestamps: false,
    tableName: 'toDos',
});
user_1.default.hasMany(ToDos, { foreignKey: 'userId', as: 'todos' });
dayPeriod_1.default.hasOne(ToDos, { foreignKey: 'dayPeriodId' });
ToDos.belongsTo(dayPeriod_1.default);
daysOfTheWeek_1.default.hasOne(ToDos, { foreignKey: { name: 'dayOfTheWeekId' } });
ToDos.belongsTo(daysOfTheWeek_1.default);
exports.default = ToDos;
