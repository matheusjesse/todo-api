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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../database/models/user"));
class LoginController {
    constructor(LoginService) {
        this.LoginService = LoginService;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const token = yield this.LoginService.login(email, password);
            if (!token)
                res.status(400).json({ message: 'user not found' });
            res.status(200).json({ token });
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRegistered = yield this.LoginService.createUser(req.body);
            res.status(201).json({ message: userRegistered });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const user = yield user_1.default.findOne({ where: { id } });
            if (!user)
                return res.status(400).json({ message: 'user not found' });
            const token = yield this.LoginService.deleteUser(Number(id));
            return res.status(200).json({ token });
        });
    }
    updatePassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, newPassword } = req.body;
            const updateData = yield this.LoginService.updatePassword(Number(id), newPassword);
            return res.status(200).json({ message: updateData });
        });
    }
}
exports.default = LoginController;
