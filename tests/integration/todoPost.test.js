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
const chai_1 = __importDefault(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const chai_http_1 = __importDefault(require("chai-http"));
const index_1 = __importDefault(require("../../src/index"));
const toDos_1 = __importDefault(require("../../src/database/models/toDos"));
const todoMock_1 = require("../mocks/todoMock");
const tokenMock_1 = require("../mocks/tokenMock");
const dayPeriod_1 = __importDefault(require("../../src/database/models/dayPeriod"));
const daysOfTheWeek_1 = __importDefault(require("../../src/database/models/daysOfTheWeek"));
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Todos', () => {
    describe("Requests Post", () => {
        afterEach(() => {
            sinon_1.default.restore();
        });
        it(`Testa se ao fazer um post na rota /todos em caso de sucesso
    retorna status 201 e o body com os dados cadastrados`, () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(dayPeriod_1.default, "create").resolves(todoMock_1.todoMock[0].dayPeriod);
            sinon_1.default.stub(daysOfTheWeek_1.default, "create").resolves(todoMock_1.todoMock[0].daysOfTheWeek);
            sinon_1.default.stub(toDos_1.default, "create").resolves(todoMock_1.todoPostMockResponse);
            const { token } = tokenMock_1.tokenMock;
            const { noteText, completed, daysOfTheWeek, dayPeriod, userId } = todoMock_1.todoPostMockBody;
            const response = yield chai_1.default.request(index_1.default)
                .post('/todos')
                .set({ Authorization: token })
                .send({ noteText, completed, daysOfTheWeek, dayPeriod, userId });
            expect(response.status).to.eq(201);
            expect(response.body).to.deep.eq(todoMock_1.todoPostMockResponse);
        }));
        it(`Testa se ao fazer um post na rota /todos com body invalido retorna status 400`, () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(dayPeriod_1.default, "create").resolves(todoMock_1.todoMock[0].dayPeriod);
            sinon_1.default.stub(daysOfTheWeek_1.default, "create").resolves(todoMock_1.todoMock[0].daysOfTheWeek);
            sinon_1.default.stub(toDos_1.default, "create").resolves(todoMock_1.todoPostMockResponse);
            const { token } = tokenMock_1.tokenMock;
            const { daysOfTheWeek, dayPeriod, userId } = todoMock_1.todoPostMockBody;
            const response = yield chai_1.default.request(index_1.default)
                .post('/todos')
                .set({ Authorization: token })
                .send({ daysOfTheWeek, dayPeriod, userId });
            expect(response.status).to.eq(400);
        }));
    });
});
