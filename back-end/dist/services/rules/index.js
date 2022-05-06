"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cepSchema = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cepRules = _joi.default.string().min(8).required();

const cepSchema = _joi.default.object({
  tracking: cepRules
});

exports.cepSchema = cepSchema;