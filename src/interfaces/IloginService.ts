import User from '../database/models/user';

export default interface ILoginService {
  login(email: string, password: string): Promise<string>
  findUser(email: string): Promise<User>
  createUser(userData: User): Promise<string>
}
