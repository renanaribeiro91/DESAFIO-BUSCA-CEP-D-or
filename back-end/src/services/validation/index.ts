import Joi from "joi";

export const cepSchema = Joi.object({
  cep: Joi.string().min(8).required(),
});
