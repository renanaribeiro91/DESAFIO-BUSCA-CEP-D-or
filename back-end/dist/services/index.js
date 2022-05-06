"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCepByApi = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _constantes = require("../constantes/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getCepByApi = async tracking => {
  try {
    const response = await _axios.default.get(`${_constantes.API_URL}/cep.json?code=${tracking}`);
    return response.data;
  } catch (error) {
    return false;
  }
};

exports.getCepByApi = getCepByApi;