import { Request, Response, NextFunction } from 'express';
import ToDos from '../database/models/toDos';
import todoSchema, { todoCompletedSchema } from '../schemas/todoValidation';
import ITodoService from '../interfaces/ITodoService';
import todoUpdateSchema from '../schemas/todoUpdateValidation';
import deletionSchema from '../schemas/todoDeletionValidation';
import JwtService from '../utils/jwtService';

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

  public tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    const token: string = req.headers.authorization as string;
    if (!token) return res.status(401).json({ message: 'No token provided.' });
    try {
      JwtService.verify(token) as { email: string, userName: string, id: number };
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  };

  public validateUpdateTodo = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = todoUpdateSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const todoId: number = req.body.id;
    const { id } = req.params;
    if (todoId !== Number(id)) {
      return res.status(400).json({
        message: 'Request failed due id conflict',
      });
    }
    const todoCheck = await ToDos.findOne({ where: { id } });
    if (!todoCheck) {
      return res.status(200).json({ message: `Todo with id ${id} Not Found` });
    }
    next();
  };

  public validateDeletion = async (req: Request, res: Response, next: NextFunction) => {
    const { error } = deletionSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });
    const { id } = req.body;
    if (typeof id !== 'number') {
      return res.status(400).json({
        message: 'Some field has the wrong type' });
    }
    const todoCheck = await ToDos.findOne({ where: { id } });
    if (!todoCheck) {
      return res.status(200).json({ message: `Todo with id ${id} Not Found` });
    }
    next();
  };
}
