"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cepController = void 0;

var _services = require("../../services");

var _redis = require("../../db/redis");

const cepController = async (req, res) => {
  const {
    tracking
  } = req.query;

  try {
    const setCep = await (0, _redis.setRedis)(`cep-${tracking.code}`, JSON.stringify(tracking));

    if (setCep) {
      const cepRedis = await (0, _redis.getRedis)(`cep-${tracking}`);
      const cep = JSON.parse(cepRedis);
      return res.status(200).send(cep);
    } else {
      const result = await (0, _services.getCepByApi)(tracking); // logger.info(result);

      return res.status(200).send(result);
    }
  } catch (error) {
    return false;
  }
};

exports.cepController = cepController;