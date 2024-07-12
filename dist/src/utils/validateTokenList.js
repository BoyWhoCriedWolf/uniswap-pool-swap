import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime/regenerator';

var ValidationSchema = /*#__PURE__*/function (ValidationSchema) {
  ValidationSchema["LIST"] = "list";
  ValidationSchema["TOKENS"] = "tokens";
  return ValidationSchema;
}(ValidationSchema || {});
function getValidationErrors(validate) {
  var _validate$errors$map$, _validate$errors;
  return (_validate$errors$map$ = validate === null || validate === void 0 || (_validate$errors = validate.errors) === null || _validate$errors === void 0 ? void 0 : _validate$errors.map(function (error) {
    return [error.instancePath, error.message].filter(Boolean).join(" ");
  }).join("; ")) !== null && _validate$errors$map$ !== void 0 ? _validate$errors$map$ : "unknown error";
}
function validate(_x, _x2) {
  return _validate.apply(this, arguments);
}
/**
 * Validates an array of tokens.
 * @param json the TokenInfo[] to validate
 */
function _validate() {
  _validate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(schema, data) {
    var validatorImport, _yield$Promise$all, _yield$Promise$all2, validatorModule, validator;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = schema;
          _context.next = _context.t0 === ValidationSchema.LIST ? 3 : _context.t0 === ValidationSchema.TOKENS ? 7 : 11;
          break;
        case 3:
          _context.next = 5;
          return import('./__generated__/validateTokenList.js');
        case 5:
          validatorImport = _context.sent;
          return _context.abrupt("break", 12);
        case 7:
          _context.next = 9;
          return import('./__generated__/validateTokens.js');
        case 9:
          validatorImport = _context.sent;
          return _context.abrupt("break", 12);
        case 11:
          throw new Error("No validation function specified for token list schema");
        case 12:
          _context.next = 14;
          return Promise.all([import('ajv'), validatorImport]);
        case 14:
          _yield$Promise$all = _context.sent;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
          validatorModule = _yield$Promise$all2[1];
          validator = validatorModule["default"];
          if (!(validator !== null && validator !== void 0 && validator(data))) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", data);
        case 20:
          throw new Error(getValidationErrors(validator));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _validate.apply(this, arguments);
}
function validateTokenList(_x4) {
  return _validateTokenList.apply(this, arguments);
}
function _validateTokenList() {
  _validateTokenList = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(json) {
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return validate(ValidationSchema.LIST, json);
        case 3:
          return _context3.abrupt("return", json);
        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          throw new Error("Token list failed validation: ".concat(_context3.t0.message));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _validateTokenList.apply(this, arguments);
}

export { validateTokenList };
