"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toDos_1 = __importDefault(require("../database/models/toDos"));
const todoValidation_1 = __importStar(require("../schemas/todoValidation"));
const todoUpdateValidation_1 = __importDefault(require("../schemas/todoUpdateValidation"));
const todoDeletionValidation_1 = __importDefault(require("../schemas/todoDeletionValidation"));
const jwtService_1 = __importDefault(require("../utils/jwtService"));
class ValidationTodo {
    constructor(TodoService) {
        this.TodoService = TodoService;
        this.validate = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = todoValidation_1.default.validate(req.body);
            if (error)
                return res.status(400).json({ message: error.message });
            next();
        });
        this.validateCompleted = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = todoValidation_1.todoCompletedSchema.validate(req.body);
            if (error)
                return res.status(400).json({ message: error.message });
            const { id } = req.body;
            const todoCheck = yield toDos_1.default.findOne({ where: { id } });
            if (!todoCheck) {
                return res.status(200).json({ message: `Todo with id ${id} Not Found` });
            }
            next();
        });
        this.tokenValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            if (!token)
                return res.status(401).json({ message: 'No token provided.' });
            try {
                jwtService_1.default.verify(token);
            }
            catch (error) {
                return res.status(401).json({ message: 'Token must be a valid token' });
            }
            next();
        });
        this.validateUpdateTodo = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = todoUpdateValidation_1.default.validate(req.body);
            if (error)
                return res.status(400).json({ message: error.message });
            const todoId = req.body.id;
            const { id } = req.params;
            if (todoId !== Number(id)) {
                return res.status(400).json({
                    message: 'Request failed due id conflict',
                });
            }
            const todoCheck = yield toDos_1.default.findOne({ where: { id } });
            if (!todoCheck) {
                return res.status(200).json({ message: `Todo with id ${id} Not Found` });
            }
            next();
        });
        this.validateDeletion = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { error } = todoDeletionValidation_1.default.validate(req.body);
            if (error)
                return res.status(400).json({ message: error.message });
            const { id } = req.body;
            if (typeof id !== 'number') {
                return res.status(400).json({
                    message: 'Some field has the wrong type'
                });
            }
            const todoCheck = yield toDos_1.default.findOne({ where: { id } });
            if (!todoCheck) {
                return res.status(200).json({ message: `Todo with id ${id} Not Found` });
            }
            next();
        });
    }
}
exports.default = ValidationTodo;
