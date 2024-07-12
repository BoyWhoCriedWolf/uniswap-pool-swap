'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var svg = require('./svg.cjs');
var d3 = require('d3');
var usePrevious = require('../../hooks/usePrevious.cjs');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var Handle = styled__default["default"].path(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n  cursor: ew-resize;\n  pointer-events: none;\n\n  stroke-width: 3;\n  stroke: ", ";\n  fill: ", ";\n"])), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var color = _ref2.color;
  return color;
});
var HandleAccent = styled__default["default"].path(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n  cursor: ew-resize;\n  pointer-events: none;\n\n  stroke-width: 1.5;\n  stroke: ", ";\n  opacity: ", ";\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.white;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.opacity.hover;
});
var LabelGroup = styled__default["default"].g(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n  opacity: ", ";\n  transition: opacity 300ms;\n"])), function (_ref5) {
  var visible = _ref5.visible;
  return visible ? "1" : "0";
});
var TooltipBackground = styled__default["default"].rect(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default["default"](["\n  fill: ", ";\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.surface3;
});
var Tooltip = styled__default["default"].text(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default["default"](["\n  text-anchor: middle;\n  font-size: 13px;\n  fill: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.neutral1;
});

// flips the handles draggers when close to the container edges
var FLIP_HANDLE_THRESHOLD_PX = 20;

// margin to prevent tick snapping from putting the brush off screen
var BRUSH_EXTENT_MARGIN_PX = 2;

/**
 * Returns true if every element in `a` maps to the
 * same pixel coordinate as elements in `b`
 */
var compare = function compare(a, b, xScale) {
  // normalize pixels to 1 decimals
  var aNorm = a.map(function (x) {
    return xScale(x).toFixed(1);
  });
  var bNorm = b.map(function (x) {
    return xScale(x).toFixed(1);
  });
  return aNorm.every(function (v, i) {
    return v === bNorm[i];
  });
};
var Brush = function Brush(_ref8) {
  var id = _ref8.id,
    xScale = _ref8.xScale,
    interactive = _ref8.interactive,
    brushLabelValue = _ref8.brushLabelValue,
    brushExtent = _ref8.brushExtent,
    setBrushExtent = _ref8.setBrushExtent,
    innerWidth = _ref8.innerWidth,
    innerHeight = _ref8.innerHeight,
    westHandleColor = _ref8.westHandleColor,
    eastHandleColor = _ref8.eastHandleColor;
  var brushRef = React.useRef(null);
  var brushBehavior = React.useRef(null);

  // only used to drag the handles on brush for performance
  var _useState = React.useState(brushExtent),
    _useState2 = _slicedToArray__default["default"](_useState, 2),
    localBrushExtent = _useState2[0],
    setLocalBrushExtent = _useState2[1];
  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray__default["default"](_useState3, 2),
    showLabels = _useState4[0],
    setShowLabels = _useState4[1];
  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray__default["default"](_useState5, 2),
    hovering = _useState6[0],
    setHovering = _useState6[1];
  var previousBrushExtent = usePrevious(brushExtent);
  var brushed = React.useCallback(function (event) {
    var type = event.type,
      selection = event.selection,
      mode = event.mode;
    if (!selection) {
      setLocalBrushExtent(null);
      return;
    }
    var scaled = selection.map(xScale.invert);

    // avoid infinite render loop by checking for change
    if (type === "end" && !compare(brushExtent, scaled, xScale)) {
      setBrushExtent(scaled, mode);
    }
    setLocalBrushExtent(scaled);
  }, [xScale, brushExtent, setBrushExtent]);

  // keep local and external brush extent in sync
  // i.e. snap to ticks on bruhs end
  React.useEffect(function () {
    setLocalBrushExtent(brushExtent);
  }, [brushExtent]);

  // initialize the brush
  React.useEffect(function () {
    if (!brushRef.current) return;
    brushBehavior.current = d3.brushX().extent([[Math.max(0 + BRUSH_EXTENT_MARGIN_PX, xScale(0)), 0], [innerWidth - BRUSH_EXTENT_MARGIN_PX, innerHeight]]).handleSize(30).filter(function () {
      return interactive;
    }).on("brush end", brushed);
    brushBehavior.current(d3.select(brushRef.current));
    if (previousBrushExtent && compare(brushExtent, previousBrushExtent, xScale)) {
      d3.select(brushRef.current).transition().call(brushBehavior.current.move, brushExtent.map(xScale));
    }

    // brush linear gradient
    d3.select(brushRef.current).selectAll(".selection").attr("stroke", "none").attr("fill-opacity", "0.1").attr("fill", "url(#".concat(id, "-gradient-selection)"));
  }, [brushExtent, brushed, id, innerHeight, innerWidth, interactive, previousBrushExtent, xScale]);

  // respond to xScale changes only
  React.useEffect(function () {
    if (!brushRef.current || !brushBehavior.current) return;
    brushBehavior.current.move(d3.select(brushRef.current), brushExtent.map(xScale));
  }, [brushExtent, xScale]);

  // show labels when local brush changes
  React.useEffect(function () {
    setShowLabels(true);
    var timeout = setTimeout(function () {
      return setShowLabels(false);
    }, 1500);
    return function () {
      return clearTimeout(timeout);
    };
  }, [localBrushExtent]);

  // variables to help render the SVGs
  var flipWestHandle = localBrushExtent && xScale(localBrushExtent[0]) > FLIP_HANDLE_THRESHOLD_PX;
  var flipEastHandle = localBrushExtent && xScale(localBrushExtent[1]) > innerWidth - FLIP_HANDLE_THRESHOLD_PX;
  var showWestArrow = localBrushExtent && (xScale(localBrushExtent[0]) < 0 || xScale(localBrushExtent[1]) < 0);
  var showEastArrow = localBrushExtent && (xScale(localBrushExtent[0]) > innerWidth || xScale(localBrushExtent[1]) > innerWidth);
  var westHandleInView = localBrushExtent && xScale(localBrushExtent[0]) >= 0 && xScale(localBrushExtent[0]) <= innerWidth;
  var eastHandleInView = localBrushExtent && xScale(localBrushExtent[1]) >= 0 && xScale(localBrushExtent[1]) <= innerWidth;
  return React.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("defs", null, /*#__PURE__*/React__default["default"].createElement("linearGradient", {
      id: "".concat(id, "-gradient-selection"),
      x1: "0%",
      y1: "100%",
      x2: "100%",
      y2: "100%"
    }, /*#__PURE__*/React__default["default"].createElement("stop", {
      stopColor: westHandleColor
    }), /*#__PURE__*/React__default["default"].createElement("stop", {
      stopColor: eastHandleColor,
      offset: "1"
    })), /*#__PURE__*/React__default["default"].createElement("clipPath", {
      id: "".concat(id, "-brush-clip")
    }, /*#__PURE__*/React__default["default"].createElement("rect", {
      x: "0",
      y: "0",
      width: innerWidth,
      height: innerHeight
    }))), /*#__PURE__*/React__default["default"].createElement("g", {
      ref: brushRef,
      clipPath: "url(#".concat(id, "-brush-clip)"),
      onMouseEnter: function onMouseEnter() {
        return setHovering(true);
      },
      onMouseLeave: function onMouseLeave() {
        return setHovering(false);
      }
    }), localBrushExtent && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, westHandleInView ? /*#__PURE__*/React__default["default"].createElement("g", {
      transform: "translate(".concat(Math.max(0, xScale(localBrushExtent[0])), ", 0), scale(").concat(flipWestHandle ? "-1" : "1", ", 1)")
    }, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement(Handle, {
      color: westHandleColor,
      d: svg.brushHandlePath(innerHeight)
    }), /*#__PURE__*/React__default["default"].createElement(HandleAccent, {
      d: svg.brushHandleAccentPath()
    })), /*#__PURE__*/React__default["default"].createElement(LabelGroup, {
      transform: "translate(50,0), scale(".concat(flipWestHandle ? "1" : "-1", ", 1)"),
      visible: showLabels || hovering
    }, /*#__PURE__*/React__default["default"].createElement(TooltipBackground, {
      y: "0",
      x: "-30",
      height: "30",
      width: "60",
      rx: "8"
    }), /*#__PURE__*/React__default["default"].createElement(Tooltip, {
      transform: "scale(-1, 1)",
      y: "15",
      dominantBaseline: "middle"
    }, brushLabelValue("w", localBrushExtent[0])))) : null, eastHandleInView ? /*#__PURE__*/React__default["default"].createElement("g", {
      transform: "translate(".concat(xScale(localBrushExtent[1]), ", 0), scale(").concat(flipEastHandle ? "-1" : "1", ", 1)")
    }, /*#__PURE__*/React__default["default"].createElement("g", null, /*#__PURE__*/React__default["default"].createElement(Handle, {
      color: eastHandleColor,
      d: svg.brushHandlePath(innerHeight)
    }), /*#__PURE__*/React__default["default"].createElement(HandleAccent, {
      d: svg.brushHandleAccentPath()
    })), /*#__PURE__*/React__default["default"].createElement(LabelGroup, {
      transform: "translate(50,0), scale(".concat(flipEastHandle ? "-1" : "1", ", 1)"),
      visible: showLabels || hovering
    }, /*#__PURE__*/React__default["default"].createElement(TooltipBackground, {
      y: "0",
      x: "-30",
      height: "30",
      width: "60",
      rx: "8"
    }), /*#__PURE__*/React__default["default"].createElement(Tooltip, {
      y: "15",
      dominantBaseline: "middle"
    }, brushLabelValue("e", localBrushExtent[1])))) : null, showWestArrow && /*#__PURE__*/React__default["default"].createElement(svg.OffScreenHandle, {
      color: westHandleColor
    }), showEastArrow && /*#__PURE__*/React__default["default"].createElement("g", {
      transform: "translate(".concat(innerWidth, ", 0) scale(-1, 1)")
    }, /*#__PURE__*/React__default["default"].createElement(svg.OffScreenHandle, {
      color: eastHandleColor
    }))));
  }, [brushLabelValue, eastHandleColor, eastHandleInView, flipEastHandle, flipWestHandle, hovering, id, innerHeight, innerWidth, localBrushExtent, showEastArrow, showLabels, showWestArrow, westHandleColor, westHandleInView, xScale]);
};

exports.Brush = Brush;
