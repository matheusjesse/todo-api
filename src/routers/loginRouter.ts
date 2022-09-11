import { Router } from 'express';
import LoginController from '../controllers/loginController';
import ValidationTodo from '../middlewares/todoValidation';
import Validation from '../middlewares/validation';
import LoginService from '../services/loginService';
import TodoService from '../services/todoService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const validation = new Validation(loginService);
const todoService = new TodoService();
const validationToken = new ValidationTodo(todoService);

const router = Router();

router.post('/', validation.loginValidation, (req, res) => loginController.login(req, res));
router.post(
  '/register',
  validation.registerValidation,
  (req, res) => loginController.createUser(req, res),
);
router.delete(
  '/',
  validationToken.tokenValidation,
  (req, res) => loginController.deleteUser(req, res),
);
router.patch(
  '/',
  validation.loginPassworUpdate,
  (req, res) => loginController.updatePassword(req, res),
);

export default router;
