"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const toDos_1 = __importDefault(require("../database/models/toDos"));
const dayPeriod_1 = __importDefault(require("../database/models/dayPeriod"));
const daysOfTheWeek_1 = __importDefault(require("../database/models/daysOfTheWeek"));
class TodoService {
    constructor() {
        this.findAll = (id) => __awaiter(this, void 0, void 0, function* () {
            const todos = yield toDos_1.default.findAll({
                where: { userId: id },
                attributes: { exclude: ['dayOfTheWeekId', 'dayPeriodId'] },
                include: [
                    { model: dayPeriod_1.default, as: 'dayPeriod', attributes: { exclude: ['id'] } },
                    { model: daysOfTheWeek_1.default, as: 'daysOfTheWeek', attributes: { exclude: ['id'] } },
                ],
            });
            return todos;
        });
        this.createTodo = (todo) => __awaiter(this, void 0, void 0, function* () {
            const { noteText, completed, userId } = todo;
            const dayPeriodId = yield TodoService.createDayPeriod(todo.dayPeriod);
            const dayOfTheWeekId = yield TodoService
                .createDayOfTheWeek(todo.daysOfTheWeek);
            const todoData = yield toDos_1.default.create({
                noteText,
                completed,
                dayOfTheWeekId,
                dayPeriodId,
                userId,
            });
            return todoData;
        });
        this.todoToggleStatus = (todo) => __awaiter(this, void 0, void 0, function* () {
            const { id, completed } = todo;
            yield toDos_1.default.update({ completed }, {
                where: {
                    id,
                },
            });
            const todoUpdated = yield TodoService.findTodo(id);
            return todoUpdated;
        });
        this.deleteTodo = (id) => __awaiter(this, void 0, void 0, function* () {
            const todo = yield toDos_1.default.findOne({ where: { id } });
            const { dayPeriodId, dayOfTheWeekId } = todo;
            yield toDos_1.default.destroy({
                where: { id },
            });
            yield dayPeriod_1.default.destroy({ where: { id: dayPeriodId } });
            yield daysOfTheWeek_1.default.destroy({ where: { id: dayOfTheWeekId } });
            return 'ToDo Deleted';
        });
        this.editTodo = (todo) => __awaiter(this, void 0, void 0, function* () {
            const { id, noteText, dayPeriod, daysOfTheWeek } = todo;
            const todoData = yield toDos_1.default.findOne({ where: { id } });
            const { dayPeriodId, dayOfTheWeekId } = todoData;
            yield toDos_1.default.update({
                noteText,
            }, {
                where: { id },
            });
            yield TodoService.updateDayOfTheWeek(daysOfTheWeek, dayOfTheWeekId);
            yield TodoService.updateDayPeriod(dayPeriod, dayPeriodId);
            return 'ToDo Updated!';
        });
    }
}
exports.default = TodoService;
_a = TodoService;
TodoService.findTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return toDos_1.default.findOne({
        where: { id },
        attributes: { exclude: [
                'dayOfTheWeekId',
                'dayPeriodId',
            ] }
    });
});
TodoService.createDayPeriod = (dayPeriod) => __awaiter(void 0, void 0, void 0, function* () {
    const { morning, afternoon, night } = dayPeriod;
    const dayPeriodData = yield dayPeriod_1.default.create({
        morning,
        afternoon,
        night,
    });
    return dayPeriodData.id;
});
TodoService.createDayOfTheWeek = (dayOfTheWeek) => __awaiter(void 0, void 0, void 0, function* () {
    const { sunday, monday, tuesday, wednesday, thrusday, friday, saturday, } = dayOfTheWeek;
    const dayOfTheWeekData = yield daysOfTheWeek_1.default.create({
        sunday,
        monday,
        tuesday,
        wednesday,
        thrusday,
        friday,
        saturday,
    });
    return dayOfTheWeekData.id;
});
TodoService.updateDayPeriod = (dayPeriod, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { morning, afternoon, night } = dayPeriod;
    yield dayPeriod_1.default.update({
        morning,
        afternoon,
        night,
    }, {
        where: { id },
    });
});
TodoService.updateDayOfTheWeek = (dayOfTheWeek, id) => __awaiter(void 0, void 0, void 0, function* () {
    const { sunday, monday, tuesday, wednesday, thrusday, friday, saturday, } = dayOfTheWeek;
    yield daysOfTheWeek_1.default.update({
        sunday,
        monday,
        tuesday,
        wednesday,
        thrusday,
        friday,
        saturday,
    }, {
        where: { id },
    });
});
