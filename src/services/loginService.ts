import User from '../database/models/user';
import ILoginService from '../interfaces/IloginService';
import JwtService from '../utils/jwtService';

export default class LoginService implements ILoginService {
  login = async (email: string, password: string): Promise<string> => {
    await User.findOne({
      where: { email },
      attributes: { exclude: ['password', 'userName'] },
    });
    const token = JwtService.sign({ email, password });
    return token;
  };
}
