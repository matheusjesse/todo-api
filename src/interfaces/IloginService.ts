import User from '../database/models/user';

export default interface ILoginService {
  login(email: string, userName: string, id: number): Promise<string>
  findUser(email: string): Promise<User>
}
