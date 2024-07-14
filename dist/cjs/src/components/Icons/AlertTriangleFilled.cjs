'use strict';

var React = require('react');
var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var styled = require('styled-components');
var shared = require('./shared.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);

var _excluded = ["size"];
function AlertTriangleFilled(_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? "16px" : _ref$size,
    rest = _objectWithoutProperties__default["default"](_ref, _excluded);
  var theme = styled.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(shared.StyledSVG, _extends__default["default"]({
    viewBox: "0 0 16 16",
    fill: theme.deprecated_accentWarning,
    xmlns: "http://www.w3.org/2000/svg",
    size: size
  }, rest), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
  }));
}

module.exports = AlertTriangleFilled;