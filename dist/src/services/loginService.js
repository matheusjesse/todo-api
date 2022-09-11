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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../database/models/user"));
const jwtService_1 = __importDefault(require("../utils/jwtService"));
const toDos_1 = __importDefault(require("../database/models/toDos"));
const dayPeriod_1 = __importDefault(require("../database/models/dayPeriod"));
const daysOfTheWeek_1 = __importDefault(require("../database/models/daysOfTheWeek"));
class LoginService {
    constructor() {
        this.login = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({
                where: { email },
                attributes: { exclude: ['password'] },
            });
            const { userName, id } = user;
            const token = jwtService_1.default.sign({ email, userName, id });
            return token;
        });
        this.findUser = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({
                where: { email },
            });
            return user;
        });
        this.createUser = (userData) => __awaiter(this, void 0, void 0, function* () {
            const { userName, email, password } = userData;
            yield user_1.default.create({ userName, email, password });
            return 'User registered';
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            const todos = yield toDos_1.default.findAll({ where: { userId: id } });
            yield toDos_1.default.destroy({ where: { userId: id } });
            console.log(todos);
            todos.map((todo) => __awaiter(this, void 0, void 0, function* () {
                const { dayPeriodId, dayOfTheWeekId } = todo;
                yield dayPeriod_1.default.destroy({ where: { id: dayPeriodId } });
                yield daysOfTheWeek_1.default.destroy({ where: { id: dayOfTheWeekId } });
            }));
            yield user_1.default.destroy({
                where: { id },
            });
            return 'User deleted';
        });
        this.updatePassword = (id, newPassword) => __awaiter(this, void 0, void 0, function* () {
            yield user_1.default.update({ password: newPassword }, {
                where: {
                    id,
                },
            });
            return 'Password updated';
        });
    }
}
exports.default = LoginService;
