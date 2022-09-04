import ToDos from '../database/models/toDos';
import ITodoService from '../interfaces/ITodoService';
import DayPeriod from '../database/models/dayPeriod';
import DaysOfTheWeek from '../database/models/daysOfTheWeek';
import IToDo, { IDayOfTheWeek, IDayPeriod } from '../interfaces/IToDo';

export default class TodoService implements ITodoService {
  findAll = async (id: number): Promise<IToDo[]> => {
    const todos = await ToDos.findAll({
      where: { userId: id },
      attributes: { exclude: ['dayOfTheWeekId', 'dayPeriodId'] },
      include: [
        { model: DayPeriod, as: 'dayPeriod', attributes: { exclude: ['id'] } },
        { model: DaysOfTheWeek, as: 'daysOfTheWeek', attributes: { exclude: ['id'] } },
      ],
    });

    return todos as IToDo[];
  };

  createTodo = async (todo: IToDo): Promise<ToDos> => {
    const { noteText, userId } = todo as IToDo;
    const dayPeriodId = await TodoService.createDayPeriod(todo.dayPeriod as IDayPeriod);
    const dayOfTheWeekId = await TodoService
      .createDayOfTheWeek(todo.daysOfTheWeek as IDayOfTheWeek);
    const todoData = await ToDos.create({
      noteText,
      dayOfTheWeekId,
      dayPeriodId,
      userId,
    });
    return todoData;
  };

  static createDayPeriod = async (dayPeriod: IDayPeriod) => {
    const { morning, afternoon, night } = dayPeriod;
    const dayPeriodData = await DayPeriod.create({
      morning,
      afternoon,
      night,
    });
    return dayPeriodData.id;
  };

  static createDayOfTheWeek = async (dayOfTheWeek: IDayOfTheWeek) => {
    const {
      sunday, monday,
      tuesday, wednesday,
      thrusday, friday, saturday,
    } = dayOfTheWeek as IDayOfTheWeek;
    const dayOfTheWeekData = await DaysOfTheWeek.create({
      sunday,
      monday,
      tuesday,
      wednesday,
      thrusday,
      friday,
      saturday,
    });
    return dayOfTheWeekData.id;
  };
}
