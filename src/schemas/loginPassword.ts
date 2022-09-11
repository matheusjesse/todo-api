import Joi from 'joi';

const loginPasswordSchema = Joi.object({
  id: Joi.number().required().messages({
    'any.required': 'Some required fields are missing',
    'number.base': 'Some field has the wrong type'
  }),
  newPassword: Joi.string().required().min(8).messages({
    'any.required': 'Some required fields are missing',
    'array.min': '"password" length must be at least 8 characters long'
  }),
});

export default loginPasswordSchema;