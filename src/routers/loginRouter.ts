import { Router } from 'express';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';

const loginService = new LoginService();
const loginController = new LoginController(loginService);

const router = Router();

router.post('/', (req, res) => loginController.login(req, res));

export default router;
