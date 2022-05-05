import { Request, Response } from "express";

export const cepValidade = (schema) => (req: Request, res: Response, next) => {
  const { error } = schema.validate(req.query, {
    abortEarly: false,
  });

  if (error) {
    res.status(422).send({
      message: "Validation error",
    });
  } else {
    next();
  }
};
