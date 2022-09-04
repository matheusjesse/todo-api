import IToDo from './IToDo';

export default interface ITodoService {
  findAll(id: number): Promise<IToDo[]>
}
