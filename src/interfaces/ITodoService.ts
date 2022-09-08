import IToDo, { ITodoUpdate } from './IToDo';
import ToDos from '../database/models/toDos';

export default interface ITodoService {
  findAll(id: number): Promise<IToDo[]>
  createTodo(todo: IToDo): Promise<ToDos>
  todoToggleStatus(todo: { id: number, completed: boolean }): Promise<IToDo>
  editTodo(todo: ITodoUpdate): Promise<string>
  deleteTodo(id: number): Promise<string>
}
