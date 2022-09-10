import { Router } from 'express';
import LoginController from '../controllers/loginController';
import Validation from '../middlewares/validation';
import LoginService from '../services/loginService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const validation = new Validation(loginService);

const router = Router();

router.post('/', validation.loginValidation, (req, res) => loginController.login(req, res));
router.post(
  '/register',
  validation.registerValidation,
  (req, res) => loginController.createUser(req, res),
);
router.delete(
  '/',
  (req, res) => loginController.deleteUser(req, res),
);

export default router;
