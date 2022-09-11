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
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Todos', () => {
    describe("Requests Patch", () => {
        afterEach(() => {
            sinon_1.default.restore();
        });
        it(`Testa se ao fazer um patch na rota /todos em caso de sucesso
    retorna status 200 e um body com a mensagem: ToDo Updated`, () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(toDos_1.default, "update").resolves();
            sinon_1.default.stub(toDos_1.default, "findOne").resolves(todoMock_1.todoPatchMockResponse);
            const { token } = tokenMock_1.tokenMock;
            const response = yield chai_1.default.request(index_1.default)
                .patch('/todos')
                .set({ Authorization: token })
                .send({
                "id": 1,
                "completed": true
            });
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(todoMock_1.todoPatchMockResponse);
        }));
    });
});
