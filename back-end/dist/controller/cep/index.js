"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cepController = void 0;

var _services = require("../../services");

var _logger = require("../../utils/logger");

const cepController = async (req, res) => {
  const {
    tracking
  } = req.query;

  try {
    // const cepRedis = await getRedis(`cep-${tracking}`);
    // const cep = JSON.parse(cepRedis);
    // if (!cepRedis) {
    const result = await (0, _services.getCepByApi)(tracking); //   const setCep = await setRedis(`cep-${tracking}`, JSON.stringify(result));

    _logger.logger.info(JSON.stringify(result));

    return res.status(200).send(result); // }
    // return res.status(200).send(cep);
  } catch (error) {
    _logger.logger.error(error);

    return res.status(500).send("Internal Server Error");
  }
};

exports.cepController = cepController;