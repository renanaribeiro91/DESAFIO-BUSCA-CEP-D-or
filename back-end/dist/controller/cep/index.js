"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cepController = void 0;

var _services = require("../../services");

var _logger = require("../../utils/logger");

// import { getRedis, setRedis } from "../../db/redis";
const cepController = async (req, res) => {
  const {
    tracking
  } = req.query;

  try {
    // const cepRedis = await getRedis(`cep-${tracking}`);
    // const cep = JSON.parse(cepRedis);
    // console.log(cep);
    // if (!cepRedis) {
    // const setCep = await setRedis(
    //   `cep-${tracking}`,
    //   JSON.stringify(tracking)
    // );
    const result = await (0, _services.getCepByApi)(tracking);
    const resultInfo = JSON.stringify(result);

    _logger.logger.info(resultInfo);

    return res.status(200).send(result); // }
    // return res.status(200).send(cep);
  } catch (error) {
    _logger.logger.error(error);

    return res.status(500).send("Internal Server Error");
  }
};

exports.cepController = cepController;