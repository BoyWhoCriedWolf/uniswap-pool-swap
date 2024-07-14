import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

// TODO(WEB-1983):
// Setting `width: 100%` by default prevents composability in complex flex layouts.
// Same applies to `RowFixed` and its negative margins. This component needs to be
// further investigated and improved to make UI work easier.
const Row = styled(Box)`
  width: ${_ref => {
  let {
    width
  } = _ref;
  return width ?? "100%";
}};
  display: flex;
  padding: 0;
  align-items: ${_ref2 => {
  let {
    align
  } = _ref2;
  return align ?? "center";
}};
  justify-content: ${_ref3 => {
  let {
    justify
  } = _ref3;
  return justify ?? "flex-start";
}};
  padding: ${_ref4 => {
  let {
    padding
  } = _ref4;
  return padding;
}};
  border: ${_ref5 => {
  let {
    border
  } = _ref5;
  return border;
}};
  border-radius: ${_ref6 => {
  let {
    borderRadius
  } = _ref6;
  return borderRadius;
}};
  gap: ${_ref7 => {
  let {
    gap,
    theme
  } = _ref7;
  return gap && (theme.grids[gap] || gap);
}};
`;
const RowBetween = styled(Row)`
  justify-content: space-between;
`;
styled.div`
  display: flex;
  align-items: flex-end;
`;
const AutoRow = styled(Row)`
  flex-wrap: wrap;
  margin: ${_ref8 => {
  let {
    gap
  } = _ref8;
  return gap && `-${gap}`;
}};
  justify-content: ${_ref9 => {
  let {
    justify
  } = _ref9;
  return justify && justify;
}};

  & > * {
    margin: ${_ref10 => {
  let {
    gap
  } = _ref10;
  return gap;
}} !important;
  }
`;
const RowFixed = styled(Row)`
  width: fit-content;
  margin: ${_ref11 => {
  let {
    gap
  } = _ref11;
  return gap && `-${gap}`;
}};
`;

export { AutoRow, RowBetween, RowFixed, Row as default };
