"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = void 0;

var _winston = require("winston");

const logConfig = {
  format: _winston.format.combine(_winston.format.errors({
    stack: true
  }), _winston.format.json(), _winston.format.timestamp({
    format: "MMM-DD-YYYY HH:mm:ss"
  }), _winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)),
  transports: [new _winston.transports.File({
    filename: "logs/error.log",
    level: "error"
  }), new _winston.transports.File({
    filename: "logs/info.log",
    level: "info"
  })]
};
const logger = (0, _winston.createLogger)(logConfig);
exports.logger = logger;