import { Request, Response } from 'express';
import ITodoService from '../interfaces/ITodoService';

export default class TodoController {
  constructor(
    private TodoService: ITodoService,
  ) { }

  async findAll(req: Request, res: Response) {
    const { id } = req.params;
    const todos = await this.TodoService.findAll(Number(id));
    res.status(200).json(todos);
  }
}
