"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const routes = (0, _express.Router)();
routes.get("/", (req, res) => {
  return res.status(200).send({
    msg: "ok"
  });
});
var _default = routes;
exports.default = _default;