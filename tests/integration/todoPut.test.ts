import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import ToDos from '../../src/database/models/toDos';
import { todoPutMockBody } from '../mocks/todoMock';
import { tokenMock } from '../mocks/tokenMock';
import DayPeriod from '../../src/database/models/dayPeriod';
import DaysOfTheWeek from '../../src/database/models/daysOfTheWeek';

chai.use(chaiHttp);
const { expect } = chai;

describe('Todos', () => {
  describe("Requests Put", () => {
    afterEach(() => {
      sinon.restore();
    })    
    it(`Testa se ao fazer um put na rota /todos/:id em caso de sucesso
    retorna status 200 e um body com a mensagem: ToDo Updated`, async () => {
      const { id, noteText, daysOfTheWeek, dayPeriod } = todoPutMockBody ;
      sinon.stub(DayPeriod, "update").resolves();
      sinon.stub(DaysOfTheWeek, "update").resolves();
      sinon.stub(ToDos, "findOne").resolves(todoPutMockBody as unknown as ToDos );
      sinon.stub(ToDos, "update").resolves();
      const { token } = tokenMock;
      const response = await chai.request(app)
          .put('/todos/1')          
          .set({ Authorization: token})
          .send({ id, noteText, daysOfTheWeek, dayPeriod });
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq({ "message": "ToDo Updated!" })
    });
    it(`Testa se ao fazer um put na rota /todos/:id com body invalido retorna status 400`, async () => {
      const { noteText, daysOfTheWeek, dayPeriod } = todoPutMockBody ;
      sinon.stub(DayPeriod, "update").resolves();
      sinon.stub(DaysOfTheWeek, "update").resolves();
      sinon.stub(ToDos, "findOne").resolves();
      sinon.stub(ToDos, "update").resolves();
      const { token } = tokenMock;
      const response = await chai.request(app)
          .put('/todos/1')          
          .set({ Authorization: token})
          .send({ noteText, daysOfTheWeek, dayPeriod });
      expect(response.status).to.eq(400);
    });
  })
});

