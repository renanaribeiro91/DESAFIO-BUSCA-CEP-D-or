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
    const result = await (0, _services.getCepByApi)(tracking);

    _logger.logger.info(result);

    return res.status(200).send(result);
  } catch (error) {
    return false;
  }
}; // .replace(/\D/g, '')


exports.cepController = cepController;