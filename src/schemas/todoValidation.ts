import Joi from 'joi';

const todoSchema = Joi.object({
    noteText: Joi.string().required().max(35).messages({
      'any.required': 'Some required fields are missing',
      'string.base': 'Some field has the wrong type',
      'string.max': '"noteText" length must be at least 35 characters long'
    }),
    userId: Joi.number().required().messages({
      'any.required': 'Some required fields are missing',
      'number.base': 'Some field has the wrong type'
    }),
    dayPeriod: Joi.object({
      morning: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      afternoon: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      night: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      })
    }),
    daysOfTheWeek: Joi.object({
      sunday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      monday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      tuesday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      wednesday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      thrusday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      friday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      }),
      saturday: Joi.boolean().required().messages({
        'any.required': 'Some required fields are missing',
        'boolean.base': 'Some field has the wrong  type'
      })
    })
});

export default todoSchema;
