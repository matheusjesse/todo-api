import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import { tokenMock } from '../mocks/tokenMock';
import User from '../../src/database/models/user';
import { loginRegisterPostMock } from '../mocks/loginMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Login', () => {
  describe("Requests Post", () => {
    afterEach(() => {
      sinon.restore();
    })    
    it(`Testa se ao fazer um post na rota /login/register em caso de sucesso
    retorna status 201 e o body com os dados cadastrados`, async () => {      
      sinon.stub(User, "create").resolves();
      sinon.stub(User, "findOne").resolves();
      const { token } = tokenMock;
      const response = await chai.request(app)
          .post('/login/register')
          .set({ Authorization: token})
          .send(loginRegisterPostMock);
      expect(response.status).to.eq(201);
      expect(response.body).to.deep.eq({ "message": "User registered" });
    });
  })
});

