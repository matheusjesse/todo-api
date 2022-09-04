import { Request, Response, NextFunction } from 'express';
import ILoginService from '../interfaces/IloginService';
import loginSchema from '../schemas/loginValidation';

export default class LoginValidation {
  constructor(private LoginService: ILoginService) { }

  public loginValidation = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    next();
  };
}
