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
const loginValidation_1 = __importDefault(require("../schemas/loginValidation"));
const jwtService_1 = __importDefault(require("../utils/jwtService"));
class Validation {
    constructor(LoginService) {
        this.LoginService = LoginService;
        this.loginValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const { error } = loginValidation_1.default.validate(req.body);
            if (error)
                return res.status(400).json({ message: error.message });
            const user = yield this.LoginService.findUser(email);
            if (!user)
                return res.status(401).json({ message: 'Incorrect email or password' });
            if (user.password !== password) {
                return res.status(401).json({ message: 'Incorrect email or password' });
            }
            next();
        });
        this.tokenValidation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            try {
                jwtService_1.default.verify(token);
            }
            catch (error) {
                return res.status(401).json({ message: 'Token must be a valid token' });
            }
            next();
        });
    }
}
exports.default = Validation;
