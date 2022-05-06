"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cepValidade = void 0;

const cepValidade = schema => (req, res, next) => {
  const {
    error
  } = schema.validate(req.query, {
    abortEarly: false
  });

  if (error) {
    res.status(422).send({
      message: "Validation error"
    });
    next();
  } else {
    next();
  }
};

exports.cepValidade = cepValidade;