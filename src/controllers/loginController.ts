import { Request, Response } from 'express';
import User from '../database/models/user';
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

  async createUser(req: Request, res: Response) {
    const userRegistered = await this.LoginService.createUser(req.body);
    res.status(201).json({ message: userRegistered });
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(400).json({ message: 'user not found' });
    const token = await this.LoginService.deleteUser(Number(id));
    return res.status(200).json({ token });
  }

  async updatePassword(req: Request, res: Response) {
    const { id, newPassword } = req.body;
    const updateData = await this.LoginService.updatePassword(Number(id), newPassword);
    return res.status(200).json({ message: updateData });
  }
}
