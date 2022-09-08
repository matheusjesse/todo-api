import { Request, Response, NextFunction } from 'express';
import ILoginService from '../interfaces/IloginService';
import loginSchema, { registerSchema } from '../schemas/loginValidation';
import JwtService from '../utils/jwtService';
import User from '../database/models/user';

export default class Validation {
  constructor(private LoginService: ILoginService) { }

  public loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const user = await this.LoginService.findUser(email);
    if (!user) return res.status(401).json({ message: 'Incorrect email or password' });
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  };

  public tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers.authorization as string;
    try {
      JwtService.verify(token) as { email: string, password: string };
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  };

  public registerValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) return res.status(200).json({ message: 'This "email" is already in use' });
    next();
  };
}
