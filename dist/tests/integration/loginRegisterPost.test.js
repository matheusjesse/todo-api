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
const tokenMock_1 = require("../mocks/tokenMock");
const user_1 = __importDefault(require("../../src/database/models/user"));
const loginMock_1 = require("../mocks/loginMock");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Login', () => {
    describe("Requests Post", () => {
        afterEach(() => {
            sinon_1.default.restore();
        });
        it(`Testa se ao fazer um post na rota /login/register em caso de sucesso
    retorna status 201 e o body com os dados cadastrados`, () => __awaiter(void 0, void 0, void 0, function* () {
            sinon_1.default.stub(user_1.default, "create").resolves();
            sinon_1.default.stub(user_1.default, "findOne").resolves();
            const { token } = tokenMock_1.tokenMock;
            const response = yield chai_1.default.request(index_1.default)
                .post('/login/register')
                .set({ Authorization: token })
                .send(loginMock_1.loginRegisterPostMock);
            expect(response.status).to.eq(201);
            expect(response.body).to.deep.eq({ "message": "User registered" });
        }));
    });
});
