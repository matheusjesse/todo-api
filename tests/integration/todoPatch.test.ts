import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import ToDos from '../../src/database/models/toDos';
import { todoPatchMockResponse, todoPutMockBody } from '../mocks/todoMock';
import { tokenMock } from '../mocks/tokenMock';
import DayPeriod from '../../src/database/models/dayPeriod';
import DaysOfTheWeek from '../../src/database/models/daysOfTheWeek';

chai.use(chaiHttp);
const { expect } = chai;

describe('Todos', () => {
  describe("Requests Patch", () => {
    afterEach(() => {
      sinon.restore();
    })    
    it(`Testa se ao fazer um patch na rota /todos em caso de sucesso
    retorna status 200 e um body com a mensagem: ToDo Updated`, async () => {
      sinon.stub(ToDos, "update").resolves();
      sinon.stub(ToDos, "findOne").resolves(todoPatchMockResponse as unknown as ToDos );
      const { token } = tokenMock;
      const response = await chai.request(app)
          .patch('/todos')          
          .set({ Authorization: token})
          .send({
            "id": 1,
            "completed": true
          });
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(todoPatchMockResponse);
    });
  })
});

