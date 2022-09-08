import Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().required().email().messages({
    'any.required': 'Some required fields are missing',
    'string.email': '"email" must be a valid email'
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': 'Some required fields are missing',
    'array.min': '"password" length must be at least 8 characters long'
  }),
});

export const registerSchema = Joi.object({
  email: Joi.string().required().email().messages({
    'any.required': 'Some required fields are missing',
    'string.email': '"email" must be a valid email'
  }),
  password: Joi.string().required().min(8).messages({
    'any.required': 'Some required fields are missing',
    'array.min': '"password" length must be at least 8 characters long'
  }),
  userName: Joi.string().required().max(22).messages({
    'any.required': 'Some required fields are missing',
    'string.base': 'Some field has the wrong type',
    'string.max': '"noteText" max length shoud be 22 characters long'
  }),
});

export default loginSchema;
