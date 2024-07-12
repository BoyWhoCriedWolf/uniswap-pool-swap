import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';
import styled, { keyframes, css } from 'styled-components';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var rotateAnimation = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var RotationStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation: 2s ", " linear infinite;\n"])), rotateAnimation);
var StyledSVG = styled.svg(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n    background: ", ";\n    fill: ", ";\n  }\n"])), function (_ref) {
  var size = _ref.size;
  return size;
}, function (_ref2) {
  var size = _ref2.size;
  return size;
}, function (_ref3) {
  var stroke = _ref3.stroke;
  return stroke;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.neutral2;
}, function (_ref5) {
  var fill = _ref5.fill;
  return fill;
});
var StyledRotatingSVG = styled(StyledSVG)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), RotationStyle);

export { StyledRotatingSVG, StyledSVG };
