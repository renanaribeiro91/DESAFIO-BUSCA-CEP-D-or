import { Request, Response } from "express";
import { logger } from "../../utils/logger";

export const cepValidade = (schema) => (req: Request, res: Response, next) => {
  const { error } = schema.validate(req.query, {
    abortEarly: false,
  });

  if (error) {
    res.status(422).send({
      message: "Validation error",
    });
    // logger.error(
    //   `${err.status || 400} - ${res.statusMessage} - ${err.message} `
    // );
    next();
  } else {
    next();
  }
};
