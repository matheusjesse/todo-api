import { Request, Response } from 'express';
import ILoginService from '../interfaces/IloginService';

export default class LoginController {
  constructor(
    private LoginService: ILoginService,
  ) { }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this.LoginService.login(email, password);
    if (!token) res.status(400).json({ message: 'user not found' });
    res.status(200).json({ token });
  }
}
