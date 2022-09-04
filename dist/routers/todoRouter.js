"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoService_1 = __importDefault(require("../services/todoService"));
const todoController_1 = __importDefault(require("../controllers/todoController"));
const router = (0, express_1.Router)();
const todoService = new todoService_1.default();
const todoController = new todoController_1.default(todoService);
router.get('/:id', (req, res) => todoController.findAll(req, res));
exports.default = router;
