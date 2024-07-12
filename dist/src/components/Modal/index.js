import _extends from '@babel/runtime/helpers/extends';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import React__default from 'react';
import { animated, useTransition, useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import styled, { css } from 'styled-components';
import { Z_INDEX } from '../../theme/zIndex.js';
import { isMobile } from '../../utils/userAgent.js';

const MODAL_TRANSITION_DURATION = 200;
const AnimatedDialogOverlay = animated(DialogOverlay);
const StyledDialogOverlay = styled(AnimatedDialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: ${Z_INDEX.modalBackdrop};
    background-color: transparent;
    overflow: hidden;

    display: flex;
    align-items: center;
    @media screen and (max-width: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.breakpoint.sm;
}}px) {
      align-items: flex-end;
    }
    overflow-y: ${_ref2 => {
  let {
    $scrollOverlay
  } = _ref2;
  return $scrollOverlay && "scroll";
}};
    justify-content: center;

    background-color: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.scrim;
}};
  }
`;
const AnimatedDialogContent = animated(DialogContent);
const StyledDialogContent = styled(AnimatedDialogContent)`
  overflow-y: auto;

  &[data-reach-dialog-content] {
    margin: auto;
    background-color: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.surface2;
}};
    border: ${_ref5 => {
  let {
    theme,
    $hideBorder
  } = _ref5;
  return !$hideBorder && `1px solid ${theme.surface3}`;
}};
    box-shadow: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.deprecated_deepShadow;
}};
    padding: 0px;
    width: 50vw;
    overflow-y: auto;
    overflow-x: hidden;
    max-width: ${_ref7 => {
  let {
    $maxWidth
  } = _ref7;
  return $maxWidth;
}}px;
    ${_ref8 => {
  let {
    $maxHeight
  } = _ref8;
  return $maxHeight && css`
        max-height: ${$maxHeight}vh;
      `;
}}
    ${_ref9 => {
  let {
    $minHeight
  } = _ref9;
  return $minHeight && css`
        min-height: ${$minHeight}vh;
      `;
}}
    display: ${_ref10 => {
  let {
    $scrollOverlay
  } = _ref10;
  return $scrollOverlay ? "inline-table" : "flex";
}};
    border-radius: 20px;

    @media screen and (max-width: ${_ref11 => {
  let {
    theme
  } = _ref11;
  return theme.breakpoint.md;
}}px) {
      width: 65vw;
    }
    @media screen and (max-width: ${_ref12 => {
  let {
    theme
  } = _ref12;
  return theme.breakpoint.sm;
}}px) {
      margin: 0;
      width: 100vw;
      border-radius: 20px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
function Modal(_ref13) {
  let {
    isOpen,
    onDismiss,
    minHeight = false,
    maxHeight = 90,
    maxWidth = 420,
    height,
    initialFocusRef,
    children,
    onSwipe = onDismiss,
    $scrollOverlay,
    hideBorder = false
  } = _ref13;
  const fadeTransition = useTransition(isOpen, {
    config: {
      duration: MODAL_TRANSITION_DURATION
    },
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  const [{
    y
  }, set] = useSpring(() => ({
    y: 0,
    config: {
      mass: 1,
      tension: 210,
      friction: 20
    }
  }));
  const bind = useGesture({
    onDrag: state => {
      set({
        y: state.down ? state.movement[1] : 0
      });
      if (state.movement[1] > 300 || state.velocity > 3 && state.direction[1] > 0) {
        onSwipe?.();
      }
    }
  });
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, fadeTransition((_ref14, item) => {
    let {
      opacity
    } = _ref14;
    return item && /*#__PURE__*/React__default.createElement(StyledDialogOverlay, {
      style: {
        opacity: opacity.to({
          range: [0.0, 1.0],
          output: [0, 1]
        })
      },
      onDismiss: onDismiss,
      initialFocusRef: initialFocusRef,
      unstable_lockFocusAcrossFrames: false,
      $scrollOverlay: $scrollOverlay
    }, /*#__PURE__*/React__default.createElement(StyledDialogContent, _extends({}, isMobile ? {
      ...bind(),
      style: {
        transform: y.interpolate(y => `translateY(${y > 0 ? y : 0}px)`)
      }
    } : {}, {
      "aria-label": "dialog",
      $minHeight: height ?? minHeight,
      $maxHeight: height ?? maxHeight,
      $scrollOverlay: $scrollOverlay,
      $hideBorder: hideBorder,
      $maxWidth: maxWidth
    }), !initialFocusRef && isMobile ? /*#__PURE__*/React__default.createElement("div", {
      tabIndex: 1
    }) : null, children));
  }));
}

export { MODAL_TRANSITION_DURATION, Modal as default };
