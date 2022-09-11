"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const deletionSchema = joi_1.default.object({
    id: joi_1.default.number().required().messages({
        'any.required': 'Some required fields are missing',
        'number.base': 'Some field has the wrong type'
    })
});
exports.default = deletionSchema;
