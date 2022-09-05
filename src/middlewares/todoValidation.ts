import { Request, Response, NextFunction } from 'express';

import todoSchema from '../schemas/todoValidation';
import ITodoService from '../interfaces/ITodoService';

export default class ValidationTodo {
  constructor(private TodoService: ITodoService) { }

  public validate = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = todoSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    next();
  };
}
