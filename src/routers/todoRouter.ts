import { Router } from 'express';
import TodoService from '../services/todoService';
import TodoController from '../controllers/todoController';
import ValidationTodo from '../middlewares/todoValidation';

const router = Router();

const todoService = new TodoService();
const todoController = new TodoController(todoService);
const todoValidation = new ValidationTodo(todoService);

router.post('/', todoValidation.validate, (req, res) => todoController.createTodo(req, res));
router.get('/:id', (req, res) => todoController.findAll(req, res));

export default router;
