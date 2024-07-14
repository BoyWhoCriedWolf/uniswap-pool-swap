'use strict';

var React = require('react');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var reactSpring = require('react-spring');
var useResizeObserver = require('use-resize-observer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var useResizeObserver__default = /*#__PURE__*/_interopDefaultLegacy(useResizeObserver);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * @param open conditional to show content or hide
 * @returns Wrapper to smoothly hide and expand content
 */
function AnimatedDropdown(_ref) {
  var open = _ref.open,
    children = _ref.children;
  var _useResizeObserver = useResizeObserver__default["default"](),
    ref = _useResizeObserver.ref,
    height = _useResizeObserver.height;
  var props = reactSpring.useSpring({
    // On initial render, `height` will be undefined as ref has not been set yet.
    // If the dropdown should be open, we fallback to `auto` to avoid flickering.
    // Otherwise, we just animate between actual height (when open) and 0 (when closed).
    height: open ? height !== null && height !== void 0 ? height : "auto" : 0,
    config: {
      mass: 1.2,
      tension: 300,
      friction: 20,
      clamp: true,
      velocity: 0.01
    }
  });
  return /*#__PURE__*/React__default["default"].createElement(reactSpring.animated.div, {
    style: _objectSpread(_objectSpread({}, props), {}, {
      overflow: "hidden",
      width: "100%",
      minWidth: "min-content",
      willChange: "height"
    })
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: ref
  }, children));
}

module.exports = AnimatedDropdown;