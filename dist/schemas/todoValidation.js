"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoCompletedSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const todoSchema = joi_1.default.object({
    noteText: joi_1.default.string().required().max(35).messages({
        'any.required': 'Some required fields are missing',
        'string.base': 'Some field has the wrong type',
        'string.max': '"noteText" length must be at least 35 characters long'
    }),
    completed: joi_1.default.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
    }),
    userId: joi_1.default.number().required().messages({
        'any.required': 'Some required fields are missing',
        'number.base': 'Some field has the wrong type'
    }),
    dayPeriod: joi_1.default.object({
        morning: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        afternoon: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        night: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        })
    }),
    daysOfTheWeek: joi_1.default.object({
        sunday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        monday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        tuesday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        wednesday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        thrusday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        friday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        }),
        saturday: joi_1.default.boolean().required().messages({
            'any.required': 'Some required fields are missing',
            'boolean.base': 'Some field has the wrong  type'
        })
    })
});
const todoCompletedSchema = joi_1.default.object({
    id: joi_1.default.number().required().messages({
        'any.required': 'Some required fields are missing',
        'number.base': 'Some field has the wrong type'
    }),
    completed: joi_1.default.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
    })
});
exports.todoCompletedSchema = todoCompletedSchema;
exports.default = todoSchema;
