import { Request, Response } from 'express';
import ITodoService from '../interfaces/ITodoService';

export default class TodoController {
  constructor(
    private TodoService: ITodoService,
  ) { }

  async findAll(req: Request, res: Response) {
    const { id } = req.params;
    const todos = await this.TodoService.findAll(Number(id));
    if (todos.length === 0) return res.status(200).json({ message: 'No todo found' });
    res.status(200).json(todos);
  }

  async createTodo(req: Request, res: Response) {
    const todo = await this.TodoService.createTodo(req.body);
    res.status(201).json(todo);
  }

  async todoToggleStatus(req: Request, res: Response) {
    const todoToggleStatusData = await this.TodoService.todoToggleStatus(req.body);

    return res.status(200).json(todoToggleStatusData);
  }

  async editTodo(req: Request, res: Response) {
    const editTodoData = await this.TodoService.editTodo(req.body);
    return res.status(200).json({ message: editTodoData });
  }

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.body;
    const deleteToDo = await this.TodoService.deleteTodo(Number(id));
    return res.status(200).json({ mesage: deleteToDo });
  }
}
