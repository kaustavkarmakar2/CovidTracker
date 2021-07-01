"use strict";

var _headind = _interopRequireDefault(require("../controller/headind.js"));

var _form = _interopRequireDefault(require("../controller/form.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  (0, _headind["default"])();
  (0, _form["default"])();
};

App();