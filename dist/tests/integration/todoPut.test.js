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
    describe("Requests Put", () => {
        afterEach(() => {
            sinon_1.default.restore();
        });
        it(`Testa se ao fazer um put na rota /todos/:id em caso de sucesso
    retorna status 200 e um body com a mensagem: ToDo Updated`, () => __awaiter(void 0, void 0, void 0, function* () {
            const { id, noteText, daysOfTheWeek, dayPeriod } = todoMock_1.todoPutMockBody;
            sinon_1.default.stub(dayPeriod_1.default, "update").resolves();
            sinon_1.default.stub(daysOfTheWeek_1.default, "update").resolves();
            sinon_1.default.stub(toDos_1.default, "findOne").resolves(todoMock_1.todoPutMockBody);
            sinon_1.default.stub(toDos_1.default, "update").resolves();
            const { token } = tokenMock_1.tokenMock;
            const response = yield chai_1.default.request(index_1.default)
                .put('/todos/1')
                .set({ Authorization: token })
                .send({ id, noteText, daysOfTheWeek, dayPeriod });
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq({ "message": "ToDo Updated!" });
        }));
        it(`Testa se ao fazer um put na rota /todos/:id com body invalido retorna status 400`, () => __awaiter(void 0, void 0, void 0, function* () {
            const { noteText, daysOfTheWeek, dayPeriod } = todoMock_1.todoPutMockBody;
            sinon_1.default.stub(dayPeriod_1.default, "update").resolves();
            sinon_1.default.stub(daysOfTheWeek_1.default, "update").resolves();
            sinon_1.default.stub(toDos_1.default, "findOne").resolves();
            sinon_1.default.stub(toDos_1.default, "update").resolves();
            const { token } = tokenMock_1.tokenMock;
            const response = yield chai_1.default.request(index_1.default)
                .put('/todos/1')
                .set({ Authorization: token })
                .send({ noteText, daysOfTheWeek, dayPeriod });
            expect(response.status).to.eq(400);
        }));
    });
});
