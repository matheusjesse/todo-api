import { Router } from 'express';
import TodoService from '../services/todoService';
import TodoController from '../controllers/todoController';
import ValidationTodo from '../middlewares/todoValidation';

const router = Router();

const todoService = new TodoService();
const todoController = new TodoController(todoService);
const todoValidation = new ValidationTodo(todoService);

const validation = new ValidationTodo(todoService);

router.post(
  '/',
  todoValidation.validate,
  validation.tokenValidation,
  (req, res) => todoController.createTodo(req, res),
);
router.get(
  '/user/:id',
  validation.tokenValidation,
  (req, res) => todoController.findAll(req, res),
);
router.patch(
  '/',
  validation.tokenValidation,
  todoValidation.validateCompleted,
  (req, res) => todoController.todoToggleStatus(req, res),
);
router.put(
  '/:id',
  validation.tokenValidation,
  todoValidation.validateUpdateTodo,
  (req, res) => todoController.editTodo(req, res),
);
router.delete(
  '/',
  validation.tokenValidation,
  todoValidation.validateDeletion,
  (req, res) => todoController.deleteTodo(req, res),
);

export default router;
