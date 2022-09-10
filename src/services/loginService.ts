import User from '../database/models/user';
import ILoginService from '../interfaces/IloginService';
import JwtService from '../utils/jwtService';
import ToDos from '../database/models/toDos';
import DayPeriod from '../database/models/dayPeriod';
import DaysOfTheWeek from '../database/models/daysOfTheWeek';

export default class LoginService implements ILoginService {
  login = async (email: string): Promise<string> => {
    const user = await User.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
    const { userName, id } = user as User;
    const token = JwtService.sign({ email, userName, id });
    return token;
  };

  findUser = async (email: string): Promise<User> => {
    const user = await User.findOne({
      where: { email },
    });
    return user as User;
  };

  createUser = async (userData: User): Promise<string> => {
    const { userName, email, password } = userData;
    await User.create({ userName, email, password });
    return 'User registered';
  };

  deleteUser = async (id: number): Promise<string> => {
    const todos = await ToDos.findAll({ where: { userId: id } });
    await ToDos.destroy({ where: { userId: id } });
    console.log(todos);
    todos.map(async (todo) => {
      const { dayPeriodId, dayOfTheWeekId } = todo as ToDos;
      await DayPeriod.destroy({ where: { id: dayPeriodId } });
      await DaysOfTheWeek.destroy({ where: { id: dayOfTheWeekId } });
    });
    await User.destroy({
      where: { id },
    });
    return 'User deleted';
  };
}
