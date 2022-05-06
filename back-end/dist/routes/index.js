"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cep = require("../controller/cep");

var _rules = require("../services/rules");

var _validate = require("../services/validate");

const routes = (0, _express.Router)();
routes.get("/", (0, _validate.cepValidade)(_rules.cepSchema), _cep.cepController);
var _default = routes;
exports.default = _default;