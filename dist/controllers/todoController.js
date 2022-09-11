"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TodoController {
    constructor(TodoService) {
        this.TodoService = TodoService;
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const todos = yield this.TodoService.findAll(Number(id));
            if (todos.length === 0)
                return res.status(200).json({ message: 'No todo found' });
            res.status(200).json(todos);
        });
    }
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield this.TodoService.createTodo(req.body);
            res.status(201).json(todo);
        });
    }
    todoToggleStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todoToggleStatusData = yield this.TodoService.todoToggleStatus(req.body);
            return res.status(200).json(todoToggleStatusData);
        });
    }
    editTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const editTodoData = yield this.TodoService.editTodo(req.body);
            return res.status(200).json({ message: editTodoData });
        });
    }
    deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const deleteToDo = yield this.TodoService.deleteTodo(Number(id));
            return res.status(200).json({ message: deleteToDo });
        });
    }
}
exports.default = TodoController;
