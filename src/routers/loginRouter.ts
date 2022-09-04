import { Router } from 'express';
import LoginController from '../controllers/loginController';
import Validation from '../middlewares/loginValidation';
import LoginService from '../services/loginService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);
const validation = new Validation(loginService);

const router = Router();

router.post('/', validation.loginValidation, (req, res) => loginController.login(req, res));

export default router;
