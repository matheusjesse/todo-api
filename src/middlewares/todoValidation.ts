import { Request, Response, NextFunction } from 'express';
import ToDos from '../database/models/toDos';
import todoSchema, { todoCompletedSchema } from '../schemas/todoValidation';
import ITodoService from '../interfaces/ITodoService';

export default class ValidationTodo {
  constructor(private TodoService: ITodoService) { }

  public validate = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = todoSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    next();
  };

  public validateCompleted = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = todoCompletedSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const { id } = req.body;
    const todoCheck = await ToDos.findOne({ where: { id } });
    if (!todoCheck) {
      return res.status(200).json({ message: `Todo with id ${id} Not Found` });
    }
    next();
  };
}
