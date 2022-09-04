import IToDo from './IToDo';
import ToDos from '../database/models/toDos';

export default interface ITodoService {
  findAll(id: number): Promise<IToDo[]>
  createTodo(todo: IToDo): Promise<ToDos>
}
