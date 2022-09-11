"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class DayPeriod extends sequelize_1.Model {
}
DayPeriod.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    morning: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    afternoon: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
    night: {
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'dayPeriod',
    timestamps: false,
    tableName: 'dayPeriod',
});
exports.default = DayPeriod;
