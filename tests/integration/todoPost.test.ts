import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/index';
import ToDos from '../../src/database/models/toDos';
import { todoMock, todoPostMockResponse, todoPostMockBody } from '../mocks/todoMock';
import { tokenMock } from '../mocks/tokenMock';
import DayPeriod from '../../src/database/models/dayPeriod';
import DaysOfTheWeek from '../../src/database/models/daysOfTheWeek';

chai.use(chaiHttp);
const { expect } = chai;

describe('Todos', () => {
  describe("Requests Post", () => {
    afterEach(() => {
      sinon.restore();
    })    
    it(`Testa se ao fazer um post na rota /todos em caso de sucesso
    retorna status 201 e o body com os dados cadastrados`, async () => {
      sinon.stub(DayPeriod, "create").resolves( todoMock[0].dayPeriod as DayPeriod);
      sinon.stub(DaysOfTheWeek, "create").resolves( todoMock[0].daysOfTheWeek as DaysOfTheWeek);
      sinon.stub(ToDos, "create").resolves(todoPostMockResponse as unknown as ToDos);
      const { token } = tokenMock;
      const { noteText, completed, daysOfTheWeek, dayPeriod,  userId } = todoPostMockBody;
      const response = await chai.request(app)
          .post('/todos')          
          .set({ Authorization: token})
          .send({ noteText, completed, daysOfTheWeek, dayPeriod, userId});
      expect(response.status).to.eq(201);
      expect(response.body).to.deep.eq(todoPostMockResponse);
    });
    it(`Testa se ao fazer um post na rota /todos com body invalido retorna status 400`, async () => {
      sinon.stub(DayPeriod, "create").resolves( todoMock[0].dayPeriod as DayPeriod);
      sinon.stub(DaysOfTheWeek, "create").resolves( todoMock[0].daysOfTheWeek as DaysOfTheWeek);
      sinon.stub(ToDos, "create").resolves(todoPostMockResponse as unknown as ToDos);
      const { token } = tokenMock;
      const { daysOfTheWeek, dayPeriod,  userId } = todoPostMockBody;
      const response = await chai.request(app)
          .post('/todos')          
          .set({ Authorization: token})
          .send({ daysOfTheWeek, dayPeriod, userId });
      expect(response.status).to.eq(400);
    })    
  })
});

