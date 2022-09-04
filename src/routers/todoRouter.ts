import { Router } from 'express';
import TodoService from '../services/todoService';
import TodoController from '../controllers/todoController';

const router = Router();

const todoService = new TodoService();
const todoController = new TodoController(todoService);

router.post('/', (req, res) => todoController.createTodo(req, res));
router.get('/:id', (req, res) => todoController.findAll(req, res));

export default router;
