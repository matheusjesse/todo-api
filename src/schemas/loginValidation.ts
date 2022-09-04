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

export default loginSchema;
