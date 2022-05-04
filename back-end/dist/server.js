"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_routes.default);
app.listen(process.env.PORT, () => {
  console.log(`server is run on PORT ${process.env.PORT}`);
});