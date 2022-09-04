import ToDos from '../database/models/toDos';
import ITodoService from '../interfaces/ITodoService';
import DayPeriod from '../database/models/dayPeriod';
import DaysOfTheWeek from '../database/models/daysOfTheWeek';
import IToDo from '../interfaces/IToDo';

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
}
