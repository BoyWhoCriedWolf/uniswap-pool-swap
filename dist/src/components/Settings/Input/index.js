import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import styled from 'styled-components';
import Row from '../../Row/index.js';

var _templateObject, _templateObject2;
var Input = styled.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n  font-size: 16px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  text-align: right;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  ::placeholder {\n    color: ", ";\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.neutral3;
});
var InputContainer = styled(Row)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 8px 16px;\n  border-radius: 12px;\n  width: auto;\n  min-width: 100px;\n  flex: 1;\n  input {\n    color: ", ";\n  }\n  border: 1px solid\n    ", ";\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme,
    error = _ref2.error;
  return error ? theme.critical : theme.neutral1;
}, function (_ref3) {
  var theme = _ref3.theme,
    error = _ref3.error;
  return error ? theme.critical : theme.surface2;
}, function (_ref4) {
  var theme = _ref4.theme,
    error = _ref4.error;
  return error ? "\n        border: 1px solid ".concat(theme.critical, ";\n        :focus-within {\n          border-color: ").concat(theme.deprecated_accentFailureSoft, ";\n        }\n      ") : "\n        border: 1px solid ".concat(theme.surface3, ";\n        :focus-within {\n          border-color: ").concat(theme.accent2, ";\n        }\n      ");
});

export { Input, InputContainer };