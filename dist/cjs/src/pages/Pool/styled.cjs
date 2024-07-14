'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var styled$1 = require('../../components/Loader/styled.cjs');
var rebass = require('rebass');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  position: relative;\n  padding: 20px;\n"])));
styled__default["default"](rebass.Text)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.accent1;
});
styled__default["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n  padding: 0.5rem 1rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ", ";\n  font-weight: 535;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.accent2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.accent2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.deprecated_mediaWidth.deprecated_upToSmall(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default["default"](["\n    padding: 0.25rem 0.5rem;\n  "])));
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.accent1;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.accent1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.accent1;
});
var Dots = styled__default["default"].span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default["default"](["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: \".\";\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: \".\";\n    }\n    33% {\n      content: \"..\";\n    }\n    66% {\n      content: \"...\";\n    }\n  }\n"])));
var LoadingRows = styled__default["default"](styled$1.LoadingRows)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral__default["default"](["\n  padding-top: 36px;\n  min-width: 75%;\n  max-width: 960px;\n  grid-column-gap: 0.5em;\n  grid-row-gap: 0.8em;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 8px;\n\n  & > div:nth-child(4n + 1) {\n    grid-column: 1 / 3;\n  }\n  & > div:nth-child(4n) {\n    grid-column: 3 / 4;\n    margin-bottom: 2em;\n  }\n"])));

exports.Dots = Dots;
exports.LoadingRows = LoadingRows;