import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import ToDos from '../../src/database/models/toDos';
import { todoPostMockResponse } from '../mocks/todoMock';
import { tokenMock } from '../mocks/tokenMock';
import DayPeriod from '../../src/database/models/dayPeriod';
import DaysOfTheWeek from '../../src/database/models/daysOfTheWeek';

chai.use(chaiHttp);
const { expect } = chai;

describe('Todos', () => {
  describe("Requests Delete", () => {
    afterEach(() => {
      sinon.restore();
    })    
    it(`Testa se ao fazer um patch na rota /todos em caso de sucesso
    retorna status 200 e um body com a mensagem: ToDo Updated`, async () => {
      sinon.stub(ToDos, "destroy").resolves();
      sinon.stub(DayPeriod, "destroy").resolves();
      sinon.stub(DaysOfTheWeek, "destroy").resolves();
      sinon.stub(ToDos, "findOne").resolves(todoPostMockResponse as unknown as ToDos );
      const { token } = tokenMock;
      const response = await chai.request(app)
          .delete('/todos')          
          .set({ Authorization: token})
          .send({
            "id": 1
          });
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq({ "message": "ToDo Deleted" });
    });
  })
});

