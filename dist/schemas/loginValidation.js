"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().required().email().messages({
        'any.required': 'Some required fields are missing',
        'string.email': '"email" must be a valid email'
    }),
    password: joi_1.default.string().required().min(8).messages({
        'any.required': 'Some required fields are missing',
        'array.min': '"password" length must be at least 8 characters long'
    }),
});
exports.default = loginSchema;
