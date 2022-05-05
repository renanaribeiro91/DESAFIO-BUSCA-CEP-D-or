import Joi from "@hapi/joi";

const cepRules = Joi.string().min(8).required();

export const cepSchema = Joi.object({
  tracking: cepRules,
});
