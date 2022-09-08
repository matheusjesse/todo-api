import Joi from 'joi';

const deletionSchema = Joi.object({
  id: Joi.number().required().messages({
    'any.required': 'Some required fields are missing',
    'number.base': 'Some field has the wrong type'
  })
});

export default deletionSchema;