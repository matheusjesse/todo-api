"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
const validation_1 = __importDefault(require("../middlewares/validation"));
const loginService_1 = __importDefault(require("../services/loginService"));
const loginService = new loginService_1.default();
const loginController = new loginController_1.default(loginService);
const validation = new validation_1.default(loginService);
const router = (0, express_1.Router)();
router.post('/', validation.loginValidation, (req, res) => loginController.login(req, res));
exports.default = router;
