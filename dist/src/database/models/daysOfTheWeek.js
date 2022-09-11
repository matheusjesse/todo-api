"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class DaysOfTheWeek extends sequelize_1.Model {
}
DaysOfTheWeek.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    sunday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    monday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    tuesday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    wednesday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    thrusday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    friday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    saturday: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'daysOfTheWeek',
    timestamps: false,
    tableName: 'daysOfTheWeek',
});
exports.default = DaysOfTheWeek;
