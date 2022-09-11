import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import ToDos from '../../src/database/models/toDos';
import { todoMock } from '../mocks/todoMock';
import { tokenMock } from '../mocks/tokenMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Todos', () => {
  describe("Requests Get", () => {
    afterEach(() => {
      sinon.restore();
    })
    it(`Teste se ao fazer get na rota /todo/:id sem token retorna status 401` , async () => {
          sinon.stub(ToDos, "findAll").resolves(todoMock as unknown as ToDos[]);
          const response = await chai.request(app)
          .get('/todos/user/1')
          .set({ Authorization: ""});
          expect(response.status).to.eq(401);
          //expect(response.body).to.deep.eq(todoMock)
    })
    it(`Teste se ao fazer get na rota /todo/:id em caso de sucesso 
        retorna o code 200 e um array com os todos` , async () => {
          const { token } = tokenMock; 
          sinon.stub(ToDos, "findAll").resolves(todoMock as unknown as ToDos[]);
          const response = await chai.request(app)
          .get('/todos/user/1')
          .set({ Authorization: token});
          expect(response.status).to.eq(200);
          expect(response.body).to.deep.eq(todoMock)
    })    
  })
});

