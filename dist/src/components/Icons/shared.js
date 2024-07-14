import styled, { keyframes, css } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const RotationStyle = css`
  animation: 2s ${rotateAnimation} linear infinite;
`;
const StyledSVG = styled.svg`
  height: ${_ref => {
  let {
    size
  } = _ref;
  return size;
}};
  width: ${_ref2 => {
  let {
    size
  } = _ref2;
  return size;
}};
  path {
    stroke: ${_ref3 => {
  let {
    stroke
  } = _ref3;
  return stroke;
}};
    background: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.neutral2;
}};
    fill: ${_ref5 => {
  let {
    fill
  } = _ref5;
  return fill;
}};
  }
`;
const StyledRotatingSVG = styled(StyledSVG)`
  ${RotationStyle}
`;

export { StyledRotatingSVG, StyledSVG };
