'use strict';

const validate = validate10;
const func2 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[\\w ]+$", "u");
const pattern4 = new RegExp("^[\\w]+$", "u");
const pattern10 = new RegExp("^[ \\w]+$", "u");
const pattern11 = new RegExp("^[ \\w\\.,:]+$", "u");
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];
const formats2 = require("ajv-formats/dist/formats").fullFormats.uri;
const pattern1 = new RegExp("^0x[a-fA-F0-9]{40}$", "u");
const pattern2 = new RegExp("^[ \\S+]+$", "u");
const pattern3 = new RegExp("^\\S+$", "u");
function validate15(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs3 = errors;
  let valid2 = false;
  const _errs4 = errors;
  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        const err0 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (func2(data) < 1) {
          const err1 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid1 = _errs4 === errors;
  valid2 = valid2 || _valid1;
  if (!valid2) {
    const _errs6 = errors;
    if (typeof data !== "boolean") {
      const err3 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
      const _errs8 = errors;
      if (!(typeof data == "number" && isFinite(data))) {
        const err4 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      var _valid1 = _errs8 === errors;
      valid2 = valid2 || _valid1;
      if (!valid2) {
        const _errs10 = errors;
        if (data !== null) {
          const err5 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        var _valid1 = _errs10 === errors;
        valid2 = valid2 || _valid1;
      }
    }
  }
  if (!valid2) {
    const err6 = {
      instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  } else {
    errors = _errs3;
    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const err7 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err7];
    } else {
      vErrors.push(err7);
    }
    errors++;
    validate15.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate15.errors = vErrors;
  return errors === 0;
}
function validate14(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs3 = errors;
  let valid2 = false;
  const _errs4 = errors;
  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        const err0 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (func2(data) < 1) {
          const err1 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid1 = _errs4 === errors;
  valid2 = valid2 || _valid1;
  if (!valid2) {
    const _errs6 = errors;
    if (typeof data !== "boolean") {
      const err3 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
      const _errs8 = errors;
      if (!(typeof data == "number" && isFinite(data))) {
        const err4 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      var _valid1 = _errs8 === errors;
      valid2 = valid2 || _valid1;
      if (!valid2) {
        const _errs10 = errors;
        if (data !== null) {
          const err5 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        var _valid1 = _errs10 === errors;
        valid2 = valid2 || _valid1;
      }
    }
  }
  if (!valid2) {
    const err6 = {
      instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  } else {
    errors = _errs3;
    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    if (errors === _errs12) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 10) {
          const err7 = {
            instancePath,
            schemaPath: "#/anyOf/1/maxProperties",
            keyword: "maxProperties",
            params: {
              limit: 10
            },
            message: "must NOT have more than 10 properties"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        } else {
          for (const key0 in data) {
            const _errs14 = errors;
            const _errs15 = errors;
            if (errors === _errs15) {
              if (typeof key0 === "string") {
                if (func2(key0) > 40) {
                  const err8 = {
                    instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 40
                    },
                    message: "must NOT have more than 40 characters",
                    propertyName: key0
                  };
                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }
                  errors++;
                } else {
                  if (func2(key0) < 1) {
                    const err9 = {
                      instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters",
                      propertyName: key0
                    };
                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }
                    errors++;
                  } else {
                    if (!pattern4.test(key0)) {
                      const err10 = {
                        instancePath,
                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w]+$"
                        },
                        message: "must match pattern \"" + "^[\\w]+$" + "\"",
                        propertyName: key0
                      };
                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }
                      errors++;
                    }
                  }
                }
              } else {
                const err11 = {
                  instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string",
                  propertyName: key0
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            var valid3 = _errs14 === errors;
            if (!valid3) {
              const err12 = {
                instancePath,
                schemaPath: "#/anyOf/1/propertyNames",
                keyword: "propertyNames",
                params: {
                  propertyName: key0
                },
                message: "property name must be valid"
              };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
              break;
            }
          }
          if (valid3) {
            for (const key1 in data) {
              const _errs18 = errors;
              if (!validate15(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData
              })) {
                vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                errors = vErrors.length;
              }
              var valid5 = _errs18 === errors;
              if (!valid5) {
                break;
              }
            }
          }
        }
      } else {
        const err13 = {
          instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err14 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }
    errors++;
    validate14.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate14.errors = vErrors;
  return errors === 0;
}
function validate13(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  const _errs3 = errors;
  let valid2 = false;
  const _errs4 = errors;
  if (errors === _errs4) {
    if (typeof data === "string") {
      if (func2(data) > 42) {
        const err0 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
          keyword: "maxLength",
          params: {
            limit: 42
          },
          message: "must NOT have more than 42 characters"
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        if (func2(data) < 1) {
          const err1 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
            keyword: "minLength",
            params: {
              limit: 1
            },
            message: "must NOT have fewer than 1 characters"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
      }
    } else {
      const err2 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
        keyword: "type",
        params: {
          type: "string"
        },
        message: "must be string"
      };
      if (vErrors === null) {
        vErrors = [err2];
      } else {
        vErrors.push(err2);
      }
      errors++;
    }
  }
  var _valid1 = _errs4 === errors;
  valid2 = valid2 || _valid1;
  if (!valid2) {
    const _errs6 = errors;
    if (typeof data !== "boolean") {
      const err3 = {
        instancePath,
        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
        keyword: "type",
        params: {
          type: "boolean"
        },
        message: "must be boolean"
      };
      if (vErrors === null) {
        vErrors = [err3];
      } else {
        vErrors.push(err3);
      }
      errors++;
    }
    var _valid1 = _errs6 === errors;
    valid2 = valid2 || _valid1;
    if (!valid2) {
      const _errs8 = errors;
      if (!(typeof data == "number" && isFinite(data))) {
        const err4 = {
          instancePath,
          schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
          keyword: "type",
          params: {
            type: "number"
          },
          message: "must be number"
        };
        if (vErrors === null) {
          vErrors = [err4];
        } else {
          vErrors.push(err4);
        }
        errors++;
      }
      var _valid1 = _errs8 === errors;
      valid2 = valid2 || _valid1;
      if (!valid2) {
        const _errs10 = errors;
        if (data !== null) {
          const err5 = {
            instancePath,
            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
            keyword: "type",
            params: {
              type: "null"
            },
            message: "must be null"
          };
          if (vErrors === null) {
            vErrors = [err5];
          } else {
            vErrors.push(err5);
          }
          errors++;
        }
        var _valid1 = _errs10 === errors;
        valid2 = valid2 || _valid1;
      }
    }
  }
  if (!valid2) {
    const err6 = {
      instancePath,
      schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err6];
    } else {
      vErrors.push(err6);
    }
    errors++;
  } else {
    errors = _errs3;
    if (vErrors !== null) {
      if (_errs3) {
        vErrors.length = _errs3;
      } else {
        vErrors = null;
      }
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs12 = errors;
    if (errors === _errs12) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (Object.keys(data).length > 10) {
          const err7 = {
            instancePath,
            schemaPath: "#/anyOf/1/maxProperties",
            keyword: "maxProperties",
            params: {
              limit: 10
            },
            message: "must NOT have more than 10 properties"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        } else {
          for (const key0 in data) {
            const _errs14 = errors;
            const _errs15 = errors;
            if (errors === _errs15) {
              if (typeof key0 === "string") {
                if (func2(key0) > 40) {
                  const err8 = {
                    instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 40
                    },
                    message: "must NOT have more than 40 characters",
                    propertyName: key0
                  };
                  if (vErrors === null) {
                    vErrors = [err8];
                  } else {
                    vErrors.push(err8);
                  }
                  errors++;
                } else {
                  if (func2(key0) < 1) {
                    const err9 = {
                      instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters",
                      propertyName: key0
                    };
                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }
                    errors++;
                  } else {
                    if (!pattern4.test(key0)) {
                      const err10 = {
                        instancePath,
                        schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w]+$"
                        },
                        message: "must match pattern \"" + "^[\\w]+$" + "\"",
                        propertyName: key0
                      };
                      if (vErrors === null) {
                        vErrors = [err10];
                      } else {
                        vErrors.push(err10);
                      }
                      errors++;
                    }
                  }
                }
              } else {
                const err11 = {
                  instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string",
                  propertyName: key0
                };
                if (vErrors === null) {
                  vErrors = [err11];
                } else {
                  vErrors.push(err11);
                }
                errors++;
              }
            }
            var valid3 = _errs14 === errors;
            if (!valid3) {
              const err12 = {
                instancePath,
                schemaPath: "#/anyOf/1/propertyNames",
                keyword: "propertyNames",
                params: {
                  propertyName: key0
                },
                message: "property name must be valid"
              };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
              break;
            }
          }
          if (valid3) {
            for (const key1 in data) {
              const _errs18 = errors;
              if (!validate14(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData
              })) {
                vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
                errors = vErrors.length;
              }
              var valid5 = _errs18 === errors;
              if (!valid5) {
                break;
              }
            }
          }
        }
      } else {
        const err13 = {
          instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: {
            type: "object"
          },
          message: "must be object"
        };
        if (vErrors === null) {
          vErrors = [err13];
        } else {
          vErrors.push(err13);
        }
        errors++;
      }
    }
    var _valid0 = _errs12 === errors;
    valid0 = valid0 || _valid0;
  }
  if (!valid0) {
    const err14 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf"
    };
    if (vErrors === null) {
      vErrors = [err14];
    } else {
      vErrors.push(err14);
    }
    errors++;
    validate13.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate13.errors = vErrors;
  return errors === 0;
}
function validate12(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      if (Object.keys(data).length > 10) {
        validate12.errors = [{
          instancePath,
          schemaPath: "#/maxProperties",
          keyword: "maxProperties",
          params: {
            limit: 10
          },
          message: "must NOT have more than 10 properties"
        }];
        return false;
      } else {
        for (const key0 in data) {
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs2) {
            if (typeof key0 === "string") {
              if (func2(key0) > 40) {
                const err0 = {
                  instancePath,
                  schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                  keyword: "maxLength",
                  params: {
                    limit: 40
                  },
                  message: "must NOT have more than 40 characters",
                  propertyName: key0
                };
                if (vErrors === null) {
                  vErrors = [err0];
                } else {
                  vErrors.push(err0);
                }
                errors++;
              } else {
                if (func2(key0) < 1) {
                  const err1 = {
                    instancePath,
                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                    keyword: "minLength",
                    params: {
                      limit: 1
                    },
                    message: "must NOT have fewer than 1 characters",
                    propertyName: key0
                  };
                  if (vErrors === null) {
                    vErrors = [err1];
                  } else {
                    vErrors.push(err1);
                  }
                  errors++;
                } else {
                  if (!pattern4.test(key0)) {
                    const err2 = {
                      instancePath,
                      schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^[\\w]+$"
                      },
                      message: "must match pattern \"" + "^[\\w]+$" + "\"",
                      propertyName: key0
                    };
                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }
                    errors++;
                  }
                }
              }
            } else {
              const err3 = {
                instancePath,
                schemaPath: "#/definitions/ExtensionIdentifier/type",
                keyword: "type",
                params: {
                  type: "string"
                },
                message: "must be string",
                propertyName: key0
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
          }
          var valid0 = _errs1 === errors;
          if (!valid0) {
            const err4 = {
              instancePath,
              schemaPath: "#/propertyNames",
              keyword: "propertyNames",
              params: {
                propertyName: key0
              },
              message: "property name must be valid"
            };
            if (vErrors === null) {
              vErrors = [err4];
            } else {
              vErrors.push(err4);
            }
            errors++;
            validate12.errors = vErrors;
            return false;
          }
        }
        if (valid0) {
          for (const key1 in data) {
            const _errs5 = errors;
            if (!validate13(data[key1], {
              instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
              parentData: data,
              parentDataProperty: key1,
              rootData
            })) {
              vErrors = vErrors === null ? validate13.errors : vErrors.concat(validate13.errors);
              errors = vErrors.length;
            }
            var valid2 = _errs5 === errors;
            if (!valid2) {
              break;
            }
          }
        }
      }
    } else {
      validate12.errors = [{
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }
  validate12.errors = vErrors;
  return errors === 0;
}
function validate11(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.chainId === undefined && (missing0 = "chainId") || data.address === undefined && (missing0 = "address") || data.decimals === undefined && (missing0 = "decimals") || data.name === undefined && (missing0 = "name") || data.symbol === undefined && (missing0 = "symbol")) {
        validate11.errors = [{
          instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: missing0
          },
          message: "must have required property '" + missing0 + "'"
        }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "chainId" || key0 === "address" || key0 === "decimals" || key0 === "name" || key0 === "symbol" || key0 === "logoURI" || key0 === "tags" || key0 === "extensions")) {
            validate11.errors = [{
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            }];
            return false;
          }
        }
        if (_errs1 === errors) {
          if (data.chainId !== undefined) {
            let data0 = data.chainId;
            const _errs2 = errors;
            if (!(typeof data0 == "number" && !(data0 % 1) && !isNaN(data0) && isFinite(data0))) {
              validate11.errors = [{
                instancePath: instancePath + "/chainId",
                schemaPath: "#/properties/chainId/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              }];
              return false;
            }
            if (errors === _errs2) {
              if (typeof data0 == "number" && isFinite(data0)) {
                if (data0 < 1 || isNaN(data0)) {
                  validate11.errors = [{
                    instancePath: instancePath + "/chainId",
                    schemaPath: "#/properties/chainId/minimum",
                    keyword: "minimum",
                    params: {
                      comparison: ">=",
                      limit: 1
                    },
                    message: "must be >= 1"
                  }];
                  return false;
                }
              }
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.address !== undefined) {
              let data1 = data.address;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (typeof data1 === "string") {
                  if (!pattern1.test(data1)) {
                    validate11.errors = [{
                      instancePath: instancePath + "/address",
                      schemaPath: "#/properties/address/pattern",
                      keyword: "pattern",
                      params: {
                        pattern: "^0x[a-fA-F0-9]{40}$"
                      },
                      message: "must match pattern \"" + "^0x[a-fA-F0-9]{40}$" + "\""
                    }];
                    return false;
                  }
                } else {
                  validate11.errors = [{
                    instancePath: instancePath + "/address",
                    schemaPath: "#/properties/address/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  }];
                  return false;
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.decimals !== undefined) {
                let data2 = data.decimals;
                const _errs6 = errors;
                if (!(typeof data2 == "number" && !(data2 % 1) && !isNaN(data2) && isFinite(data2))) {
                  validate11.errors = [{
                    instancePath: instancePath + "/decimals",
                    schemaPath: "#/properties/decimals/type",
                    keyword: "type",
                    params: {
                      type: "integer"
                    },
                    message: "must be integer"
                  }];
                  return false;
                }
                if (errors === _errs6) {
                  if (typeof data2 == "number" && isFinite(data2)) {
                    if (data2 > 255 || isNaN(data2)) {
                      validate11.errors = [{
                        instancePath: instancePath + "/decimals",
                        schemaPath: "#/properties/decimals/maximum",
                        keyword: "maximum",
                        params: {
                          comparison: "<=",
                          limit: 255
                        },
                        message: "must be <= 255"
                      }];
                      return false;
                    } else {
                      if (data2 < 0 || isNaN(data2)) {
                        validate11.errors = [{
                          instancePath: instancePath + "/decimals",
                          schemaPath: "#/properties/decimals/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        }];
                        return false;
                      }
                    }
                  }
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.name !== undefined) {
                  let data3 = data.name;
                  const _errs8 = errors;
                  const _errs10 = errors;
                  let valid1 = false;
                  const _errs11 = errors;
                  if ("" !== data3) {
                    const err0 = {
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/anyOf/0/const",
                      keyword: "const",
                      params: {
                        allowedValue: ""
                      },
                      message: "must be equal to constant"
                    };
                    if (vErrors === null) {
                      vErrors = [err0];
                    } else {
                      vErrors.push(err0);
                    }
                    errors++;
                  }
                  var _valid0 = _errs11 === errors;
                  valid1 = valid1 || _valid0;
                  if (!valid1) {
                    const _errs12 = errors;
                    if (typeof data3 === "string") {
                      if (!pattern2.test(data3)) {
                        const err1 = {
                          instancePath: instancePath + "/name",
                          schemaPath: "#/properties/name/anyOf/1/pattern",
                          keyword: "pattern",
                          params: {
                            pattern: "^[ \\S+]+$"
                          },
                          message: "must match pattern \"" + "^[ \\S+]+$" + "\""
                        };
                        if (vErrors === null) {
                          vErrors = [err1];
                        } else {
                          vErrors.push(err1);
                        }
                        errors++;
                      }
                    }
                    var _valid0 = _errs12 === errors;
                    valid1 = valid1 || _valid0;
                  }
                  if (!valid1) {
                    const err2 = {
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/anyOf",
                      keyword: "anyOf",
                      params: {},
                      message: "must match a schema in anyOf"
                    };
                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }
                    errors++;
                    validate11.errors = vErrors;
                    return false;
                  } else {
                    errors = _errs10;
                    if (vErrors !== null) {
                      if (_errs10) {
                        vErrors.length = _errs10;
                      } else {
                        vErrors = null;
                      }
                    }
                  }
                  if (errors === _errs8) {
                    if (typeof data3 === "string") {
                      if (func2(data3) > 40) {
                        validate11.errors = [{
                          instancePath: instancePath + "/name",
                          schemaPath: "#/properties/name/maxLength",
                          keyword: "maxLength",
                          params: {
                            limit: 40
                          },
                          message: "must NOT have more than 40 characters"
                        }];
                        return false;
                      } else {
                        if (func2(data3) < 0) {
                          validate11.errors = [{
                            instancePath: instancePath + "/name",
                            schemaPath: "#/properties/name/minLength",
                            keyword: "minLength",
                            params: {
                              limit: 0
                            },
                            message: "must NOT have fewer than 0 characters"
                          }];
                          return false;
                        }
                      }
                    } else {
                      validate11.errors = [{
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/type",
                        keyword: "type",
                        params: {
                          type: "string"
                        },
                        message: "must be string"
                      }];
                      return false;
                    }
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.symbol !== undefined) {
                    let data4 = data.symbol;
                    const _errs13 = errors;
                    const _errs15 = errors;
                    let valid2 = false;
                    const _errs16 = errors;
                    if ("" !== data4) {
                      const err3 = {
                        instancePath: instancePath + "/symbol",
                        schemaPath: "#/properties/symbol/anyOf/0/const",
                        keyword: "const",
                        params: {
                          allowedValue: ""
                        },
                        message: "must be equal to constant"
                      };
                      if (vErrors === null) {
                        vErrors = [err3];
                      } else {
                        vErrors.push(err3);
                      }
                      errors++;
                    }
                    var _valid1 = _errs16 === errors;
                    valid2 = valid2 || _valid1;
                    if (!valid2) {
                      const _errs17 = errors;
                      if (typeof data4 === "string") {
                        if (!pattern3.test(data4)) {
                          const err4 = {
                            instancePath: instancePath + "/symbol",
                            schemaPath: "#/properties/symbol/anyOf/1/pattern",
                            keyword: "pattern",
                            params: {
                              pattern: "^\\S+$"
                            },
                            message: "must match pattern \"" + "^\\S+$" + "\""
                          };
                          if (vErrors === null) {
                            vErrors = [err4];
                          } else {
                            vErrors.push(err4);
                          }
                          errors++;
                        }
                      }
                      var _valid1 = _errs17 === errors;
                      valid2 = valid2 || _valid1;
                    }
                    if (!valid2) {
                      const err5 = {
                        instancePath: instancePath + "/symbol",
                        schemaPath: "#/properties/symbol/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                      };
                      if (vErrors === null) {
                        vErrors = [err5];
                      } else {
                        vErrors.push(err5);
                      }
                      errors++;
                      validate11.errors = vErrors;
                      return false;
                    } else {
                      errors = _errs15;
                      if (vErrors !== null) {
                        if (_errs15) {
                          vErrors.length = _errs15;
                        } else {
                          vErrors = null;
                        }
                      }
                    }
                    if (errors === _errs13) {
                      if (typeof data4 === "string") {
                        if (func2(data4) > 20) {
                          validate11.errors = [{
                            instancePath: instancePath + "/symbol",
                            schemaPath: "#/properties/symbol/maxLength",
                            keyword: "maxLength",
                            params: {
                              limit: 20
                            },
                            message: "must NOT have more than 20 characters"
                          }];
                          return false;
                        } else {
                          if (func2(data4) < 0) {
                            validate11.errors = [{
                              instancePath: instancePath + "/symbol",
                              schemaPath: "#/properties/symbol/minLength",
                              keyword: "minLength",
                              params: {
                                limit: 0
                              },
                              message: "must NOT have fewer than 0 characters"
                            }];
                            return false;
                          }
                        }
                      } else {
                        validate11.errors = [{
                          instancePath: instancePath + "/symbol",
                          schemaPath: "#/properties/symbol/type",
                          keyword: "type",
                          params: {
                            type: "string"
                          },
                          message: "must be string"
                        }];
                        return false;
                      }
                    }
                    var valid0 = _errs13 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.logoURI !== undefined) {
                      let data5 = data.logoURI;
                      const _errs18 = errors;
                      if (errors === _errs18) {
                        if (errors === _errs18) {
                          if (typeof data5 === "string") {
                            if (!formats2(data5)) {
                              validate11.errors = [{
                                instancePath: instancePath + "/logoURI",
                                schemaPath: "#/properties/logoURI/format",
                                keyword: "format",
                                params: {
                                  format: "uri"
                                },
                                message: "must match format \"" + "uri" + "\""
                              }];
                              return false;
                            }
                          } else {
                            validate11.errors = [{
                              instancePath: instancePath + "/logoURI",
                              schemaPath: "#/properties/logoURI/type",
                              keyword: "type",
                              params: {
                                type: "string"
                              },
                              message: "must be string"
                            }];
                            return false;
                          }
                        }
                      }
                      var valid0 = _errs18 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.tags !== undefined) {
                        let data6 = data.tags;
                        const _errs20 = errors;
                        if (errors === _errs20) {
                          if (Array.isArray(data6)) {
                            if (data6.length > 10) {
                              validate11.errors = [{
                                instancePath: instancePath + "/tags",
                                schemaPath: "#/properties/tags/maxItems",
                                keyword: "maxItems",
                                params: {
                                  limit: 10
                                },
                                message: "must NOT have more than 10 items"
                              }];
                              return false;
                            } else {
                              var valid3 = true;
                              const len0 = data6.length;
                              for (let i0 = 0; i0 < len0; i0++) {
                                let data7 = data6[i0];
                                const _errs22 = errors;
                                const _errs23 = errors;
                                if (errors === _errs23) {
                                  if (typeof data7 === "string") {
                                    if (func2(data7) > 10) {
                                      validate11.errors = [{
                                        instancePath: instancePath + "/tags/" + i0,
                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                          limit: 10
                                        },
                                        message: "must NOT have more than 10 characters"
                                      }];
                                      return false;
                                    } else {
                                      if (func2(data7) < 1) {
                                        validate11.errors = [{
                                          instancePath: instancePath + "/tags/" + i0,
                                          schemaPath: "#/definitions/TagIdentifier/minLength",
                                          keyword: "minLength",
                                          params: {
                                            limit: 1
                                          },
                                          message: "must NOT have fewer than 1 characters"
                                        }];
                                        return false;
                                      } else {
                                        if (!pattern4.test(data7)) {
                                          validate11.errors = [{
                                            instancePath: instancePath + "/tags/" + i0,
                                            schemaPath: "#/definitions/TagIdentifier/pattern",
                                            keyword: "pattern",
                                            params: {
                                              pattern: "^[\\w]+$"
                                            },
                                            message: "must match pattern \"" + "^[\\w]+$" + "\""
                                          }];
                                          return false;
                                        }
                                      }
                                    }
                                  } else {
                                    validate11.errors = [{
                                      instancePath: instancePath + "/tags/" + i0,
                                      schemaPath: "#/definitions/TagIdentifier/type",
                                      keyword: "type",
                                      params: {
                                        type: "string"
                                      },
                                      message: "must be string"
                                    }];
                                    return false;
                                  }
                                }
                                var valid3 = _errs22 === errors;
                                if (!valid3) {
                                  break;
                                }
                              }
                            }
                          } else {
                            validate11.errors = [{
                              instancePath: instancePath + "/tags",
                              schemaPath: "#/properties/tags/type",
                              keyword: "type",
                              params: {
                                type: "array"
                              },
                              message: "must be array"
                            }];
                            return false;
                          }
                        }
                        var valid0 = _errs20 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.extensions !== undefined) {
                          const _errs25 = errors;
                          if (!validate12(data.extensions, {
                            instancePath: instancePath + "/extensions",
                            parentData: data,
                            parentDataProperty: "extensions",
                            rootData
                          })) {
                            vErrors = vErrors === null ? validate12.errors : vErrors.concat(validate12.errors);
                            errors = vErrors.length;
                          }
                          var valid0 = _errs25 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate11.errors = [{
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }
  validate11.errors = vErrors;
  return errors === 0;
}
function validate10(data) {
  let {
    instancePath = "",
    parentData,
    parentDataProperty,
    rootData = data
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.name === undefined && (missing0 = "name") || data.timestamp === undefined && (missing0 = "timestamp") || data.version === undefined && (missing0 = "version") || data.tokens === undefined && (missing0 = "tokens")) {
        validate10.errors = [{
          instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: {
            missingProperty: missing0
          },
          message: "must have required property '" + missing0 + "'"
        }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "name" || key0 === "timestamp" || key0 === "version" || key0 === "tokens" || key0 === "tokenMap" || key0 === "keywords" || key0 === "tags" || key0 === "logoURI")) {
            validate10.errors = [{
              instancePath,
              schemaPath: "#/additionalProperties",
              keyword: "additionalProperties",
              params: {
                additionalProperty: key0
              },
              message: "must NOT have additional properties"
            }];
            return false;
          }
        }
        if (_errs1 === errors) {
          if (data.name !== undefined) {
            let data0 = data.name;
            const _errs2 = errors;
            if (errors === _errs2) {
              if (typeof data0 === "string") {
                if (func2(data0) > 30) {
                  validate10.errors = [{
                    instancePath: instancePath + "/name",
                    schemaPath: "#/properties/name/maxLength",
                    keyword: "maxLength",
                    params: {
                      limit: 30
                    },
                    message: "must NOT have more than 30 characters"
                  }];
                  return false;
                } else {
                  if (func2(data0) < 1) {
                    validate10.errors = [{
                      instancePath: instancePath + "/name",
                      schemaPath: "#/properties/name/minLength",
                      keyword: "minLength",
                      params: {
                        limit: 1
                      },
                      message: "must NOT have fewer than 1 characters"
                    }];
                    return false;
                  } else {
                    if (!pattern0.test(data0)) {
                      validate10.errors = [{
                        instancePath: instancePath + "/name",
                        schemaPath: "#/properties/name/pattern",
                        keyword: "pattern",
                        params: {
                          pattern: "^[\\w ]+$"
                        },
                        message: "must match pattern \"" + "^[\\w ]+$" + "\""
                      }];
                      return false;
                    }
                  }
                }
              } else {
                validate10.errors = [{
                  instancePath: instancePath + "/name",
                  schemaPath: "#/properties/name/type",
                  keyword: "type",
                  params: {
                    type: "string"
                  },
                  message: "must be string"
                }];
                return false;
              }
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.timestamp !== undefined) {
              let data1 = data.timestamp;
              const _errs4 = errors;
              if (errors === _errs4) {
                if (errors === _errs4) {
                  if (typeof data1 === "string") {
                    if (!formats0.validate(data1)) {
                      validate10.errors = [{
                        instancePath: instancePath + "/timestamp",
                        schemaPath: "#/properties/timestamp/format",
                        keyword: "format",
                        params: {
                          format: "date-time"
                        },
                        message: "must match format \"" + "date-time" + "\""
                      }];
                      return false;
                    }
                  } else {
                    validate10.errors = [{
                      instancePath: instancePath + "/timestamp",
                      schemaPath: "#/properties/timestamp/type",
                      keyword: "type",
                      params: {
                        type: "string"
                      },
                      message: "must be string"
                    }];
                    return false;
                  }
                }
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.version !== undefined) {
                let data2 = data.version;
                const _errs6 = errors;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                    let missing1;
                    if (data2.major === undefined && (missing1 = "major") || data2.minor === undefined && (missing1 = "minor") || data2.patch === undefined && (missing1 = "patch")) {
                      validate10.errors = [{
                        instancePath: instancePath + "/version",
                        schemaPath: "#/definitions/Version/required",
                        keyword: "required",
                        params: {
                          missingProperty: missing1
                        },
                        message: "must have required property '" + missing1 + "'"
                      }];
                      return false;
                    } else {
                      const _errs9 = errors;
                      for (const key1 in data2) {
                        if (!(key1 === "major" || key1 === "minor" || key1 === "patch")) {
                          validate10.errors = [{
                            instancePath: instancePath + "/version",
                            schemaPath: "#/definitions/Version/additionalProperties",
                            keyword: "additionalProperties",
                            params: {
                              additionalProperty: key1
                            },
                            message: "must NOT have additional properties"
                          }];
                          return false;
                        }
                      }
                      if (_errs9 === errors) {
                        if (data2.major !== undefined) {
                          let data3 = data2.major;
                          const _errs10 = errors;
                          if (!(typeof data3 == "number" && !(data3 % 1) && !isNaN(data3) && isFinite(data3))) {
                            validate10.errors = [{
                              instancePath: instancePath + "/version/major",
                              schemaPath: "#/definitions/Version/properties/major/type",
                              keyword: "type",
                              params: {
                                type: "integer"
                              },
                              message: "must be integer"
                            }];
                            return false;
                          }
                          if (errors === _errs10) {
                            if (typeof data3 == "number" && isFinite(data3)) {
                              if (data3 < 0 || isNaN(data3)) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/version/major",
                                  schemaPath: "#/definitions/Version/properties/major/minimum",
                                  keyword: "minimum",
                                  params: {
                                    comparison: ">=",
                                    limit: 0
                                  },
                                  message: "must be >= 0"
                                }];
                                return false;
                              }
                            }
                          }
                          var valid2 = _errs10 === errors;
                        } else {
                          var valid2 = true;
                        }
                        if (valid2) {
                          if (data2.minor !== undefined) {
                            let data4 = data2.minor;
                            const _errs12 = errors;
                            if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4) && isFinite(data4))) {
                              validate10.errors = [{
                                instancePath: instancePath + "/version/minor",
                                schemaPath: "#/definitions/Version/properties/minor/type",
                                keyword: "type",
                                params: {
                                  type: "integer"
                                },
                                message: "must be integer"
                              }];
                              return false;
                            }
                            if (errors === _errs12) {
                              if (typeof data4 == "number" && isFinite(data4)) {
                                if (data4 < 0 || isNaN(data4)) {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/version/minor",
                                    schemaPath: "#/definitions/Version/properties/minor/minimum",
                                    keyword: "minimum",
                                    params: {
                                      comparison: ">=",
                                      limit: 0
                                    },
                                    message: "must be >= 0"
                                  }];
                                  return false;
                                }
                              }
                            }
                            var valid2 = _errs12 === errors;
                          } else {
                            var valid2 = true;
                          }
                          if (valid2) {
                            if (data2.patch !== undefined) {
                              let data5 = data2.patch;
                              const _errs14 = errors;
                              if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                                validate10.errors = [{
                                  instancePath: instancePath + "/version/patch",
                                  schemaPath: "#/definitions/Version/properties/patch/type",
                                  keyword: "type",
                                  params: {
                                    type: "integer"
                                  },
                                  message: "must be integer"
                                }];
                                return false;
                              }
                              if (errors === _errs14) {
                                if (typeof data5 == "number" && isFinite(data5)) {
                                  if (data5 < 0 || isNaN(data5)) {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/version/patch",
                                      schemaPath: "#/definitions/Version/properties/patch/minimum",
                                      keyword: "minimum",
                                      params: {
                                        comparison: ">=",
                                        limit: 0
                                      },
                                      message: "must be >= 0"
                                    }];
                                    return false;
                                  }
                                }
                              }
                              var valid2 = _errs14 === errors;
                            } else {
                              var valid2 = true;
                            }
                          }
                        }
                      }
                    }
                  } else {
                    validate10.errors = [{
                      instancePath: instancePath + "/version",
                      schemaPath: "#/definitions/Version/type",
                      keyword: "type",
                      params: {
                        type: "object"
                      },
                      message: "must be object"
                    }];
                    return false;
                  }
                }
                var valid0 = _errs6 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.tokens !== undefined) {
                  let data6 = data.tokens;
                  const _errs16 = errors;
                  if (errors === _errs16) {
                    if (Array.isArray(data6)) {
                      if (data6.length > 10000) {
                        validate10.errors = [{
                          instancePath: instancePath + "/tokens",
                          schemaPath: "#/properties/tokens/maxItems",
                          keyword: "maxItems",
                          params: {
                            limit: 10000
                          },
                          message: "must NOT have more than 10000 items"
                        }];
                        return false;
                      } else {
                        if (data6.length < 1) {
                          validate10.errors = [{
                            instancePath: instancePath + "/tokens",
                            schemaPath: "#/properties/tokens/minItems",
                            keyword: "minItems",
                            params: {
                              limit: 1
                            },
                            message: "must NOT have fewer than 1 items"
                          }];
                          return false;
                        } else {
                          var valid3 = true;
                          const len0 = data6.length;
                          for (let i0 = 0; i0 < len0; i0++) {
                            const _errs18 = errors;
                            if (!validate11(data6[i0], {
                              instancePath: instancePath + "/tokens/" + i0,
                              parentData: data6,
                              parentDataProperty: i0,
                              rootData
                            })) {
                              vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
                              errors = vErrors.length;
                            }
                            var valid3 = _errs18 === errors;
                            if (!valid3) {
                              break;
                            }
                          }
                        }
                      }
                    } else {
                      validate10.errors = [{
                        instancePath: instancePath + "/tokens",
                        schemaPath: "#/properties/tokens/type",
                        keyword: "type",
                        params: {
                          type: "array"
                        },
                        message: "must be array"
                      }];
                      return false;
                    }
                  }
                  var valid0 = _errs16 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.tokenMap !== undefined) {
                    let data8 = data.tokenMap;
                    const _errs19 = errors;
                    if (errors === _errs19) {
                      if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                        if (Object.keys(data8).length > 10000) {
                          validate10.errors = [{
                            instancePath: instancePath + "/tokenMap",
                            schemaPath: "#/properties/tokenMap/maxProperties",
                            keyword: "maxProperties",
                            params: {
                              limit: 10000
                            },
                            message: "must NOT have more than 10000 properties"
                          }];
                          return false;
                        } else {
                          if (Object.keys(data8).length < 1) {
                            validate10.errors = [{
                              instancePath: instancePath + "/tokenMap",
                              schemaPath: "#/properties/tokenMap/minProperties",
                              keyword: "minProperties",
                              params: {
                                limit: 1
                              },
                              message: "must NOT have fewer than 1 properties"
                            }];
                            return false;
                          } else {
                            for (const key2 in data8) {
                              const _errs21 = errors;
                              if (typeof key2 !== "string") {
                                const err0 = {
                                  instancePath: instancePath + "/tokenMap",
                                  schemaPath: "#/properties/tokenMap/propertyNames/type",
                                  keyword: "type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "must be string",
                                  propertyName: key2
                                };
                                if (vErrors === null) {
                                  vErrors = [err0];
                                } else {
                                  vErrors.push(err0);
                                }
                                errors++;
                              }
                              var valid4 = _errs21 === errors;
                              if (!valid4) {
                                const err1 = {
                                  instancePath: instancePath + "/tokenMap",
                                  schemaPath: "#/properties/tokenMap/propertyNames",
                                  keyword: "propertyNames",
                                  params: {
                                    propertyName: key2
                                  },
                                  message: "property name must be valid"
                                };
                                if (vErrors === null) {
                                  vErrors = [err1];
                                } else {
                                  vErrors.push(err1);
                                }
                                errors++;
                                validate10.errors = vErrors;
                                return false;
                              }
                            }
                            if (valid4) {
                              for (const key3 in data8) {
                                const _errs24 = errors;
                                if (!validate11(data8[key3], {
                                  instancePath: instancePath + "/tokenMap/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"),
                                  parentData: data8,
                                  parentDataProperty: key3,
                                  rootData
                                })) {
                                  vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors);
                                  errors = vErrors.length;
                                }
                                var valid5 = _errs24 === errors;
                                if (!valid5) {
                                  break;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        validate10.errors = [{
                          instancePath: instancePath + "/tokenMap",
                          schemaPath: "#/properties/tokenMap/type",
                          keyword: "type",
                          params: {
                            type: "object"
                          },
                          message: "must be object"
                        }];
                        return false;
                      }
                    }
                    var valid0 = _errs19 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.keywords !== undefined) {
                      let data10 = data.keywords;
                      const _errs25 = errors;
                      if (errors === _errs25) {
                        if (Array.isArray(data10)) {
                          if (data10.length > 20) {
                            validate10.errors = [{
                              instancePath: instancePath + "/keywords",
                              schemaPath: "#/properties/keywords/maxItems",
                              keyword: "maxItems",
                              params: {
                                limit: 20
                              },
                              message: "must NOT have more than 20 items"
                            }];
                            return false;
                          } else {
                            var valid6 = true;
                            const len1 = data10.length;
                            for (let i1 = 0; i1 < len1; i1++) {
                              let data11 = data10[i1];
                              const _errs27 = errors;
                              if (errors === _errs27) {
                                if (typeof data11 === "string") {
                                  if (func2(data11) > 20) {
                                    validate10.errors = [{
                                      instancePath: instancePath + "/keywords/" + i1,
                                      schemaPath: "#/properties/keywords/items/maxLength",
                                      keyword: "maxLength",
                                      params: {
                                        limit: 20
                                      },
                                      message: "must NOT have more than 20 characters"
                                    }];
                                    return false;
                                  } else {
                                    if (func2(data11) < 1) {
                                      validate10.errors = [{
                                        instancePath: instancePath + "/keywords/" + i1,
                                        schemaPath: "#/properties/keywords/items/minLength",
                                        keyword: "minLength",
                                        params: {
                                          limit: 1
                                        },
                                        message: "must NOT have fewer than 1 characters"
                                      }];
                                      return false;
                                    } else {
                                      if (!pattern0.test(data11)) {
                                        validate10.errors = [{
                                          instancePath: instancePath + "/keywords/" + i1,
                                          schemaPath: "#/properties/keywords/items/pattern",
                                          keyword: "pattern",
                                          params: {
                                            pattern: "^[\\w ]+$"
                                          },
                                          message: "must match pattern \"" + "^[\\w ]+$" + "\""
                                        }];
                                        return false;
                                      }
                                    }
                                  }
                                } else {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/keywords/" + i1,
                                    schemaPath: "#/properties/keywords/items/type",
                                    keyword: "type",
                                    params: {
                                      type: "string"
                                    },
                                    message: "must be string"
                                  }];
                                  return false;
                                }
                              }
                              var valid6 = _errs27 === errors;
                              if (!valid6) {
                                break;
                              }
                            }
                            if (valid6) {
                              let i2 = data10.length;
                              let j0;
                              if (i2 > 1) {
                                const indices0 = {};
                                for (; i2--;) {
                                  let item0 = data10[i2];
                                  if (typeof item0 !== "string") {
                                    continue;
                                  }
                                  if (typeof indices0[item0] == "number") {
                                    j0 = indices0[item0];
                                    validate10.errors = [{
                                      instancePath: instancePath + "/keywords",
                                      schemaPath: "#/properties/keywords/uniqueItems",
                                      keyword: "uniqueItems",
                                      params: {
                                        i: i2,
                                        j: j0
                                      },
                                      message: "must NOT have duplicate items (items ## " + j0 + " and " + i2 + " are identical)"
                                    }];
                                    return false;
                                  }
                                  indices0[item0] = i2;
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [{
                            instancePath: instancePath + "/keywords",
                            schemaPath: "#/properties/keywords/type",
                            keyword: "type",
                            params: {
                              type: "array"
                            },
                            message: "must be array"
                          }];
                          return false;
                        }
                      }
                      var valid0 = _errs25 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.tags !== undefined) {
                        let data12 = data.tags;
                        const _errs29 = errors;
                        if (errors === _errs29) {
                          if (data12 && typeof data12 == "object" && !Array.isArray(data12)) {
                            if (Object.keys(data12).length > 20) {
                              validate10.errors = [{
                                instancePath: instancePath + "/tags",
                                schemaPath: "#/properties/tags/maxProperties",
                                keyword: "maxProperties",
                                params: {
                                  limit: 20
                                },
                                message: "must NOT have more than 20 properties"
                              }];
                              return false;
                            } else {
                              for (const key4 in data12) {
                                const _errs31 = errors;
                                const _errs32 = errors;
                                if (errors === _errs32) {
                                  if (typeof key4 === "string") {
                                    if (func2(key4) > 10) {
                                      const err2 = {
                                        instancePath: instancePath + "/tags",
                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                        keyword: "maxLength",
                                        params: {
                                          limit: 10
                                        },
                                        message: "must NOT have more than 10 characters",
                                        propertyName: key4
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err2];
                                      } else {
                                        vErrors.push(err2);
                                      }
                                      errors++;
                                    } else {
                                      if (func2(key4) < 1) {
                                        const err3 = {
                                          instancePath: instancePath + "/tags",
                                          schemaPath: "#/definitions/TagIdentifier/minLength",
                                          keyword: "minLength",
                                          params: {
                                            limit: 1
                                          },
                                          message: "must NOT have fewer than 1 characters",
                                          propertyName: key4
                                        };
                                        if (vErrors === null) {
                                          vErrors = [err3];
                                        } else {
                                          vErrors.push(err3);
                                        }
                                        errors++;
                                      } else {
                                        if (!pattern4.test(key4)) {
                                          const err4 = {
                                            instancePath: instancePath + "/tags",
                                            schemaPath: "#/definitions/TagIdentifier/pattern",
                                            keyword: "pattern",
                                            params: {
                                              pattern: "^[\\w]+$"
                                            },
                                            message: "must match pattern \"" + "^[\\w]+$" + "\"",
                                            propertyName: key4
                                          };
                                          if (vErrors === null) {
                                            vErrors = [err4];
                                          } else {
                                            vErrors.push(err4);
                                          }
                                          errors++;
                                        }
                                      }
                                    }
                                  } else {
                                    const err5 = {
                                      instancePath: instancePath + "/tags",
                                      schemaPath: "#/definitions/TagIdentifier/type",
                                      keyword: "type",
                                      params: {
                                        type: "string"
                                      },
                                      message: "must be string",
                                      propertyName: key4
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err5];
                                    } else {
                                      vErrors.push(err5);
                                    }
                                    errors++;
                                  }
                                }
                                var valid8 = _errs31 === errors;
                                if (!valid8) {
                                  const err6 = {
                                    instancePath: instancePath + "/tags",
                                    schemaPath: "#/properties/tags/propertyNames",
                                    keyword: "propertyNames",
                                    params: {
                                      propertyName: key4
                                    },
                                    message: "property name must be valid"
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err6];
                                  } else {
                                    vErrors.push(err6);
                                  }
                                  errors++;
                                  validate10.errors = vErrors;
                                  return false;
                                }
                              }
                              if (valid8) {
                                for (const key5 in data12) {
                                  let data13 = data12[key5];
                                  const _errs35 = errors;
                                  const _errs36 = errors;
                                  if (errors === _errs36) {
                                    if (data13 && typeof data13 == "object" && !Array.isArray(data13)) {
                                      let missing2;
                                      if (data13.name === undefined && (missing2 = "name") || data13.description === undefined && (missing2 = "description")) {
                                        validate10.errors = [{
                                          instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1"),
                                          schemaPath: "#/definitions/TagDefinition/required",
                                          keyword: "required",
                                          params: {
                                            missingProperty: missing2
                                          },
                                          message: "must have required property '" + missing2 + "'"
                                        }];
                                        return false;
                                      } else {
                                        const _errs38 = errors;
                                        for (const key6 in data13) {
                                          if (!(key6 === "name" || key6 === "description")) {
                                            validate10.errors = [{
                                              instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1"),
                                              schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                              keyword: "additionalProperties",
                                              params: {
                                                additionalProperty: key6
                                              },
                                              message: "must NOT have additional properties"
                                            }];
                                            return false;
                                          }
                                        }
                                        if (_errs38 === errors) {
                                          if (data13.name !== undefined) {
                                            let data14 = data13.name;
                                            const _errs39 = errors;
                                            if (errors === _errs39) {
                                              if (typeof data14 === "string") {
                                                if (func2(data14) > 20) {
                                                  validate10.errors = [{
                                                    instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                    schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                      limit: 20
                                                    },
                                                    message: "must NOT have more than 20 characters"
                                                  }];
                                                  return false;
                                                } else {
                                                  if (func2(data14) < 1) {
                                                    validate10.errors = [{
                                                      instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                      schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                      keyword: "minLength",
                                                      params: {
                                                        limit: 1
                                                      },
                                                      message: "must NOT have fewer than 1 characters"
                                                    }];
                                                    return false;
                                                  } else {
                                                    if (!pattern10.test(data14)) {
                                                      validate10.errors = [{
                                                        instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                        schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                        keyword: "pattern",
                                                        params: {
                                                          pattern: "^[ \\w]+$"
                                                        },
                                                        message: "must match pattern \"" + "^[ \\w]+$" + "\""
                                                      }];
                                                      return false;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate10.errors = [{
                                                  instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                  schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                  keyword: "type",
                                                  params: {
                                                    type: "string"
                                                  },
                                                  message: "must be string"
                                                }];
                                                return false;
                                              }
                                            }
                                            var valid12 = _errs39 === errors;
                                          } else {
                                            var valid12 = true;
                                          }
                                          if (valid12) {
                                            if (data13.description !== undefined) {
                                              let data15 = data13.description;
                                              const _errs41 = errors;
                                              if (errors === _errs41) {
                                                if (typeof data15 === "string") {
                                                  if (func2(data15) > 200) {
                                                    validate10.errors = [{
                                                      instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                      schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                      keyword: "maxLength",
                                                      params: {
                                                        limit: 200
                                                      },
                                                      message: "must NOT have more than 200 characters"
                                                    }];
                                                    return false;
                                                  } else {
                                                    if (func2(data15) < 1) {
                                                      validate10.errors = [{
                                                        instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                        schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                        keyword: "minLength",
                                                        params: {
                                                          limit: 1
                                                        },
                                                        message: "must NOT have fewer than 1 characters"
                                                      }];
                                                      return false;
                                                    } else {
                                                      if (!pattern11.test(data15)) {
                                                        validate10.errors = [{
                                                          instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                          schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                          keyword: "pattern",
                                                          params: {
                                                            pattern: "^[ \\w\\.,:]+$"
                                                          },
                                                          message: "must match pattern \"" + "^[ \\w\\.,:]+$" + "\""
                                                        }];
                                                        return false;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  validate10.errors = [{
                                                    instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                    keyword: "type",
                                                    params: {
                                                      type: "string"
                                                    },
                                                    message: "must be string"
                                                  }];
                                                  return false;
                                                }
                                              }
                                              var valid12 = _errs41 === errors;
                                            } else {
                                              var valid12 = true;
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      validate10.errors = [{
                                        instancePath: instancePath + "/tags/" + key5.replace(/~/g, "~0").replace(/\//g, "~1"),
                                        schemaPath: "#/definitions/TagDefinition/type",
                                        keyword: "type",
                                        params: {
                                          type: "object"
                                        },
                                        message: "must be object"
                                      }];
                                      return false;
                                    }
                                  }
                                  var valid10 = _errs35 === errors;
                                  if (!valid10) {
                                    break;
                                  }
                                }
                              }
                            }
                          } else {
                            validate10.errors = [{
                              instancePath: instancePath + "/tags",
                              schemaPath: "#/properties/tags/type",
                              keyword: "type",
                              params: {
                                type: "object"
                              },
                              message: "must be object"
                            }];
                            return false;
                          }
                        }
                        var valid0 = _errs29 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.logoURI !== undefined) {
                          let data16 = data.logoURI;
                          const _errs43 = errors;
                          if (errors === _errs43) {
                            if (errors === _errs43) {
                              if (typeof data16 === "string") {
                                if (!formats2(data16)) {
                                  validate10.errors = [{
                                    instancePath: instancePath + "/logoURI",
                                    schemaPath: "#/properties/logoURI/format",
                                    keyword: "format",
                                    params: {
                                      format: "uri"
                                    },
                                    message: "must match format \"" + "uri" + "\""
                                  }];
                                  return false;
                                }
                              } else {
                                validate10.errors = [{
                                  instancePath: instancePath + "/logoURI",
                                  schemaPath: "#/properties/logoURI/type",
                                  keyword: "type",
                                  params: {
                                    type: "string"
                                  },
                                  message: "must be string"
                                }];
                                return false;
                              }
                            }
                          }
                          var valid0 = _errs43 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate10.errors = [{
        instancePath,
        schemaPath: "#/type",
        keyword: "type",
        params: {
          type: "object"
        },
        message: "must be object"
      }];
      return false;
    }
  }
  validate10.errors = vErrors;
  return errors === 0;
}

exports["default"] = validate10;
exports.validate = validate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVUb2tlbkxpc3QtOTVhNjgxZDUuY2pzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvX19nZW5lcmF0ZWRfXy92YWxpZGF0ZVRva2VuTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnQgY29uc3QgdmFsaWRhdGUgPSB2YWxpZGF0ZTEwO2V4cG9ydCBkZWZhdWx0IHZhbGlkYXRlMTA7Y29uc3Qgc2NoZW1hMTEgPSB7XCIkc2NoZW1hXCI6XCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNcIixcIiRpZFwiOlwiaHR0cHM6Ly91bmlzd2FwLm9yZy90b2tlbmxpc3Quc2NoZW1hLmpzb25cIixcInRpdGxlXCI6XCJVbmlzd2FwIFRva2VuIExpc3RcIixcImRlc2NyaXB0aW9uXCI6XCJTY2hlbWEgZm9yIGxpc3RzIG9mIHRva2VucyBjb21wYXRpYmxlIHdpdGggdGhlIFVuaXN3YXAgSW50ZXJmYWNlXCIsXCJkZWZpbml0aW9uc1wiOntcIlZlcnNpb25cIjp7XCJ0eXBlXCI6XCJvYmplY3RcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgdmVyc2lvbiBvZiB0aGUgbGlzdCwgdXNlZCBpbiBjaGFuZ2UgZGV0ZWN0aW9uXCIsXCJleGFtcGxlc1wiOlt7XCJtYWpvclwiOjEsXCJtaW5vclwiOjAsXCJwYXRjaFwiOjB9XSxcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6ZmFsc2UsXCJwcm9wZXJ0aWVzXCI6e1wibWFqb3JcIjp7XCJ0eXBlXCI6XCJpbnRlZ2VyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIG1ham9yIHZlcnNpb24gb2YgdGhlIGxpc3QuIE11c3QgYmUgaW5jcmVtZW50ZWQgd2hlbiB0b2tlbnMgYXJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBvciB0b2tlbiBhZGRyZXNzZXMgYXJlIGNoYW5nZWQuXCIsXCJtaW5pbXVtXCI6MCxcImV4YW1wbGVzXCI6WzEsMl19LFwibWlub3JcIjp7XCJ0eXBlXCI6XCJpbnRlZ2VyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIG1pbm9yIHZlcnNpb24gb2YgdGhlIGxpc3QuIE11c3QgYmUgaW5jcmVtZW50ZWQgd2hlbiB0b2tlbnMgYXJlIGFkZGVkIHRvIHRoZSBsaXN0LlwiLFwibWluaW11bVwiOjAsXCJleGFtcGxlc1wiOlswLDFdfSxcInBhdGNoXCI6e1widHlwZVwiOlwiaW50ZWdlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBwYXRjaCB2ZXJzaW9uIG9mIHRoZSBsaXN0LiBNdXN0IGJlIGluY3JlbWVudGVkIGZvciBhbnkgY2hhbmdlcyB0byB0aGUgbGlzdC5cIixcIm1pbmltdW1cIjowLFwiZXhhbXBsZXNcIjpbMCwxXX19LFwicmVxdWlyZWRcIjpbXCJtYWpvclwiLFwibWlub3JcIixcInBhdGNoXCJdfSxcIlRhZ0lkZW50aWZpZXJcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgYSB0YWdcIixcIm1pbkxlbmd0aFwiOjEsXCJtYXhMZW5ndGhcIjoxMCxcInBhdHRlcm5cIjpcIl5bXFxcXHddKyRcIixcImV4YW1wbGVzXCI6W1wiY29tcG91bmRcIixcInN0YWJsZWNvaW5cIl19LFwiRXh0ZW5zaW9uSWRlbnRpZmllclwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBuYW1lIG9mIGEgdG9rZW4gZXh0ZW5zaW9uIHByb3BlcnR5XCIsXCJtaW5MZW5ndGhcIjoxLFwibWF4TGVuZ3RoXCI6NDAsXCJwYXR0ZXJuXCI6XCJeW1xcXFx3XSskXCIsXCJleGFtcGxlc1wiOltcImNvbG9yXCIsXCJpc19mZWVfb25fdHJhbnNmZXJcIixcImFsaWFzZXNcIl19LFwiRXh0ZW5zaW9uTWFwXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiQW4gb2JqZWN0IGNvbnRhaW5pbmcgYW55IGFyYml0cmFyeSBvciB2ZW5kb3Itc3BlY2lmaWMgdG9rZW4gbWV0YWRhdGFcIixcIm1heFByb3BlcnRpZXNcIjoxMCxcInByb3BlcnR5TmFtZXNcIjp7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvbklkZW50aWZpZXJcIn0sXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOntcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uVmFsdWVcIn0sXCJleGFtcGxlc1wiOlt7XCJjb2xvclwiOlwiIzAwMDAwMFwiLFwiaXNfdmVyaWZpZWRfYnlfbWVcIjp0cnVlfSx7XCJ4LWJyaWRnZWQtYWRkcmVzc2VzLWJ5LWNoYWluXCI6e1wiMVwiOntcImJyaWRnZUFkZHJlc3NcIjpcIjB4NDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMFwiLFwidG9rZW5BZGRyZXNzXCI6XCIweDQyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTBcIn19fV19LFwiRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWVcIjp7XCJhbnlPZlwiOlt7XCJ0eXBlXCI6XCJzdHJpbmdcIixcIm1pbkxlbmd0aFwiOjEsXCJtYXhMZW5ndGhcIjo0MixcImV4YW1wbGVzXCI6W1wiIzAwMDAwXCJdfSx7XCJ0eXBlXCI6XCJib29sZWFuXCIsXCJleGFtcGxlc1wiOlt0cnVlXX0se1widHlwZVwiOlwibnVtYmVyXCIsXCJleGFtcGxlc1wiOlsxNV19LHtcInR5cGVcIjpcIm51bGxcIn1dfSxcIkV4dGVuc2lvblZhbHVlXCI6e1wiYW55T2ZcIjpbe1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25QcmltaXRpdmVWYWx1ZVwifSx7XCJ0eXBlXCI6XCJvYmplY3RcIixcIm1heFByb3BlcnRpZXNcIjoxMCxcInByb3BlcnR5TmFtZXNcIjp7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvbklkZW50aWZpZXJcIn0sXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOntcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uVmFsdWVJbm5lcjBcIn19XX0sXCJFeHRlbnNpb25WYWx1ZUlubmVyMFwiOntcImFueU9mXCI6W3tcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWVcIn0se1widHlwZVwiOlwib2JqZWN0XCIsXCJtYXhQcm9wZXJ0aWVzXCI6MTAsXCJwcm9wZXJ0eU5hbWVzXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25JZGVudGlmaWVyXCJ9LFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjp7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblZhbHVlSW5uZXIxXCJ9fV19LFwiRXh0ZW5zaW9uVmFsdWVJbm5lcjFcIjp7XCJhbnlPZlwiOlt7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlXCJ9XX0sXCJUYWdEZWZpbml0aW9uXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiRGVmaW5pdGlvbiBvZiBhIHRhZyB0aGF0IGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggYSB0b2tlbiB2aWEgaXRzIGlkZW50aWZpZXJcIixcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6ZmFsc2UsXCJwcm9wZXJ0aWVzXCI6e1wibmFtZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBuYW1lIG9mIHRoZSB0YWdcIixcInBhdHRlcm5cIjpcIl5bIFxcXFx3XSskXCIsXCJtaW5MZW5ndGhcIjoxLFwibWF4TGVuZ3RoXCI6MjB9LFwiZGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJBIHVzZXItZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIHRhZ1wiLFwicGF0dGVyblwiOlwiXlsgXFxcXHdcXFxcLiw6XSskXCIsXCJtaW5MZW5ndGhcIjoxLFwibWF4TGVuZ3RoXCI6MjAwfX0sXCJyZXF1aXJlZFwiOltcIm5hbWVcIixcImRlc2NyaXB0aW9uXCJdLFwiZXhhbXBsZXNcIjpbe1wibmFtZVwiOlwiU3RhYmxlY29pblwiLFwiZGVzY3JpcHRpb25cIjpcIkEgdG9rZW4gd2l0aCB2YWx1ZSBwZWdnZWQgdG8gYW5vdGhlciBhc3NldFwifV19LFwiVG9rZW5JbmZvXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiTWV0YWRhdGEgZm9yIGEgc2luZ2xlIHRva2VuIGluIGEgdG9rZW4gbGlzdFwiLFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjpmYWxzZSxcInByb3BlcnRpZXNcIjp7XCJjaGFpbklkXCI6e1widHlwZVwiOlwiaW50ZWdlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBjaGFpbiBJRCBvZiB0aGUgRXRoZXJldW0gbmV0d29yayB3aGVyZSB0aGlzIHRva2VuIGlzIGRlcGxveWVkXCIsXCJtaW5pbXVtXCI6MSxcImV4YW1wbGVzXCI6WzEsNDJdfSxcImFkZHJlc3NcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgY2hlY2tzdW1tZWQgYWRkcmVzcyBvZiB0aGUgdG9rZW4gb24gdGhlIHNwZWNpZmllZCBjaGFpbiBJRFwiLFwicGF0dGVyblwiOlwiXjB4W2EtZkEtRjAtOV17NDB9JFwiLFwiZXhhbXBsZXNcIjpbXCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIl19LFwiZGVjaW1hbHNcIjp7XCJ0eXBlXCI6XCJpbnRlZ2VyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIG51bWJlciBvZiBkZWNpbWFscyBmb3IgdGhlIHRva2VuIGJhbGFuY2VcIixcIm1pbmltdW1cIjowLFwibWF4aW11bVwiOjI1NSxcImV4YW1wbGVzXCI6WzE4XX0sXCJuYW1lXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIG5hbWUgb2YgdGhlIHRva2VuXCIsXCJtaW5MZW5ndGhcIjowLFwibWF4TGVuZ3RoXCI6NDAsXCJhbnlPZlwiOlt7XCJjb25zdFwiOlwiXCJ9LHtcInBhdHRlcm5cIjpcIl5bIFxcXFxTK10rJFwifV0sXCJleGFtcGxlc1wiOltcIlVTRCBDb2luXCJdfSxcInN5bWJvbFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBzeW1ib2wgZm9yIHRoZSB0b2tlblwiLFwibWluTGVuZ3RoXCI6MCxcIm1heExlbmd0aFwiOjIwLFwiYW55T2ZcIjpbe1wiY29uc3RcIjpcIlwifSx7XCJwYXR0ZXJuXCI6XCJeXFxcXFMrJFwifV0sXCJleGFtcGxlc1wiOltcIlVTRENcIl19LFwibG9nb1VSSVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIkEgVVJJIHRvIHRoZSB0b2tlbiBsb2dvIGFzc2V0OyBpZiBub3Qgc2V0LCBpbnRlcmZhY2Ugd2lsbCBhdHRlbXB0IHRvIGZpbmQgYSBsb2dvIGJhc2VkIG9uIHRoZSB0b2tlbiBhZGRyZXNzOyBzdWdnZXN0IFNWRyBvciBQTkcgb2Ygc2l6ZSA2NHg2NFwiLFwiZm9ybWF0XCI6XCJ1cmlcIixcImV4YW1wbGVzXCI6W1wiaXBmczovL1FtWGZ6S1J2alp6M3U1SlJnQzR2NW1HVmJtOWFoclVpQjREZ3pIQnNuV2JUTU1cIl19LFwidGFnc1wiOntcInR5cGVcIjpcImFycmF5XCIsXCJkZXNjcmlwdGlvblwiOlwiQW4gYXJyYXkgb2YgdGFnIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdG9rZW47IHRhZ3MgYXJlIGRlZmluZWQgYXQgdGhlIGxpc3QgbGV2ZWxcIixcIml0ZW1zXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9UYWdJZGVudGlmaWVyXCJ9LFwibWF4SXRlbXNcIjoxMCxcImV4YW1wbGVzXCI6W1wic3RhYmxlY29pblwiLFwiY29tcG91bmRcIl19LFwiZXh0ZW5zaW9uc1wiOntcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uTWFwXCJ9fSxcInJlcXVpcmVkXCI6W1wiY2hhaW5JZFwiLFwiYWRkcmVzc1wiLFwiZGVjaW1hbHNcIixcIm5hbWVcIixcInN5bWJvbFwiXX19LFwidHlwZVwiOlwib2JqZWN0XCIsXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOmZhbHNlLFwicHJvcGVydGllc1wiOntcIm5hbWVcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgbmFtZSBvZiB0aGUgdG9rZW4gbGlzdFwiLFwibWluTGVuZ3RoXCI6MSxcIm1heExlbmd0aFwiOjMwLFwicGF0dGVyblwiOlwiXltcXFxcdyBdKyRcIixcImV4YW1wbGVzXCI6W1wiTXkgVG9rZW4gTGlzdFwiXX0sXCJ0aW1lc3RhbXBcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImZvcm1hdFwiOlwiZGF0ZS10aW1lXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIHRpbWVzdGFtcCBvZiB0aGlzIGxpc3QgdmVyc2lvbjsgaS5lLiB3aGVuIHRoaXMgaW1tdXRhYmxlIHZlcnNpb24gb2YgdGhlIGxpc3Qgd2FzIGNyZWF0ZWRcIn0sXCJ2ZXJzaW9uXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9WZXJzaW9uXCJ9LFwidG9rZW5zXCI6e1widHlwZVwiOlwiYXJyYXlcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgbGlzdCBvZiB0b2tlbnMgaW5jbHVkZWQgaW4gdGhlIGxpc3RcIixcIml0ZW1zXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9Ub2tlbkluZm9cIn0sXCJtaW5JdGVtc1wiOjEsXCJtYXhJdGVtc1wiOjEwMDAwfSxcInRva2VuTWFwXCI6e1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiQSBtYXBwaW5nIG9mIGtleSAnY2hhaW5JZF90b2tlbkFkZHJlc3MnIHRvIGl0cyBjb3JyZXNwb25kaW5nIHRva2VuIG9iamVjdFwiLFwibWluUHJvcGVydGllc1wiOjEsXCJtYXhQcm9wZXJ0aWVzXCI6MTAwMDAsXCJwcm9wZXJ0eU5hbWVzXCI6e1widHlwZVwiOlwic3RyaW5nXCJ9LFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjp7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL1Rva2VuSW5mb1wifSxcImV4YW1wbGVzXCI6W3tcIjRfMHgxZjk4NDBhODVkNWFGNWJmMUQxNzYyRjkyNUJEQURkQzQyMDFGOTg0XCI6e1wibmFtZVwiOlwiVW5pc3dhcFwiLFwiYWRkcmVzc1wiOlwiMHgxZjk4NDBhODVkNWFGNWJmMUQxNzYyRjkyNUJEQURkQzQyMDFGOTg0XCIsXCJzeW1ib2xcIjpcIlVOSVwiLFwiZGVjaW1hbHNcIjoxOCxcImNoYWluSWRcIjo0LFwibG9nb1VSSVwiOlwiaXBmczovL1FtWHR0R3BackVDWDVxQ3lYYkJRaXFnUU55dFZHZVpXNUFuZXd2aDJqYzRwc2dcIn19XX0sXCJrZXl3b3Jkc1wiOntcInR5cGVcIjpcImFycmF5XCIsXCJkZXNjcmlwdGlvblwiOlwiS2V5d29yZHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgbGlzdDsgbWF5IGJlIHVzZWQgaW4gbGlzdCBkaXNjb3ZlcmFiaWxpdHlcIixcIml0ZW1zXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZXNjcmlwdGlvblwiOlwiQSBrZXl3b3JkIHRvIGRlc2NyaWJlIHRoZSBjb250ZW50cyBvZiB0aGUgbGlzdFwiLFwibWluTGVuZ3RoXCI6MSxcIm1heExlbmd0aFwiOjIwLFwicGF0dGVyblwiOlwiXltcXFxcdyBdKyRcIixcImV4YW1wbGVzXCI6W1wiY29tcG91bmRcIixcImxlbmRpbmdcIixcInBlcnNvbmFsIHRva2Vuc1wiXX0sXCJtYXhJdGVtc1wiOjIwLFwidW5pcXVlSXRlbXNcIjp0cnVlfSxcInRhZ3NcIjp7XCJ0eXBlXCI6XCJvYmplY3RcIixcImRlc2NyaXB0aW9uXCI6XCJBIG1hcHBpbmcgb2YgdGFnIGlkZW50aWZpZXJzIHRvIHRoZWlyIG5hbWUgYW5kIGRlc2NyaXB0aW9uXCIsXCJwcm9wZXJ0eU5hbWVzXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9UYWdJZGVudGlmaWVyXCJ9LFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjp7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL1RhZ0RlZmluaXRpb25cIn0sXCJtYXhQcm9wZXJ0aWVzXCI6MjAsXCJleGFtcGxlc1wiOlt7XCJzdGFibGVjb2luXCI6e1wibmFtZVwiOlwiU3RhYmxlY29pblwiLFwiZGVzY3JpcHRpb25cIjpcIkEgdG9rZW4gd2l0aCB2YWx1ZSBwZWdnZWQgdG8gYW5vdGhlciBhc3NldFwifX1dfSxcImxvZ29VUklcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJBIFVSSSBmb3IgdGhlIGxvZ28gb2YgdGhlIHRva2VuIGxpc3Q7IHByZWZlciBTVkcgb3IgUE5HIG9mIHNpemUgMjU2eDI1NlwiLFwiZm9ybWF0XCI6XCJ1cmlcIixcImV4YW1wbGVzXCI6W1wiaXBmczovL1FtWGZ6S1J2alp6M3U1SlJnQzR2NW1HVmJtOWFoclVpQjREZ3pIQnNuV2JUTU1cIl19fSxcInJlcXVpcmVkXCI6W1wibmFtZVwiLFwidGltZXN0YW1wXCIsXCJ2ZXJzaW9uXCIsXCJ0b2tlbnNcIl19O2NvbnN0IHNjaGVtYTEyID0ge1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIHZlcnNpb24gb2YgdGhlIGxpc3QsIHVzZWQgaW4gY2hhbmdlIGRldGVjdGlvblwiLFwiZXhhbXBsZXNcIjpbe1wibWFqb3JcIjoxLFwibWlub3JcIjowLFwicGF0Y2hcIjowfV0sXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOmZhbHNlLFwicHJvcGVydGllc1wiOntcIm1ham9yXCI6e1widHlwZVwiOlwiaW50ZWdlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBtYWpvciB2ZXJzaW9uIG9mIHRoZSBsaXN0LiBNdXN0IGJlIGluY3JlbWVudGVkIHdoZW4gdG9rZW5zIGFyZSByZW1vdmVkIGZyb20gdGhlIGxpc3Qgb3IgdG9rZW4gYWRkcmVzc2VzIGFyZSBjaGFuZ2VkLlwiLFwibWluaW11bVwiOjAsXCJleGFtcGxlc1wiOlsxLDJdfSxcIm1pbm9yXCI6e1widHlwZVwiOlwiaW50ZWdlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBtaW5vciB2ZXJzaW9uIG9mIHRoZSBsaXN0LiBNdXN0IGJlIGluY3JlbWVudGVkIHdoZW4gdG9rZW5zIGFyZSBhZGRlZCB0byB0aGUgbGlzdC5cIixcIm1pbmltdW1cIjowLFwiZXhhbXBsZXNcIjpbMCwxXX0sXCJwYXRjaFwiOntcInR5cGVcIjpcImludGVnZXJcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgcGF0Y2ggdmVyc2lvbiBvZiB0aGUgbGlzdC4gTXVzdCBiZSBpbmNyZW1lbnRlZCBmb3IgYW55IGNoYW5nZXMgdG8gdGhlIGxpc3QuXCIsXCJtaW5pbXVtXCI6MCxcImV4YW1wbGVzXCI6WzAsMV19fSxcInJlcXVpcmVkXCI6W1wibWFqb3JcIixcIm1pbm9yXCIsXCJwYXRjaFwiXX07Y29uc3Qgc2NoZW1hMTQgPSB7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgdW5pcXVlIGlkZW50aWZpZXIgb2YgYSB0YWdcIixcIm1pbkxlbmd0aFwiOjEsXCJtYXhMZW5ndGhcIjoxMCxcInBhdHRlcm5cIjpcIl5bXFxcXHddKyRcIixcImV4YW1wbGVzXCI6W1wiY29tcG91bmRcIixcInN0YWJsZWNvaW5cIl19O2NvbnN0IHNjaGVtYTI2ID0ge1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiRGVmaW5pdGlvbiBvZiBhIHRhZyB0aGF0IGNhbiBiZSBhc3NvY2lhdGVkIHdpdGggYSB0b2tlbiB2aWEgaXRzIGlkZW50aWZpZXJcIixcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6ZmFsc2UsXCJwcm9wZXJ0aWVzXCI6e1wibmFtZVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBuYW1lIG9mIHRoZSB0YWdcIixcInBhdHRlcm5cIjpcIl5bIFxcXFx3XSskXCIsXCJtaW5MZW5ndGhcIjoxLFwibWF4TGVuZ3RoXCI6MjB9LFwiZGVzY3JpcHRpb25cIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJBIHVzZXItZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIHRhZ1wiLFwicGF0dGVyblwiOlwiXlsgXFxcXHdcXFxcLiw6XSskXCIsXCJtaW5MZW5ndGhcIjoxLFwibWF4TGVuZ3RoXCI6MjAwfX0sXCJyZXF1aXJlZFwiOltcIm5hbWVcIixcImRlc2NyaXB0aW9uXCJdLFwiZXhhbXBsZXNcIjpbe1wibmFtZVwiOlwiU3RhYmxlY29pblwiLFwiZGVzY3JpcHRpb25cIjpcIkEgdG9rZW4gd2l0aCB2YWx1ZSBwZWdnZWQgdG8gYW5vdGhlciBhc3NldFwifV19O2NvbnN0IGZ1bmMyID0gcmVxdWlyZShcImFqdi9kaXN0L3J1bnRpbWUvdWNzMmxlbmd0aFwiKS5kZWZhdWx0O2NvbnN0IHBhdHRlcm4wID0gbmV3IFJlZ0V4cChcIl5bXFxcXHcgXSskXCIsIFwidVwiKTtjb25zdCBwYXR0ZXJuNCA9IG5ldyBSZWdFeHAoXCJeW1xcXFx3XSskXCIsIFwidVwiKTtjb25zdCBwYXR0ZXJuMTAgPSBuZXcgUmVnRXhwKFwiXlsgXFxcXHddKyRcIiwgXCJ1XCIpO2NvbnN0IHBhdHRlcm4xMSA9IG5ldyBSZWdFeHAoXCJeWyBcXFxcd1xcXFwuLDpdKyRcIiwgXCJ1XCIpO2NvbnN0IGZvcm1hdHMwID0gcmVxdWlyZShcImFqdi1mb3JtYXRzL2Rpc3QvZm9ybWF0c1wiKS5mdWxsRm9ybWF0c1tcImRhdGUtdGltZVwiXTtjb25zdCBmb3JtYXRzMiA9IHJlcXVpcmUoXCJhanYtZm9ybWF0cy9kaXN0L2Zvcm1hdHNcIikuZnVsbEZvcm1hdHMudXJpO2NvbnN0IHNjaGVtYTEzID0ge1widHlwZVwiOlwib2JqZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiTWV0YWRhdGEgZm9yIGEgc2luZ2xlIHRva2VuIGluIGEgdG9rZW4gbGlzdFwiLFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjpmYWxzZSxcInByb3BlcnRpZXNcIjp7XCJjaGFpbklkXCI6e1widHlwZVwiOlwiaW50ZWdlclwiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBjaGFpbiBJRCBvZiB0aGUgRXRoZXJldW0gbmV0d29yayB3aGVyZSB0aGlzIHRva2VuIGlzIGRlcGxveWVkXCIsXCJtaW5pbXVtXCI6MSxcImV4YW1wbGVzXCI6WzEsNDJdfSxcImFkZHJlc3NcIjp7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgY2hlY2tzdW1tZWQgYWRkcmVzcyBvZiB0aGUgdG9rZW4gb24gdGhlIHNwZWNpZmllZCBjaGFpbiBJRFwiLFwicGF0dGVyblwiOlwiXjB4W2EtZkEtRjAtOV17NDB9JFwiLFwiZXhhbXBsZXNcIjpbXCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIl19LFwiZGVjaW1hbHNcIjp7XCJ0eXBlXCI6XCJpbnRlZ2VyXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIG51bWJlciBvZiBkZWNpbWFscyBmb3IgdGhlIHRva2VuIGJhbGFuY2VcIixcIm1pbmltdW1cIjowLFwibWF4aW11bVwiOjI1NSxcImV4YW1wbGVzXCI6WzE4XX0sXCJuYW1lXCI6e1widHlwZVwiOlwic3RyaW5nXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhlIG5hbWUgb2YgdGhlIHRva2VuXCIsXCJtaW5MZW5ndGhcIjowLFwibWF4TGVuZ3RoXCI6NDAsXCJhbnlPZlwiOlt7XCJjb25zdFwiOlwiXCJ9LHtcInBhdHRlcm5cIjpcIl5bIFxcXFxTK10rJFwifV0sXCJleGFtcGxlc1wiOltcIlVTRCBDb2luXCJdfSxcInN5bWJvbFwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIlRoZSBzeW1ib2wgZm9yIHRoZSB0b2tlblwiLFwibWluTGVuZ3RoXCI6MCxcIm1heExlbmd0aFwiOjIwLFwiYW55T2ZcIjpbe1wiY29uc3RcIjpcIlwifSx7XCJwYXR0ZXJuXCI6XCJeXFxcXFMrJFwifV0sXCJleGFtcGxlc1wiOltcIlVTRENcIl19LFwibG9nb1VSSVwiOntcInR5cGVcIjpcInN0cmluZ1wiLFwiZGVzY3JpcHRpb25cIjpcIkEgVVJJIHRvIHRoZSB0b2tlbiBsb2dvIGFzc2V0OyBpZiBub3Qgc2V0LCBpbnRlcmZhY2Ugd2lsbCBhdHRlbXB0IHRvIGZpbmQgYSBsb2dvIGJhc2VkIG9uIHRoZSB0b2tlbiBhZGRyZXNzOyBzdWdnZXN0IFNWRyBvciBQTkcgb2Ygc2l6ZSA2NHg2NFwiLFwiZm9ybWF0XCI6XCJ1cmlcIixcImV4YW1wbGVzXCI6W1wiaXBmczovL1FtWGZ6S1J2alp6M3U1SlJnQzR2NW1HVmJtOWFoclVpQjREZ3pIQnNuV2JUTU1cIl19LFwidGFnc1wiOntcInR5cGVcIjpcImFycmF5XCIsXCJkZXNjcmlwdGlvblwiOlwiQW4gYXJyYXkgb2YgdGFnIGlkZW50aWZpZXJzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdG9rZW47IHRhZ3MgYXJlIGRlZmluZWQgYXQgdGhlIGxpc3QgbGV2ZWxcIixcIml0ZW1zXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9UYWdJZGVudGlmaWVyXCJ9LFwibWF4SXRlbXNcIjoxMCxcImV4YW1wbGVzXCI6W1wic3RhYmxlY29pblwiLFwiY29tcG91bmRcIl19LFwiZXh0ZW5zaW9uc1wiOntcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uTWFwXCJ9fSxcInJlcXVpcmVkXCI6W1wiY2hhaW5JZFwiLFwiYWRkcmVzc1wiLFwiZGVjaW1hbHNcIixcIm5hbWVcIixcInN5bWJvbFwiXX07Y29uc3QgcGF0dGVybjEgPSBuZXcgUmVnRXhwKFwiXjB4W2EtZkEtRjAtOV17NDB9JFwiLCBcInVcIik7Y29uc3QgcGF0dGVybjIgPSBuZXcgUmVnRXhwKFwiXlsgXFxcXFMrXSskXCIsIFwidVwiKTtjb25zdCBwYXR0ZXJuMyA9IG5ldyBSZWdFeHAoXCJeXFxcXFMrJFwiLCBcInVcIik7Y29uc3Qgc2NoZW1hMTUgPSB7XCJ0eXBlXCI6XCJvYmplY3RcIixcImRlc2NyaXB0aW9uXCI6XCJBbiBvYmplY3QgY29udGFpbmluZyBhbnkgYXJiaXRyYXJ5IG9yIHZlbmRvci1zcGVjaWZpYyB0b2tlbiBtZXRhZGF0YVwiLFwibWF4UHJvcGVydGllc1wiOjEwLFwicHJvcGVydHlOYW1lc1wiOntcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllclwifSxcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25WYWx1ZVwifSxcImV4YW1wbGVzXCI6W3tcImNvbG9yXCI6XCIjMDAwMDAwXCIsXCJpc192ZXJpZmllZF9ieV9tZVwiOnRydWV9LHtcIngtYnJpZGdlZC1hZGRyZXNzZXMtYnktY2hhaW5cIjp7XCIxXCI6e1wiYnJpZGdlQWRkcmVzc1wiOlwiMHg0MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwXCIsXCJ0b2tlbkFkZHJlc3NcIjpcIjB4NDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMFwifX19XX07Y29uc3Qgc2NoZW1hMTYgPSB7XCJ0eXBlXCI6XCJzdHJpbmdcIixcImRlc2NyaXB0aW9uXCI6XCJUaGUgbmFtZSBvZiBhIHRva2VuIGV4dGVuc2lvbiBwcm9wZXJ0eVwiLFwibWluTGVuZ3RoXCI6MSxcIm1heExlbmd0aFwiOjQwLFwicGF0dGVyblwiOlwiXltcXFxcd10rJFwiLFwiZXhhbXBsZXNcIjpbXCJjb2xvclwiLFwiaXNfZmVlX29uX3RyYW5zZmVyXCIsXCJhbGlhc2VzXCJdfTtjb25zdCBzY2hlbWExNyA9IHtcImFueU9mXCI6W3tcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWVcIn0se1widHlwZVwiOlwib2JqZWN0XCIsXCJtYXhQcm9wZXJ0aWVzXCI6MTAsXCJwcm9wZXJ0eU5hbWVzXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25JZGVudGlmaWVyXCJ9LFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjp7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblZhbHVlSW5uZXIwXCJ9fV19O2NvbnN0IHNjaGVtYTE4ID0ge1wiYW55T2ZcIjpbe1widHlwZVwiOlwic3RyaW5nXCIsXCJtaW5MZW5ndGhcIjoxLFwibWF4TGVuZ3RoXCI6NDIsXCJleGFtcGxlc1wiOltcIiMwMDAwMFwiXX0se1widHlwZVwiOlwiYm9vbGVhblwiLFwiZXhhbXBsZXNcIjpbdHJ1ZV19LHtcInR5cGVcIjpcIm51bWJlclwiLFwiZXhhbXBsZXNcIjpbMTVdfSx7XCJ0eXBlXCI6XCJudWxsXCJ9XX07Y29uc3Qgc2NoZW1hMjAgPSB7XCJhbnlPZlwiOlt7XCIkcmVmXCI6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlXCJ9LHtcInR5cGVcIjpcIm9iamVjdFwiLFwibWF4UHJvcGVydGllc1wiOjEwLFwicHJvcGVydHlOYW1lc1wiOntcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllclwifSxcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6e1wiJHJlZlwiOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25WYWx1ZUlubmVyMVwifX1dfTtjb25zdCBzY2hlbWEyMyA9IHtcImFueU9mXCI6W3tcIiRyZWZcIjpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWVcIn1dfTtmdW5jdGlvbiB2YWxpZGF0ZTE1KGRhdGEsIHtpbnN0YW5jZVBhdGg9XCJcIiwgcGFyZW50RGF0YSwgcGFyZW50RGF0YVByb3BlcnR5LCByb290RGF0YT1kYXRhfT17fSl7bGV0IHZFcnJvcnMgPSBudWxsO2xldCBlcnJvcnMgPSAwO2NvbnN0IF9lcnJzMCA9IGVycm9ycztsZXQgdmFsaWQwID0gZmFsc2U7Y29uc3QgX2VycnMxID0gZXJyb3JzO2NvbnN0IF9lcnJzMyA9IGVycm9ycztsZXQgdmFsaWQyID0gZmFsc2U7Y29uc3QgX2VycnM0ID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnM0KXtpZih0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIil7aWYoZnVuYzIoZGF0YSkgPiA0Mil7Y29uc3QgZXJyMCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMC9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogNDJ9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiA0MiBjaGFyYWN0ZXJzXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIwKTt9ZXJyb3JzKys7fWVsc2Uge2lmKGZ1bmMyKGRhdGEpIDwgMSl7Y29uc3QgZXJyMSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMC9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAxIGNoYXJhY3RlcnNcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjEpO31lcnJvcnMrKzt9fX1lbHNlIHtjb25zdCBlcnIyID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25QcmltaXRpdmVWYWx1ZS9hbnlPZi8wL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJzdHJpbmdcIn0sbWVzc2FnZTpcIm11c3QgYmUgc3RyaW5nXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMl07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIyKTt9ZXJyb3JzKys7fX12YXIgX3ZhbGlkMSA9IF9lcnJzNCA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzNiA9IGVycm9ycztpZih0eXBlb2YgZGF0YSAhPT0gXCJib29sZWFuXCIpe2NvbnN0IGVycjMgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mLzEvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcImJvb2xlYW5cIn0sbWVzc2FnZTpcIm11c3QgYmUgYm9vbGVhblwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjNdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMyk7fWVycm9ycysrO312YXIgX3ZhbGlkMSA9IF9lcnJzNiA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzOCA9IGVycm9ycztpZighKCh0eXBlb2YgZGF0YSA9PSBcIm51bWJlclwiKSAmJiAoaXNGaW5pdGUoZGF0YSkpKSl7Y29uc3QgZXJyNCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMi90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwibnVtYmVyXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIG51bWJlclwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjRdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNCk7fWVycm9ycysrO312YXIgX3ZhbGlkMSA9IF9lcnJzOCA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzMTAgPSBlcnJvcnM7aWYoZGF0YSAhPT0gbnVsbCl7Y29uc3QgZXJyNSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMy90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwibnVsbFwifSxtZXNzYWdlOlwibXVzdCBiZSBudWxsXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNV07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI1KTt9ZXJyb3JzKys7fXZhciBfdmFsaWQxID0gX2VycnMxMCA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO319fWlmKCF2YWxpZDIpe2NvbnN0IGVycjYgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mXCIsa2V5d29yZDpcImFueU9mXCIscGFyYW1zOnt9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIGEgc2NoZW1hIGluIGFueU9mXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNl07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI2KTt9ZXJyb3JzKys7fWVsc2Uge2Vycm9ycyA9IF9lcnJzMztpZih2RXJyb3JzICE9PSBudWxsKXtpZihfZXJyczMpe3ZFcnJvcnMubGVuZ3RoID0gX2VycnMzO31lbHNlIHt2RXJyb3JzID0gbnVsbDt9fX12YXIgX3ZhbGlkMCA9IF9lcnJzMSA9PT0gZXJyb3JzO3ZhbGlkMCA9IHZhbGlkMCB8fCBfdmFsaWQwO2lmKCF2YWxpZDApe2NvbnN0IGVycjcgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2FueU9mXCIsa2V5d29yZDpcImFueU9mXCIscGFyYW1zOnt9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIGEgc2NoZW1hIGluIGFueU9mXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyN107fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI3KTt9ZXJyb3JzKys7dmFsaWRhdGUxNS5lcnJvcnMgPSB2RXJyb3JzO3JldHVybiBmYWxzZTt9ZWxzZSB7ZXJyb3JzID0gX2VycnMwO2lmKHZFcnJvcnMgIT09IG51bGwpe2lmKF9lcnJzMCl7dkVycm9ycy5sZW5ndGggPSBfZXJyczA7fWVsc2Uge3ZFcnJvcnMgPSBudWxsO319fXZhbGlkYXRlMTUuZXJyb3JzID0gdkVycm9ycztyZXR1cm4gZXJyb3JzID09PSAwO31mdW5jdGlvbiB2YWxpZGF0ZTE0KGRhdGEsIHtpbnN0YW5jZVBhdGg9XCJcIiwgcGFyZW50RGF0YSwgcGFyZW50RGF0YVByb3BlcnR5LCByb290RGF0YT1kYXRhfT17fSl7bGV0IHZFcnJvcnMgPSBudWxsO2xldCBlcnJvcnMgPSAwO2NvbnN0IF9lcnJzMCA9IGVycm9ycztsZXQgdmFsaWQwID0gZmFsc2U7Y29uc3QgX2VycnMxID0gZXJyb3JzO2NvbnN0IF9lcnJzMyA9IGVycm9ycztsZXQgdmFsaWQyID0gZmFsc2U7Y29uc3QgX2VycnM0ID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnM0KXtpZih0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIil7aWYoZnVuYzIoZGF0YSkgPiA0Mil7Y29uc3QgZXJyMCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMC9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogNDJ9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiA0MiBjaGFyYWN0ZXJzXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIwKTt9ZXJyb3JzKys7fWVsc2Uge2lmKGZ1bmMyKGRhdGEpIDwgMSl7Y29uc3QgZXJyMSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMC9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAxIGNoYXJhY3RlcnNcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjEpO31lcnJvcnMrKzt9fX1lbHNlIHtjb25zdCBlcnIyID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25QcmltaXRpdmVWYWx1ZS9hbnlPZi8wL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJzdHJpbmdcIn0sbWVzc2FnZTpcIm11c3QgYmUgc3RyaW5nXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMl07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIyKTt9ZXJyb3JzKys7fX12YXIgX3ZhbGlkMSA9IF9lcnJzNCA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzNiA9IGVycm9ycztpZih0eXBlb2YgZGF0YSAhPT0gXCJib29sZWFuXCIpe2NvbnN0IGVycjMgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mLzEvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcImJvb2xlYW5cIn0sbWVzc2FnZTpcIm11c3QgYmUgYm9vbGVhblwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjNdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMyk7fWVycm9ycysrO312YXIgX3ZhbGlkMSA9IF9lcnJzNiA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzOCA9IGVycm9ycztpZighKCh0eXBlb2YgZGF0YSA9PSBcIm51bWJlclwiKSAmJiAoaXNGaW5pdGUoZGF0YSkpKSl7Y29uc3QgZXJyNCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMi90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwibnVtYmVyXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIG51bWJlclwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjRdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNCk7fWVycm9ycysrO312YXIgX3ZhbGlkMSA9IF9lcnJzOCA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzMTAgPSBlcnJvcnM7aWYoZGF0YSAhPT0gbnVsbCl7Y29uc3QgZXJyNSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMy90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwibnVsbFwifSxtZXNzYWdlOlwibXVzdCBiZSBudWxsXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNV07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI1KTt9ZXJyb3JzKys7fXZhciBfdmFsaWQxID0gX2VycnMxMCA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO319fWlmKCF2YWxpZDIpe2NvbnN0IGVycjYgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mXCIsa2V5d29yZDpcImFueU9mXCIscGFyYW1zOnt9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIGEgc2NoZW1hIGluIGFueU9mXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNl07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI2KTt9ZXJyb3JzKys7fWVsc2Uge2Vycm9ycyA9IF9lcnJzMztpZih2RXJyb3JzICE9PSBudWxsKXtpZihfZXJyczMpe3ZFcnJvcnMubGVuZ3RoID0gX2VycnMzO31lbHNlIHt2RXJyb3JzID0gbnVsbDt9fX12YXIgX3ZhbGlkMCA9IF9lcnJzMSA9PT0gZXJyb3JzO3ZhbGlkMCA9IHZhbGlkMCB8fCBfdmFsaWQwO2lmKCF2YWxpZDApe2NvbnN0IF9lcnJzMTIgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczEyKXtpZihkYXRhICYmIHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSkpe2lmKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDEwKXtjb25zdCBlcnI3ID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9hbnlPZi8xL21heFByb3BlcnRpZXNcIixrZXl3b3JkOlwibWF4UHJvcGVydGllc1wiLHBhcmFtczp7bGltaXQ6IDEwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gMTAgcHJvcGVydGllc1wifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjddO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNyk7fWVycm9ycysrO31lbHNlIHtmb3IoY29uc3Qga2V5MCBpbiBkYXRhKXtjb25zdCBfZXJyczE0ID0gZXJyb3JzO2NvbnN0IF9lcnJzMTUgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczE1KXtpZih0eXBlb2Yga2V5MCA9PT0gXCJzdHJpbmdcIil7aWYoZnVuYzIoa2V5MCkgPiA0MCl7Y29uc3QgZXJyOCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllci9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogNDB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzXCIscHJvcGVydHlOYW1lOmtleTB9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyOF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI4KTt9ZXJyb3JzKys7fWVsc2Uge2lmKGZ1bmMyKGtleTApIDwgMSl7Y29uc3QgZXJyOSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllci9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAxIGNoYXJhY3RlcnNcIixwcm9wZXJ0eU5hbWU6a2V5MH07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnI5XTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjkpO31lcnJvcnMrKzt9ZWxzZSB7aWYoIXBhdHRlcm40LnRlc3Qoa2V5MCkpe2NvbnN0IGVycjEwID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25JZGVudGlmaWVyL3BhdHRlcm5cIixrZXl3b3JkOlwicGF0dGVyblwiLHBhcmFtczp7cGF0dGVybjogXCJeW1xcXFx3XSskXCJ9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIHBhdHRlcm4gXFxcIlwiK1wiXltcXFxcd10rJFwiK1wiXFxcIlwiLHByb3BlcnR5TmFtZTprZXkwfTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjEwXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjEwKTt9ZXJyb3JzKys7fX19fWVsc2Uge2NvbnN0IGVycjExID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25JZGVudGlmaWVyL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJzdHJpbmdcIn0sbWVzc2FnZTpcIm11c3QgYmUgc3RyaW5nXCIscHJvcGVydHlOYW1lOmtleTB9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMTFdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMTEpO31lcnJvcnMrKzt9fXZhciB2YWxpZDMgPSBfZXJyczE0ID09PSBlcnJvcnM7aWYoIXZhbGlkMyl7Y29uc3QgZXJyMTIgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2FueU9mLzEvcHJvcGVydHlOYW1lc1wiLGtleXdvcmQ6XCJwcm9wZXJ0eU5hbWVzXCIscGFyYW1zOntwcm9wZXJ0eU5hbWU6IGtleTB9LG1lc3NhZ2U6XCJwcm9wZXJ0eSBuYW1lIG11c3QgYmUgdmFsaWRcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxMl07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIxMik7fWVycm9ycysrO2JyZWFrO319aWYodmFsaWQzKXtmb3IoY29uc3Qga2V5MSBpbiBkYXRhKXtjb25zdCBfZXJyczE4ID0gZXJyb3JzO2lmKCEodmFsaWRhdGUxNShkYXRhW2tleTFdLCB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9cIiArIGtleTEucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpLHBhcmVudERhdGE6ZGF0YSxwYXJlbnREYXRhUHJvcGVydHk6a2V5MSxyb290RGF0YX0pKSl7dkVycm9ycyA9IHZFcnJvcnMgPT09IG51bGwgPyB2YWxpZGF0ZTE1LmVycm9ycyA6IHZFcnJvcnMuY29uY2F0KHZhbGlkYXRlMTUuZXJyb3JzKTtlcnJvcnMgPSB2RXJyb3JzLmxlbmd0aDt9dmFyIHZhbGlkNSA9IF9lcnJzMTggPT09IGVycm9ycztpZighdmFsaWQ1KXticmVhazt9fX19fWVsc2Uge2NvbnN0IGVycjEzID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9hbnlPZi8xL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJvYmplY3RcIn0sbWVzc2FnZTpcIm11c3QgYmUgb2JqZWN0XCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMTNdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMTMpO31lcnJvcnMrKzt9fXZhciBfdmFsaWQwID0gX2VycnMxMiA9PT0gZXJyb3JzO3ZhbGlkMCA9IHZhbGlkMCB8fCBfdmFsaWQwO31pZighdmFsaWQwKXtjb25zdCBlcnIxNCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvYW55T2ZcIixrZXl3b3JkOlwiYW55T2ZcIixwYXJhbXM6e30sbWVzc2FnZTpcIm11c3QgbWF0Y2ggYSBzY2hlbWEgaW4gYW55T2ZcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxNF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIxNCk7fWVycm9ycysrO3ZhbGlkYXRlMTQuZXJyb3JzID0gdkVycm9ycztyZXR1cm4gZmFsc2U7fWVsc2Uge2Vycm9ycyA9IF9lcnJzMDtpZih2RXJyb3JzICE9PSBudWxsKXtpZihfZXJyczApe3ZFcnJvcnMubGVuZ3RoID0gX2VycnMwO31lbHNlIHt2RXJyb3JzID0gbnVsbDt9fX12YWxpZGF0ZTE0LmVycm9ycyA9IHZFcnJvcnM7cmV0dXJuIGVycm9ycyA9PT0gMDt9ZnVuY3Rpb24gdmFsaWRhdGUxMyhkYXRhLCB7aW5zdGFuY2VQYXRoPVwiXCIsIHBhcmVudERhdGEsIHBhcmVudERhdGFQcm9wZXJ0eSwgcm9vdERhdGE9ZGF0YX09e30pe2xldCB2RXJyb3JzID0gbnVsbDtsZXQgZXJyb3JzID0gMDtjb25zdCBfZXJyczAgPSBlcnJvcnM7bGV0IHZhbGlkMCA9IGZhbHNlO2NvbnN0IF9lcnJzMSA9IGVycm9ycztjb25zdCBfZXJyczMgPSBlcnJvcnM7bGV0IHZhbGlkMiA9IGZhbHNlO2NvbnN0IF9lcnJzNCA9IGVycm9ycztpZihlcnJvcnMgPT09IF9lcnJzNCl7aWYodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpe2lmKGZ1bmMyKGRhdGEpID4gNDIpe2NvbnN0IGVycjAgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mLzAvbWF4TGVuZ3RoXCIsa2V5d29yZDpcIm1heExlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDQyfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gNDIgY2hhcmFjdGVyc1wifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjBdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMCk7fWVycm9ycysrO31lbHNlIHtpZihmdW5jMihkYXRhKSA8IDEpe2NvbnN0IGVycjEgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mLzAvbWluTGVuZ3RoXCIsa2V5d29yZDpcIm1pbkxlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMSBjaGFyYWN0ZXJzXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMV07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIxKTt9ZXJyb3JzKys7fX19ZWxzZSB7Y29uc3QgZXJyMiA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uUHJpbWl0aXZlVmFsdWUvYW55T2YvMC90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwic3RyaW5nXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIHN0cmluZ1wifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjJdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMik7fWVycm9ycysrO319dmFyIF92YWxpZDEgPSBfZXJyczQgPT09IGVycm9yczt2YWxpZDIgPSB2YWxpZDIgfHwgX3ZhbGlkMTtpZighdmFsaWQyKXtjb25zdCBfZXJyczYgPSBlcnJvcnM7aWYodHlwZW9mIGRhdGEgIT09IFwiYm9vbGVhblwiKXtjb25zdCBlcnIzID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25QcmltaXRpdmVWYWx1ZS9hbnlPZi8xL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJib29sZWFuXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIGJvb2xlYW5cIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIzXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjMpO31lcnJvcnMrKzt9dmFyIF92YWxpZDEgPSBfZXJyczYgPT09IGVycm9yczt2YWxpZDIgPSB2YWxpZDIgfHwgX3ZhbGlkMTtpZighdmFsaWQyKXtjb25zdCBfZXJyczggPSBlcnJvcnM7aWYoISgodHlwZW9mIGRhdGEgPT0gXCJudW1iZXJcIikgJiYgKGlzRmluaXRlKGRhdGEpKSkpe2NvbnN0IGVycjQgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mLzIvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcIm51bWJlclwifSxtZXNzYWdlOlwibXVzdCBiZSBudW1iZXJcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnI0XTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjQpO31lcnJvcnMrKzt9dmFyIF92YWxpZDEgPSBfZXJyczggPT09IGVycm9yczt2YWxpZDIgPSB2YWxpZDIgfHwgX3ZhbGlkMTtpZighdmFsaWQyKXtjb25zdCBfZXJyczEwID0gZXJyb3JzO2lmKGRhdGEgIT09IG51bGwpe2NvbnN0IGVycjUgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvblByaW1pdGl2ZVZhbHVlL2FueU9mLzMvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcIm51bGxcIn0sbWVzc2FnZTpcIm11c3QgYmUgbnVsbFwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjVdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNSk7fWVycm9ycysrO312YXIgX3ZhbGlkMSA9IF9lcnJzMTAgPT09IGVycm9yczt2YWxpZDIgPSB2YWxpZDIgfHwgX3ZhbGlkMTt9fX1pZighdmFsaWQyKXtjb25zdCBlcnI2ID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9FeHRlbnNpb25QcmltaXRpdmVWYWx1ZS9hbnlPZlwiLGtleXdvcmQ6XCJhbnlPZlwiLHBhcmFtczp7fSxtZXNzYWdlOlwibXVzdCBtYXRjaCBhIHNjaGVtYSBpbiBhbnlPZlwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjZdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNik7fWVycm9ycysrO31lbHNlIHtlcnJvcnMgPSBfZXJyczM7aWYodkVycm9ycyAhPT0gbnVsbCl7aWYoX2VycnMzKXt2RXJyb3JzLmxlbmd0aCA9IF9lcnJzMzt9ZWxzZSB7dkVycm9ycyA9IG51bGw7fX19dmFyIF92YWxpZDAgPSBfZXJyczEgPT09IGVycm9yczt2YWxpZDAgPSB2YWxpZDAgfHwgX3ZhbGlkMDtpZighdmFsaWQwKXtjb25zdCBfZXJyczEyID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnMxMil7aWYoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEpKXtpZihPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAxMCl7Y29uc3QgZXJyNyA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvYW55T2YvMS9tYXhQcm9wZXJ0aWVzXCIsa2V5d29yZDpcIm1heFByb3BlcnRpZXNcIixwYXJhbXM6e2xpbWl0OiAxMH0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgbW9yZSB0aGFuIDEwIHByb3BlcnRpZXNcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnI3XTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjcpO31lcnJvcnMrKzt9ZWxzZSB7Zm9yKGNvbnN0IGtleTAgaW4gZGF0YSl7Y29uc3QgX2VycnMxNCA9IGVycm9ycztjb25zdCBfZXJyczE1ID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnMxNSl7aWYodHlwZW9mIGtleTAgPT09IFwic3RyaW5nXCIpe2lmKGZ1bmMyKGtleTApID4gNDApe2NvbnN0IGVycjggPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvbklkZW50aWZpZXIvbWF4TGVuZ3RoXCIsa2V5d29yZDpcIm1heExlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDQwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gNDAgY2hhcmFjdGVyc1wiLHByb3BlcnR5TmFtZTprZXkwfTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjhdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyOCk7fWVycm9ycysrO31lbHNlIHtpZihmdW5jMihrZXkwKSA8IDEpe2NvbnN0IGVycjkgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvbklkZW50aWZpZXIvbWluTGVuZ3RoXCIsa2V5d29yZDpcIm1pbkxlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMSBjaGFyYWN0ZXJzXCIscHJvcGVydHlOYW1lOmtleTB9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyOV07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI5KTt9ZXJyb3JzKys7fWVsc2Uge2lmKCFwYXR0ZXJuNC50ZXN0KGtleTApKXtjb25zdCBlcnIxMCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllci9wYXR0ZXJuXCIsa2V5d29yZDpcInBhdHRlcm5cIixwYXJhbXM6e3BhdHRlcm46IFwiXltcXFxcd10rJFwifSxtZXNzYWdlOlwibXVzdCBtYXRjaCBwYXR0ZXJuIFxcXCJcIitcIl5bXFxcXHddKyRcIitcIlxcXCJcIixwcm9wZXJ0eU5hbWU6a2V5MH07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxMF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIxMCk7fWVycm9ycysrO319fX1lbHNlIHtjb25zdCBlcnIxMSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllci90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwic3RyaW5nXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIHN0cmluZ1wiLHByb3BlcnR5TmFtZTprZXkwfTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjExXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjExKTt9ZXJyb3JzKys7fX12YXIgdmFsaWQzID0gX2VycnMxNCA9PT0gZXJyb3JzO2lmKCF2YWxpZDMpe2NvbnN0IGVycjEyID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9hbnlPZi8xL3Byb3BlcnR5TmFtZXNcIixrZXl3b3JkOlwicHJvcGVydHlOYW1lc1wiLHBhcmFtczp7cHJvcGVydHlOYW1lOiBrZXkwfSxtZXNzYWdlOlwicHJvcGVydHkgbmFtZSBtdXN0IGJlIHZhbGlkXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMTJdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMTIpO31lcnJvcnMrKzticmVhazt9fWlmKHZhbGlkMyl7Zm9yKGNvbnN0IGtleTEgaW4gZGF0YSl7Y29uc3QgX2VycnMxOCA9IGVycm9ycztpZighKHZhbGlkYXRlMTQoZGF0YVtrZXkxXSwge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvXCIgKyBrZXkxLnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKSxwYXJlbnREYXRhOmRhdGEscGFyZW50RGF0YVByb3BlcnR5OmtleTEscm9vdERhdGF9KSkpe3ZFcnJvcnMgPSB2RXJyb3JzID09PSBudWxsID8gdmFsaWRhdGUxNC5lcnJvcnMgOiB2RXJyb3JzLmNvbmNhdCh2YWxpZGF0ZTE0LmVycm9ycyk7ZXJyb3JzID0gdkVycm9ycy5sZW5ndGg7fXZhciB2YWxpZDUgPSBfZXJyczE4ID09PSBlcnJvcnM7aWYoIXZhbGlkNSl7YnJlYWs7fX19fX1lbHNlIHtjb25zdCBlcnIxMyA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvYW55T2YvMS90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwib2JqZWN0XCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIG9iamVjdFwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjEzXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjEzKTt9ZXJyb3JzKys7fX12YXIgX3ZhbGlkMCA9IF9lcnJzMTIgPT09IGVycm9yczt2YWxpZDAgPSB2YWxpZDAgfHwgX3ZhbGlkMDt9aWYoIXZhbGlkMCl7Y29uc3QgZXJyMTQgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2FueU9mXCIsa2V5d29yZDpcImFueU9mXCIscGFyYW1zOnt9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIGEgc2NoZW1hIGluIGFueU9mXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMTRdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMTQpO31lcnJvcnMrKzt2YWxpZGF0ZTEzLmVycm9ycyA9IHZFcnJvcnM7cmV0dXJuIGZhbHNlO31lbHNlIHtlcnJvcnMgPSBfZXJyczA7aWYodkVycm9ycyAhPT0gbnVsbCl7aWYoX2VycnMwKXt2RXJyb3JzLmxlbmd0aCA9IF9lcnJzMDt9ZWxzZSB7dkVycm9ycyA9IG51bGw7fX19dmFsaWRhdGUxMy5lcnJvcnMgPSB2RXJyb3JzO3JldHVybiBlcnJvcnMgPT09IDA7fWZ1bmN0aW9uIHZhbGlkYXRlMTIoZGF0YSwge2luc3RhbmNlUGF0aD1cIlwiLCBwYXJlbnREYXRhLCBwYXJlbnREYXRhUHJvcGVydHksIHJvb3REYXRhPWRhdGF9PXt9KXtsZXQgdkVycm9ycyA9IG51bGw7bGV0IGVycm9ycyA9IDA7aWYoZXJyb3JzID09PSAwKXtpZihkYXRhICYmIHR5cGVvZiBkYXRhID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSkpe2lmKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDEwKXt2YWxpZGF0ZTEyLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL21heFByb3BlcnRpZXNcIixrZXl3b3JkOlwibWF4UHJvcGVydGllc1wiLHBhcmFtczp7bGltaXQ6IDEwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gMTAgcHJvcGVydGllc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtmb3IoY29uc3Qga2V5MCBpbiBkYXRhKXtjb25zdCBfZXJyczEgPSBlcnJvcnM7Y29uc3QgX2VycnMyID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnMyKXtpZih0eXBlb2Yga2V5MCA9PT0gXCJzdHJpbmdcIil7aWYoZnVuYzIoa2V5MCkgPiA0MCl7Y29uc3QgZXJyMCA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllci9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogNDB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzXCIscHJvcGVydHlOYW1lOmtleTB9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIwKTt9ZXJyb3JzKys7fWVsc2Uge2lmKGZ1bmMyKGtleTApIDwgMSl7Y29uc3QgZXJyMSA9IHtpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvRXh0ZW5zaW9uSWRlbnRpZmllci9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAxIGNoYXJhY3RlcnNcIixwcm9wZXJ0eU5hbWU6a2V5MH07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjEpO31lcnJvcnMrKzt9ZWxzZSB7aWYoIXBhdHRlcm40LnRlc3Qoa2V5MCkpe2NvbnN0IGVycjIgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvbklkZW50aWZpZXIvcGF0dGVyblwiLGtleXdvcmQ6XCJwYXR0ZXJuXCIscGFyYW1zOntwYXR0ZXJuOiBcIl5bXFxcXHddKyRcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggcGF0dGVybiBcXFwiXCIrXCJeW1xcXFx3XSskXCIrXCJcXFwiXCIscHJvcGVydHlOYW1lOmtleTB9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMl07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIyKTt9ZXJyb3JzKys7fX19fWVsc2Uge2NvbnN0IGVycjMgPSB7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL0V4dGVuc2lvbklkZW50aWZpZXIvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIixwcm9wZXJ0eU5hbWU6a2V5MH07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIzXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjMpO31lcnJvcnMrKzt9fXZhciB2YWxpZDAgPSBfZXJyczEgPT09IGVycm9ycztpZighdmFsaWQwKXtjb25zdCBlcnI0ID0ge2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0eU5hbWVzXCIsa2V5d29yZDpcInByb3BlcnR5TmFtZXNcIixwYXJhbXM6e3Byb3BlcnR5TmFtZToga2V5MH0sbWVzc2FnZTpcInByb3BlcnR5IG5hbWUgbXVzdCBiZSB2YWxpZFwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjRdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNCk7fWVycm9ycysrO3ZhbGlkYXRlMTIuZXJyb3JzID0gdkVycm9ycztyZXR1cm4gZmFsc2U7YnJlYWs7fX1pZih2YWxpZDApe2Zvcihjb25zdCBrZXkxIGluIGRhdGEpe2NvbnN0IF9lcnJzNSA9IGVycm9ycztpZighKHZhbGlkYXRlMTMoZGF0YVtrZXkxXSwge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvXCIgKyBrZXkxLnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKSxwYXJlbnREYXRhOmRhdGEscGFyZW50RGF0YVByb3BlcnR5OmtleTEscm9vdERhdGF9KSkpe3ZFcnJvcnMgPSB2RXJyb3JzID09PSBudWxsID8gdmFsaWRhdGUxMy5lcnJvcnMgOiB2RXJyb3JzLmNvbmNhdCh2YWxpZGF0ZTEzLmVycm9ycyk7ZXJyb3JzID0gdkVycm9ycy5sZW5ndGg7fXZhciB2YWxpZDIgPSBfZXJyczUgPT09IGVycm9ycztpZighdmFsaWQyKXticmVhazt9fX19fWVsc2Uge3ZhbGlkYXRlMTIuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcIm9iamVjdFwifSxtZXNzYWdlOlwibXVzdCBiZSBvYmplY3RcIn1dO3JldHVybiBmYWxzZTt9fXZhbGlkYXRlMTIuZXJyb3JzID0gdkVycm9ycztyZXR1cm4gZXJyb3JzID09PSAwO31mdW5jdGlvbiB2YWxpZGF0ZTExKGRhdGEsIHtpbnN0YW5jZVBhdGg9XCJcIiwgcGFyZW50RGF0YSwgcGFyZW50RGF0YVByb3BlcnR5LCByb290RGF0YT1kYXRhfT17fSl7bGV0IHZFcnJvcnMgPSBudWxsO2xldCBlcnJvcnMgPSAwO2lmKGVycm9ycyA9PT0gMCl7aWYoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEpKXtsZXQgbWlzc2luZzA7aWYoKCgoKChkYXRhLmNoYWluSWQgPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcwID0gXCJjaGFpbklkXCIpKSB8fCAoKGRhdGEuYWRkcmVzcyA9PT0gdW5kZWZpbmVkKSAmJiAobWlzc2luZzAgPSBcImFkZHJlc3NcIikpKSB8fCAoKGRhdGEuZGVjaW1hbHMgPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcwID0gXCJkZWNpbWFsc1wiKSkpIHx8ICgoZGF0YS5uYW1lID09PSB1bmRlZmluZWQpICYmIChtaXNzaW5nMCA9IFwibmFtZVwiKSkpIHx8ICgoZGF0YS5zeW1ib2wgPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcwID0gXCJzeW1ib2xcIikpKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL3JlcXVpcmVkXCIsa2V5d29yZDpcInJlcXVpcmVkXCIscGFyYW1zOnttaXNzaW5nUHJvcGVydHk6IG1pc3NpbmcwfSxtZXNzYWdlOlwibXVzdCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5ICdcIittaXNzaW5nMCtcIidcIn1dO3JldHVybiBmYWxzZTt9ZWxzZSB7Y29uc3QgX2VycnMxID0gZXJyb3JzO2Zvcihjb25zdCBrZXkwIGluIGRhdGEpe2lmKCEoKCgoKCgoKGtleTAgPT09IFwiY2hhaW5JZFwiKSB8fCAoa2V5MCA9PT0gXCJhZGRyZXNzXCIpKSB8fCAoa2V5MCA9PT0gXCJkZWNpbWFsc1wiKSkgfHwgKGtleTAgPT09IFwibmFtZVwiKSkgfHwgKGtleTAgPT09IFwic3ltYm9sXCIpKSB8fCAoa2V5MCA9PT0gXCJsb2dvVVJJXCIpKSB8fCAoa2V5MCA9PT0gXCJ0YWdzXCIpKSB8fCAoa2V5MCA9PT0gXCJleHRlbnNpb25zXCIpKSl7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aCxzY2hlbWFQYXRoOlwiIy9hZGRpdGlvbmFsUHJvcGVydGllc1wiLGtleXdvcmQ6XCJhZGRpdGlvbmFsUHJvcGVydGllc1wiLHBhcmFtczp7YWRkaXRpb25hbFByb3BlcnR5OiBrZXkwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBhZGRpdGlvbmFsIHByb3BlcnRpZXNcIn1dO3JldHVybiBmYWxzZTticmVhazt9fWlmKF9lcnJzMSA9PT0gZXJyb3JzKXtpZihkYXRhLmNoYWluSWQgIT09IHVuZGVmaW5lZCl7bGV0IGRhdGEwID0gZGF0YS5jaGFpbklkO2NvbnN0IF9lcnJzMiA9IGVycm9ycztpZighKCgodHlwZW9mIGRhdGEwID09IFwibnVtYmVyXCIpICYmICghKGRhdGEwICUgMSkgJiYgIWlzTmFOKGRhdGEwKSkpICYmIChpc0Zpbml0ZShkYXRhMCkpKSl7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvY2hhaW5JZFwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvY2hhaW5JZC90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwiaW50ZWdlclwifSxtZXNzYWdlOlwibXVzdCBiZSBpbnRlZ2VyXCJ9XTtyZXR1cm4gZmFsc2U7fWlmKGVycm9ycyA9PT0gX2VycnMyKXtpZigodHlwZW9mIGRhdGEwID09IFwibnVtYmVyXCIpICYmIChpc0Zpbml0ZShkYXRhMCkpKXtpZihkYXRhMCA8IDEgfHwgaXNOYU4oZGF0YTApKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9jaGFpbklkXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9jaGFpbklkL21pbmltdW1cIixrZXl3b3JkOlwibWluaW11bVwiLHBhcmFtczp7Y29tcGFyaXNvbjogXCI+PVwiLCBsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgYmUgPj0gMVwifV07cmV0dXJuIGZhbHNlO319fXZhciB2YWxpZDAgPSBfZXJyczIgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fWlmKHZhbGlkMCl7aWYoZGF0YS5hZGRyZXNzICE9PSB1bmRlZmluZWQpe2xldCBkYXRhMSA9IGRhdGEuYWRkcmVzcztjb25zdCBfZXJyczQgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczQpe2lmKHR5cGVvZiBkYXRhMSA9PT0gXCJzdHJpbmdcIil7aWYoIXBhdHRlcm4xLnRlc3QoZGF0YTEpKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9hZGRyZXNzXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9hZGRyZXNzL3BhdHRlcm5cIixrZXl3b3JkOlwicGF0dGVyblwiLHBhcmFtczp7cGF0dGVybjogXCJeMHhbYS1mQS1GMC05XXs0MH0kXCJ9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIHBhdHRlcm4gXFxcIlwiK1wiXjB4W2EtZkEtRjAtOV17NDB9JFwiK1wiXFxcIlwifV07cmV0dXJuIGZhbHNlO319ZWxzZSB7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvYWRkcmVzc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvYWRkcmVzcy90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwic3RyaW5nXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIHN0cmluZ1wifV07cmV0dXJuIGZhbHNlO319dmFyIHZhbGlkMCA9IF9lcnJzNCA9PT0gZXJyb3JzO31lbHNlIHt2YXIgdmFsaWQwID0gdHJ1ZTt9aWYodmFsaWQwKXtpZihkYXRhLmRlY2ltYWxzICE9PSB1bmRlZmluZWQpe2xldCBkYXRhMiA9IGRhdGEuZGVjaW1hbHM7Y29uc3QgX2VycnM2ID0gZXJyb3JzO2lmKCEoKCh0eXBlb2YgZGF0YTIgPT0gXCJudW1iZXJcIikgJiYgKCEoZGF0YTIgJSAxKSAmJiAhaXNOYU4oZGF0YTIpKSkgJiYgKGlzRmluaXRlKGRhdGEyKSkpKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9kZWNpbWFsc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvZGVjaW1hbHMvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcImludGVnZXJcIn0sbWVzc2FnZTpcIm11c3QgYmUgaW50ZWdlclwifV07cmV0dXJuIGZhbHNlO31pZihlcnJvcnMgPT09IF9lcnJzNil7aWYoKHR5cGVvZiBkYXRhMiA9PSBcIm51bWJlclwiKSAmJiAoaXNGaW5pdGUoZGF0YTIpKSl7aWYoZGF0YTIgPiAyNTUgfHwgaXNOYU4oZGF0YTIpKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9kZWNpbWFsc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvZGVjaW1hbHMvbWF4aW11bVwiLGtleXdvcmQ6XCJtYXhpbXVtXCIscGFyYW1zOntjb21wYXJpc29uOiBcIjw9XCIsIGxpbWl0OiAyNTV9LG1lc3NhZ2U6XCJtdXN0IGJlIDw9IDI1NVwifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZihkYXRhMiA8IDAgfHwgaXNOYU4oZGF0YTIpKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9kZWNpbWFsc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvZGVjaW1hbHMvbWluaW11bVwiLGtleXdvcmQ6XCJtaW5pbXVtXCIscGFyYW1zOntjb21wYXJpc29uOiBcIj49XCIsIGxpbWl0OiAwfSxtZXNzYWdlOlwibXVzdCBiZSA+PSAwXCJ9XTtyZXR1cm4gZmFsc2U7fX19fXZhciB2YWxpZDAgPSBfZXJyczYgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fWlmKHZhbGlkMCl7aWYoZGF0YS5uYW1lICE9PSB1bmRlZmluZWQpe2xldCBkYXRhMyA9IGRhdGEubmFtZTtjb25zdCBfZXJyczggPSBlcnJvcnM7Y29uc3QgX2VycnMxMCA9IGVycm9ycztsZXQgdmFsaWQxID0gZmFsc2U7Y29uc3QgX2VycnMxMSA9IGVycm9ycztpZihcIlwiICE9PSBkYXRhMyl7Y29uc3QgZXJyMCA9IHtpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL25hbWVcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL25hbWUvYW55T2YvMC9jb25zdFwiLGtleXdvcmQ6XCJjb25zdFwiLHBhcmFtczp7YWxsb3dlZFZhbHVlOiBcIlwifSxtZXNzYWdlOlwibXVzdCBiZSBlcXVhbCB0byBjb25zdGFudFwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjBdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMCk7fWVycm9ycysrO312YXIgX3ZhbGlkMCA9IF9lcnJzMTEgPT09IGVycm9yczt2YWxpZDEgPSB2YWxpZDEgfHwgX3ZhbGlkMDtpZighdmFsaWQxKXtjb25zdCBfZXJyczEyID0gZXJyb3JzO2lmKHR5cGVvZiBkYXRhMyA9PT0gXCJzdHJpbmdcIil7aWYoIXBhdHRlcm4yLnRlc3QoZGF0YTMpKXtjb25zdCBlcnIxID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvbmFtZS9hbnlPZi8xL3BhdHRlcm5cIixrZXl3b3JkOlwicGF0dGVyblwiLHBhcmFtczp7cGF0dGVybjogXCJeWyBcXFxcUytdKyRcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggcGF0dGVybiBcXFwiXCIrXCJeWyBcXFxcUytdKyRcIitcIlxcXCJcIn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIxXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjEpO31lcnJvcnMrKzt9fXZhciBfdmFsaWQwID0gX2VycnMxMiA9PT0gZXJyb3JzO3ZhbGlkMSA9IHZhbGlkMSB8fCBfdmFsaWQwO31pZighdmFsaWQxKXtjb25zdCBlcnIyID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvbmFtZS9hbnlPZlwiLGtleXdvcmQ6XCJhbnlPZlwiLHBhcmFtczp7fSxtZXNzYWdlOlwibXVzdCBtYXRjaCBhIHNjaGVtYSBpbiBhbnlPZlwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjJdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyMik7fWVycm9ycysrO3ZhbGlkYXRlMTEuZXJyb3JzID0gdkVycm9ycztyZXR1cm4gZmFsc2U7fWVsc2Uge2Vycm9ycyA9IF9lcnJzMTA7aWYodkVycm9ycyAhPT0gbnVsbCl7aWYoX2VycnMxMCl7dkVycm9ycy5sZW5ndGggPSBfZXJyczEwO31lbHNlIHt2RXJyb3JzID0gbnVsbDt9fX1pZihlcnJvcnMgPT09IF9lcnJzOCl7aWYodHlwZW9mIGRhdGEzID09PSBcInN0cmluZ1wiKXtpZihmdW5jMihkYXRhMykgPiA0MCl7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvbmFtZS9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogNDB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzXCJ9XTtyZXR1cm4gZmFsc2U7fWVsc2Uge2lmKGZ1bmMyKGRhdGEzKSA8IDApe3ZhbGlkYXRlMTEuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL25hbWVcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL25hbWUvbWluTGVuZ3RoXCIsa2V5d29yZDpcIm1pbkxlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMCBjaGFyYWN0ZXJzXCJ9XTtyZXR1cm4gZmFsc2U7fX19ZWxzZSB7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvbmFtZS90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwic3RyaW5nXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIHN0cmluZ1wifV07cmV0dXJuIGZhbHNlO319dmFyIHZhbGlkMCA9IF9lcnJzOCA9PT0gZXJyb3JzO31lbHNlIHt2YXIgdmFsaWQwID0gdHJ1ZTt9aWYodmFsaWQwKXtpZihkYXRhLnN5bWJvbCAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTQgPSBkYXRhLnN5bWJvbDtjb25zdCBfZXJyczEzID0gZXJyb3JzO2NvbnN0IF9lcnJzMTUgPSBlcnJvcnM7bGV0IHZhbGlkMiA9IGZhbHNlO2NvbnN0IF9lcnJzMTYgPSBlcnJvcnM7aWYoXCJcIiAhPT0gZGF0YTQpe2NvbnN0IGVycjMgPSB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9zeW1ib2xcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3N5bWJvbC9hbnlPZi8wL2NvbnN0XCIsa2V5d29yZDpcImNvbnN0XCIscGFyYW1zOnthbGxvd2VkVmFsdWU6IFwiXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIGVxdWFsIHRvIGNvbnN0YW50XCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyM107fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIzKTt9ZXJyb3JzKys7fXZhciBfdmFsaWQxID0gX2VycnMxNiA9PT0gZXJyb3JzO3ZhbGlkMiA9IHZhbGlkMiB8fCBfdmFsaWQxO2lmKCF2YWxpZDIpe2NvbnN0IF9lcnJzMTcgPSBlcnJvcnM7aWYodHlwZW9mIGRhdGE0ID09PSBcInN0cmluZ1wiKXtpZighcGF0dGVybjMudGVzdChkYXRhNCkpe2NvbnN0IGVycjQgPSB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9zeW1ib2xcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3N5bWJvbC9hbnlPZi8xL3BhdHRlcm5cIixrZXl3b3JkOlwicGF0dGVyblwiLHBhcmFtczp7cGF0dGVybjogXCJeXFxcXFMrJFwifSxtZXNzYWdlOlwibXVzdCBtYXRjaCBwYXR0ZXJuIFxcXCJcIitcIl5cXFxcUyskXCIrXCJcXFwiXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI0KTt9ZXJyb3JzKys7fX12YXIgX3ZhbGlkMSA9IF9lcnJzMTcgPT09IGVycm9yczt2YWxpZDIgPSB2YWxpZDIgfHwgX3ZhbGlkMTt9aWYoIXZhbGlkMil7Y29uc3QgZXJyNSA9IHtpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3N5bWJvbFwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvc3ltYm9sL2FueU9mXCIsa2V5d29yZDpcImFueU9mXCIscGFyYW1zOnt9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIGEgc2NoZW1hIGluIGFueU9mXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNV07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI1KTt9ZXJyb3JzKys7dmFsaWRhdGUxMS5lcnJvcnMgPSB2RXJyb3JzO3JldHVybiBmYWxzZTt9ZWxzZSB7ZXJyb3JzID0gX2VycnMxNTtpZih2RXJyb3JzICE9PSBudWxsKXtpZihfZXJyczE1KXt2RXJyb3JzLmxlbmd0aCA9IF9lcnJzMTU7fWVsc2Uge3ZFcnJvcnMgPSBudWxsO319fWlmKGVycm9ycyA9PT0gX2VycnMxMyl7aWYodHlwZW9mIGRhdGE0ID09PSBcInN0cmluZ1wiKXtpZihmdW5jMihkYXRhNCkgPiAyMCl7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvc3ltYm9sXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9zeW1ib2wvbWF4TGVuZ3RoXCIsa2V5d29yZDpcIm1heExlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDIwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVyc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZihmdW5jMihkYXRhNCkgPCAwKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9zeW1ib2xcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3N5bWJvbC9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMH0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAwIGNoYXJhY3RlcnNcIn1dO3JldHVybiBmYWxzZTt9fX1lbHNlIHt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9zeW1ib2xcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3N5bWJvbC90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwic3RyaW5nXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIHN0cmluZ1wifV07cmV0dXJuIGZhbHNlO319dmFyIHZhbGlkMCA9IF9lcnJzMTMgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fWlmKHZhbGlkMCl7aWYoZGF0YS5sb2dvVVJJICE9PSB1bmRlZmluZWQpe2xldCBkYXRhNSA9IGRhdGEubG9nb1VSSTtjb25zdCBfZXJyczE4ID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnMxOCl7aWYoZXJyb3JzID09PSBfZXJyczE4KXtpZih0eXBlb2YgZGF0YTUgPT09IFwic3RyaW5nXCIpe2lmKCEoZm9ybWF0czIoZGF0YTUpKSl7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvbG9nb1VSSVwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvbG9nb1VSSS9mb3JtYXRcIixrZXl3b3JkOlwiZm9ybWF0XCIscGFyYW1zOntmb3JtYXQ6IFwidXJpXCJ9LG1lc3NhZ2U6XCJtdXN0IG1hdGNoIGZvcm1hdCBcXFwiXCIrXCJ1cmlcIitcIlxcXCJcIn1dO3JldHVybiBmYWxzZTt9fWVsc2Uge3ZhbGlkYXRlMTEuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL2xvZ29VUklcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL2xvZ29VUkkvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIn1dO3JldHVybiBmYWxzZTt9fX12YXIgdmFsaWQwID0gX2VycnMxOCA9PT0gZXJyb3JzO31lbHNlIHt2YXIgdmFsaWQwID0gdHJ1ZTt9aWYodmFsaWQwKXtpZihkYXRhLnRhZ3MgIT09IHVuZGVmaW5lZCl7bGV0IGRhdGE2ID0gZGF0YS50YWdzO2NvbnN0IF9lcnJzMjAgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczIwKXtpZihBcnJheS5pc0FycmF5KGRhdGE2KSl7aWYoZGF0YTYubGVuZ3RoID4gMTApe3ZhbGlkYXRlMTEuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RhZ3NcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3RhZ3MvbWF4SXRlbXNcIixrZXl3b3JkOlwibWF4SXRlbXNcIixwYXJhbXM6e2xpbWl0OiAxMH0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgbW9yZSB0aGFuIDEwIGl0ZW1zXCJ9XTtyZXR1cm4gZmFsc2U7fWVsc2Uge3ZhciB2YWxpZDMgPSB0cnVlO2NvbnN0IGxlbjAgPSBkYXRhNi5sZW5ndGg7Zm9yKGxldCBpMD0wOyBpMDxsZW4wOyBpMCsrKXtsZXQgZGF0YTcgPSBkYXRhNltpMF07Y29uc3QgX2VycnMyMiA9IGVycm9ycztjb25zdCBfZXJyczIzID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnMyMyl7aWYodHlwZW9mIGRhdGE3ID09PSBcInN0cmluZ1wiKXtpZihmdW5jMihkYXRhNykgPiAxMCl7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGkwLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0lkZW50aWZpZXIvbWF4TGVuZ3RoXCIsa2V5d29yZDpcIm1heExlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDEwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gMTAgY2hhcmFjdGVyc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZihmdW5jMihkYXRhNykgPCAxKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90YWdzL1wiICsgaTAsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnSWRlbnRpZmllci9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAxIGNoYXJhY3RlcnNcIn1dO3JldHVybiBmYWxzZTt9ZWxzZSB7aWYoIXBhdHRlcm40LnRlc3QoZGF0YTcpKXt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90YWdzL1wiICsgaTAsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnSWRlbnRpZmllci9wYXR0ZXJuXCIsa2V5d29yZDpcInBhdHRlcm5cIixwYXJhbXM6e3BhdHRlcm46IFwiXltcXFxcd10rJFwifSxtZXNzYWdlOlwibXVzdCBtYXRjaCBwYXR0ZXJuIFxcXCJcIitcIl5bXFxcXHddKyRcIitcIlxcXCJcIn1dO3JldHVybiBmYWxzZTt9fX19ZWxzZSB7dmFsaWRhdGUxMS5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGkwLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0lkZW50aWZpZXIvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIn1dO3JldHVybiBmYWxzZTt9fXZhciB2YWxpZDMgPSBfZXJyczIyID09PSBlcnJvcnM7aWYoIXZhbGlkMyl7YnJlYWs7fX19fWVsc2Uge3ZhbGlkYXRlMTEuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RhZ3NcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3RhZ3MvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcImFycmF5XCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIGFycmF5XCJ9XTtyZXR1cm4gZmFsc2U7fX12YXIgdmFsaWQwID0gX2VycnMyMCA9PT0gZXJyb3JzO31lbHNlIHt2YXIgdmFsaWQwID0gdHJ1ZTt9aWYodmFsaWQwKXtpZihkYXRhLmV4dGVuc2lvbnMgIT09IHVuZGVmaW5lZCl7Y29uc3QgX2VycnMyNSA9IGVycm9ycztpZighKHZhbGlkYXRlMTIoZGF0YS5leHRlbnNpb25zLCB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9leHRlbnNpb25zXCIscGFyZW50RGF0YTpkYXRhLHBhcmVudERhdGFQcm9wZXJ0eTpcImV4dGVuc2lvbnNcIixyb290RGF0YX0pKSl7dkVycm9ycyA9IHZFcnJvcnMgPT09IG51bGwgPyB2YWxpZGF0ZTEyLmVycm9ycyA6IHZFcnJvcnMuY29uY2F0KHZhbGlkYXRlMTIuZXJyb3JzKTtlcnJvcnMgPSB2RXJyb3JzLmxlbmd0aDt9dmFyIHZhbGlkMCA9IF9lcnJzMjUgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fX19fX19fX19fX1lbHNlIHt2YWxpZGF0ZTExLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJvYmplY3RcIn0sbWVzc2FnZTpcIm11c3QgYmUgb2JqZWN0XCJ9XTtyZXR1cm4gZmFsc2U7fX12YWxpZGF0ZTExLmVycm9ycyA9IHZFcnJvcnM7cmV0dXJuIGVycm9ycyA9PT0gMDt9ZnVuY3Rpb24gdmFsaWRhdGUxMChkYXRhLCB7aW5zdGFuY2VQYXRoPVwiXCIsIHBhcmVudERhdGEsIHBhcmVudERhdGFQcm9wZXJ0eSwgcm9vdERhdGE9ZGF0YX09e30pey8qIyBzb3VyY2VVUkw9XCJodHRwczovL3VuaXN3YXAub3JnL3Rva2VubGlzdC5zY2hlbWEuanNvblwiICovO2xldCB2RXJyb3JzID0gbnVsbDtsZXQgZXJyb3JzID0gMDtpZihlcnJvcnMgPT09IDApe2lmKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSl7bGV0IG1pc3NpbmcwO2lmKCgoKChkYXRhLm5hbWUgPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcwID0gXCJuYW1lXCIpKSB8fCAoKGRhdGEudGltZXN0YW1wID09PSB1bmRlZmluZWQpICYmIChtaXNzaW5nMCA9IFwidGltZXN0YW1wXCIpKSkgfHwgKChkYXRhLnZlcnNpb24gPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcwID0gXCJ2ZXJzaW9uXCIpKSkgfHwgKChkYXRhLnRva2VucyA9PT0gdW5kZWZpbmVkKSAmJiAobWlzc2luZzAgPSBcInRva2Vuc1wiKSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGgsc2NoZW1hUGF0aDpcIiMvcmVxdWlyZWRcIixrZXl3b3JkOlwicmVxdWlyZWRcIixwYXJhbXM6e21pc3NpbmdQcm9wZXJ0eTogbWlzc2luZzB9LG1lc3NhZ2U6XCJtdXN0IGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgJ1wiK21pc3NpbmcwK1wiJ1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtjb25zdCBfZXJyczEgPSBlcnJvcnM7Zm9yKGNvbnN0IGtleTAgaW4gZGF0YSl7aWYoISgoKCgoKCgoa2V5MCA9PT0gXCJuYW1lXCIpIHx8IChrZXkwID09PSBcInRpbWVzdGFtcFwiKSkgfHwgKGtleTAgPT09IFwidmVyc2lvblwiKSkgfHwgKGtleTAgPT09IFwidG9rZW5zXCIpKSB8fCAoa2V5MCA9PT0gXCJ0b2tlbk1hcFwiKSkgfHwgKGtleTAgPT09IFwia2V5d29yZHNcIikpIHx8IChrZXkwID09PSBcInRhZ3NcIikpIHx8IChrZXkwID09PSBcImxvZ29VUklcIikpKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL2FkZGl0aW9uYWxQcm9wZXJ0aWVzXCIsa2V5d29yZDpcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIscGFyYW1zOnthZGRpdGlvbmFsUHJvcGVydHk6IGtleTB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllc1wifV07cmV0dXJuIGZhbHNlO2JyZWFrO319aWYoX2VycnMxID09PSBlcnJvcnMpe2lmKGRhdGEubmFtZSAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTAgPSBkYXRhLm5hbWU7Y29uc3QgX2VycnMyID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnMyKXtpZih0eXBlb2YgZGF0YTAgPT09IFwic3RyaW5nXCIpe2lmKGZ1bmMyKGRhdGEwKSA+IDMwKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9uYW1lXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9uYW1lL21heExlbmd0aFwiLGtleXdvcmQ6XCJtYXhMZW5ndGhcIixwYXJhbXM6e2xpbWl0OiAzMH0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgbW9yZSB0aGFuIDMwIGNoYXJhY3RlcnNcIn1dO3JldHVybiBmYWxzZTt9ZWxzZSB7aWYoZnVuYzIoZGF0YTApIDwgMSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvbmFtZS9taW5MZW5ndGhcIixrZXl3b3JkOlwibWluTGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMX0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgZmV3ZXIgdGhhbiAxIGNoYXJhY3RlcnNcIn1dO3JldHVybiBmYWxzZTt9ZWxzZSB7aWYoIXBhdHRlcm4wLnRlc3QoZGF0YTApKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9uYW1lXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9uYW1lL3BhdHRlcm5cIixrZXl3b3JkOlwicGF0dGVyblwiLHBhcmFtczp7cGF0dGVybjogXCJeW1xcXFx3IF0rJFwifSxtZXNzYWdlOlwibXVzdCBtYXRjaCBwYXR0ZXJuIFxcXCJcIitcIl5bXFxcXHcgXSskXCIrXCJcXFwiXCJ9XTtyZXR1cm4gZmFsc2U7fX19fWVsc2Uge3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL25hbWVcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL25hbWUvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIn1dO3JldHVybiBmYWxzZTt9fXZhciB2YWxpZDAgPSBfZXJyczIgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fWlmKHZhbGlkMCl7aWYoZGF0YS50aW1lc3RhbXAgIT09IHVuZGVmaW5lZCl7bGV0IGRhdGExID0gZGF0YS50aW1lc3RhbXA7Y29uc3QgX2VycnM0ID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnM0KXtpZihlcnJvcnMgPT09IF9lcnJzNCl7aWYodHlwZW9mIGRhdGExID09PSBcInN0cmluZ1wiKXtpZighKGZvcm1hdHMwLnZhbGlkYXRlKGRhdGExKSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RpbWVzdGFtcFwiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvdGltZXN0YW1wL2Zvcm1hdFwiLGtleXdvcmQ6XCJmb3JtYXRcIixwYXJhbXM6e2Zvcm1hdDogXCJkYXRlLXRpbWVcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggZm9ybWF0IFxcXCJcIitcImRhdGUtdGltZVwiK1wiXFxcIlwifV07cmV0dXJuIGZhbHNlO319ZWxzZSB7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGltZXN0YW1wXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy90aW1lc3RhbXAvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIn1dO3JldHVybiBmYWxzZTt9fX12YXIgdmFsaWQwID0gX2VycnM0ID09PSBlcnJvcnM7fWVsc2Uge3ZhciB2YWxpZDAgPSB0cnVlO31pZih2YWxpZDApe2lmKGRhdGEudmVyc2lvbiAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTIgPSBkYXRhLnZlcnNpb247Y29uc3QgX2VycnM2ID0gZXJyb3JzO2NvbnN0IF9lcnJzNyA9IGVycm9ycztpZihlcnJvcnMgPT09IF9lcnJzNyl7aWYoZGF0YTIgJiYgdHlwZW9mIGRhdGEyID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTIpKXtsZXQgbWlzc2luZzE7aWYoKCgoZGF0YTIubWFqb3IgPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcxID0gXCJtYWpvclwiKSkgfHwgKChkYXRhMi5taW5vciA9PT0gdW5kZWZpbmVkKSAmJiAobWlzc2luZzEgPSBcIm1pbm9yXCIpKSkgfHwgKChkYXRhMi5wYXRjaCA9PT0gdW5kZWZpbmVkKSAmJiAobWlzc2luZzEgPSBcInBhdGNoXCIpKSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdmVyc2lvblwiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1ZlcnNpb24vcmVxdWlyZWRcIixrZXl3b3JkOlwicmVxdWlyZWRcIixwYXJhbXM6e21pc3NpbmdQcm9wZXJ0eTogbWlzc2luZzF9LG1lc3NhZ2U6XCJtdXN0IGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgJ1wiK21pc3NpbmcxK1wiJ1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtjb25zdCBfZXJyczkgPSBlcnJvcnM7Zm9yKGNvbnN0IGtleTEgaW4gZGF0YTIpe2lmKCEoKChrZXkxID09PSBcIm1ham9yXCIpIHx8IChrZXkxID09PSBcIm1pbm9yXCIpKSB8fCAoa2V5MSA9PT0gXCJwYXRjaFwiKSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3ZlcnNpb25cIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9WZXJzaW9uL2FkZGl0aW9uYWxQcm9wZXJ0aWVzXCIsa2V5d29yZDpcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIscGFyYW1zOnthZGRpdGlvbmFsUHJvcGVydHk6IGtleTF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllc1wifV07cmV0dXJuIGZhbHNlO2JyZWFrO319aWYoX2VycnM5ID09PSBlcnJvcnMpe2lmKGRhdGEyLm1ham9yICE9PSB1bmRlZmluZWQpe2xldCBkYXRhMyA9IGRhdGEyLm1ham9yO2NvbnN0IF9lcnJzMTAgPSBlcnJvcnM7aWYoISgoKHR5cGVvZiBkYXRhMyA9PSBcIm51bWJlclwiKSAmJiAoIShkYXRhMyAlIDEpICYmICFpc05hTihkYXRhMykpKSAmJiAoaXNGaW5pdGUoZGF0YTMpKSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3ZlcnNpb24vbWFqb3JcIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9WZXJzaW9uL3Byb3BlcnRpZXMvbWFqb3IvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcImludGVnZXJcIn0sbWVzc2FnZTpcIm11c3QgYmUgaW50ZWdlclwifV07cmV0dXJuIGZhbHNlO31pZihlcnJvcnMgPT09IF9lcnJzMTApe2lmKCh0eXBlb2YgZGF0YTMgPT0gXCJudW1iZXJcIikgJiYgKGlzRmluaXRlKGRhdGEzKSkpe2lmKGRhdGEzIDwgMCB8fCBpc05hTihkYXRhMykpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3ZlcnNpb24vbWFqb3JcIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9WZXJzaW9uL3Byb3BlcnRpZXMvbWFqb3IvbWluaW11bVwiLGtleXdvcmQ6XCJtaW5pbXVtXCIscGFyYW1zOntjb21wYXJpc29uOiBcIj49XCIsIGxpbWl0OiAwfSxtZXNzYWdlOlwibXVzdCBiZSA+PSAwXCJ9XTtyZXR1cm4gZmFsc2U7fX19dmFyIHZhbGlkMiA9IF9lcnJzMTAgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMiA9IHRydWU7fWlmKHZhbGlkMil7aWYoZGF0YTIubWlub3IgIT09IHVuZGVmaW5lZCl7bGV0IGRhdGE0ID0gZGF0YTIubWlub3I7Y29uc3QgX2VycnMxMiA9IGVycm9ycztpZighKCgodHlwZW9mIGRhdGE0ID09IFwibnVtYmVyXCIpICYmICghKGRhdGE0ICUgMSkgJiYgIWlzTmFOKGRhdGE0KSkpICYmIChpc0Zpbml0ZShkYXRhNCkpKSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdmVyc2lvbi9taW5vclwiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1ZlcnNpb24vcHJvcGVydGllcy9taW5vci90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwiaW50ZWdlclwifSxtZXNzYWdlOlwibXVzdCBiZSBpbnRlZ2VyXCJ9XTtyZXR1cm4gZmFsc2U7fWlmKGVycm9ycyA9PT0gX2VycnMxMil7aWYoKHR5cGVvZiBkYXRhNCA9PSBcIm51bWJlclwiKSAmJiAoaXNGaW5pdGUoZGF0YTQpKSl7aWYoZGF0YTQgPCAwIHx8IGlzTmFOKGRhdGE0KSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdmVyc2lvbi9taW5vclwiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1ZlcnNpb24vcHJvcGVydGllcy9taW5vci9taW5pbXVtXCIsa2V5d29yZDpcIm1pbmltdW1cIixwYXJhbXM6e2NvbXBhcmlzb246IFwiPj1cIiwgbGltaXQ6IDB9LG1lc3NhZ2U6XCJtdXN0IGJlID49IDBcIn1dO3JldHVybiBmYWxzZTt9fX12YXIgdmFsaWQyID0gX2VycnMxMiA9PT0gZXJyb3JzO31lbHNlIHt2YXIgdmFsaWQyID0gdHJ1ZTt9aWYodmFsaWQyKXtpZihkYXRhMi5wYXRjaCAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTUgPSBkYXRhMi5wYXRjaDtjb25zdCBfZXJyczE0ID0gZXJyb3JzO2lmKCEoKCh0eXBlb2YgZGF0YTUgPT0gXCJudW1iZXJcIikgJiYgKCEoZGF0YTUgJSAxKSAmJiAhaXNOYU4oZGF0YTUpKSkgJiYgKGlzRmluaXRlKGRhdGE1KSkpKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi92ZXJzaW9uL3BhdGNoXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVmVyc2lvbi9wcm9wZXJ0aWVzL3BhdGNoL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJpbnRlZ2VyXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIGludGVnZXJcIn1dO3JldHVybiBmYWxzZTt9aWYoZXJyb3JzID09PSBfZXJyczE0KXtpZigodHlwZW9mIGRhdGE1ID09IFwibnVtYmVyXCIpICYmIChpc0Zpbml0ZShkYXRhNSkpKXtpZihkYXRhNSA8IDAgfHwgaXNOYU4oZGF0YTUpKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi92ZXJzaW9uL3BhdGNoXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVmVyc2lvbi9wcm9wZXJ0aWVzL3BhdGNoL21pbmltdW1cIixrZXl3b3JkOlwibWluaW11bVwiLHBhcmFtczp7Y29tcGFyaXNvbjogXCI+PVwiLCBsaW1pdDogMH0sbWVzc2FnZTpcIm11c3QgYmUgPj0gMFwifV07cmV0dXJuIGZhbHNlO319fXZhciB2YWxpZDIgPSBfZXJyczE0ID09PSBlcnJvcnM7fWVsc2Uge3ZhciB2YWxpZDIgPSB0cnVlO319fX19fWVsc2Uge3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3ZlcnNpb25cIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9WZXJzaW9uL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJvYmplY3RcIn0sbWVzc2FnZTpcIm11c3QgYmUgb2JqZWN0XCJ9XTtyZXR1cm4gZmFsc2U7fX12YXIgdmFsaWQwID0gX2VycnM2ID09PSBlcnJvcnM7fWVsc2Uge3ZhciB2YWxpZDAgPSB0cnVlO31pZih2YWxpZDApe2lmKGRhdGEudG9rZW5zICE9PSB1bmRlZmluZWQpe2xldCBkYXRhNiA9IGRhdGEudG9rZW5zO2NvbnN0IF9lcnJzMTYgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczE2KXtpZihBcnJheS5pc0FycmF5KGRhdGE2KSl7aWYoZGF0YTYubGVuZ3RoID4gMTAwMDApe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3Rva2Vuc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvdG9rZW5zL21heEl0ZW1zXCIsa2V5d29yZDpcIm1heEl0ZW1zXCIscGFyYW1zOntsaW1pdDogMTAwMDB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiAxMDAwMCBpdGVtc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZihkYXRhNi5sZW5ndGggPCAxKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90b2tlbnNcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3Rva2Vucy9taW5JdGVtc1wiLGtleXdvcmQ6XCJtaW5JdGVtc1wiLHBhcmFtczp7bGltaXQ6IDF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMSBpdGVtc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHt2YXIgdmFsaWQzID0gdHJ1ZTtjb25zdCBsZW4wID0gZGF0YTYubGVuZ3RoO2ZvcihsZXQgaTA9MDsgaTA8bGVuMDsgaTArKyl7Y29uc3QgX2VycnMxOCA9IGVycm9ycztpZighKHZhbGlkYXRlMTEoZGF0YTZbaTBdLCB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90b2tlbnMvXCIgKyBpMCxwYXJlbnREYXRhOmRhdGE2LHBhcmVudERhdGFQcm9wZXJ0eTppMCxyb290RGF0YX0pKSl7dkVycm9ycyA9IHZFcnJvcnMgPT09IG51bGwgPyB2YWxpZGF0ZTExLmVycm9ycyA6IHZFcnJvcnMuY29uY2F0KHZhbGlkYXRlMTEuZXJyb3JzKTtlcnJvcnMgPSB2RXJyb3JzLmxlbmd0aDt9dmFyIHZhbGlkMyA9IF9lcnJzMTggPT09IGVycm9ycztpZighdmFsaWQzKXticmVhazt9fX19fWVsc2Uge3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3Rva2Vuc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvdG9rZW5zL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJhcnJheVwifSxtZXNzYWdlOlwibXVzdCBiZSBhcnJheVwifV07cmV0dXJuIGZhbHNlO319dmFyIHZhbGlkMCA9IF9lcnJzMTYgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fWlmKHZhbGlkMCl7aWYoZGF0YS50b2tlbk1hcCAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTggPSBkYXRhLnRva2VuTWFwO2NvbnN0IF9lcnJzMTkgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczE5KXtpZihkYXRhOCAmJiB0eXBlb2YgZGF0YTggPT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhOCkpe2lmKE9iamVjdC5rZXlzKGRhdGE4KS5sZW5ndGggPiAxMDAwMCl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdG9rZW5NYXBcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3Rva2VuTWFwL21heFByb3BlcnRpZXNcIixrZXl3b3JkOlwibWF4UHJvcGVydGllc1wiLHBhcmFtczp7bGltaXQ6IDEwMDAwfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBtb3JlIHRoYW4gMTAwMDAgcHJvcGVydGllc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZihPYmplY3Qua2V5cyhkYXRhOCkubGVuZ3RoIDwgMSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdG9rZW5NYXBcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3Rva2VuTWFwL21pblByb3BlcnRpZXNcIixrZXl3b3JkOlwibWluUHJvcGVydGllc1wiLHBhcmFtczp7bGltaXQ6IDF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMSBwcm9wZXJ0aWVzXCJ9XTtyZXR1cm4gZmFsc2U7fWVsc2Uge2Zvcihjb25zdCBrZXkyIGluIGRhdGE4KXtjb25zdCBfZXJyczIxID0gZXJyb3JzO2lmKHR5cGVvZiBrZXkyICE9PSBcInN0cmluZ1wiKXtjb25zdCBlcnIwID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdG9rZW5NYXBcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3Rva2VuTWFwL3Byb3BlcnR5TmFtZXMvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIixwcm9wZXJ0eU5hbWU6a2V5Mn07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIwXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjApO31lcnJvcnMrKzt9dmFyIHZhbGlkNCA9IF9lcnJzMjEgPT09IGVycm9ycztpZighdmFsaWQ0KXtjb25zdCBlcnIxID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdG9rZW5NYXBcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3Rva2VuTWFwL3Byb3BlcnR5TmFtZXNcIixrZXl3b3JkOlwicHJvcGVydHlOYW1lc1wiLHBhcmFtczp7cHJvcGVydHlOYW1lOiBrZXkyfSxtZXNzYWdlOlwicHJvcGVydHkgbmFtZSBtdXN0IGJlIHZhbGlkXCJ9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyMV07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIxKTt9ZXJyb3JzKys7dmFsaWRhdGUxMC5lcnJvcnMgPSB2RXJyb3JzO3JldHVybiBmYWxzZTticmVhazt9fWlmKHZhbGlkNCl7Zm9yKGNvbnN0IGtleTMgaW4gZGF0YTgpe2NvbnN0IF9lcnJzMjQgPSBlcnJvcnM7aWYoISh2YWxpZGF0ZTExKGRhdGE4W2tleTNdLCB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90b2tlbk1hcC9cIiArIGtleTMucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpLHBhcmVudERhdGE6ZGF0YTgscGFyZW50RGF0YVByb3BlcnR5OmtleTMscm9vdERhdGF9KSkpe3ZFcnJvcnMgPSB2RXJyb3JzID09PSBudWxsID8gdmFsaWRhdGUxMS5lcnJvcnMgOiB2RXJyb3JzLmNvbmNhdCh2YWxpZGF0ZTExLmVycm9ycyk7ZXJyb3JzID0gdkVycm9ycy5sZW5ndGg7fXZhciB2YWxpZDUgPSBfZXJyczI0ID09PSBlcnJvcnM7aWYoIXZhbGlkNSl7YnJlYWs7fX19fX19ZWxzZSB7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdG9rZW5NYXBcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3Rva2VuTWFwL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJvYmplY3RcIn0sbWVzc2FnZTpcIm11c3QgYmUgb2JqZWN0XCJ9XTtyZXR1cm4gZmFsc2U7fX12YXIgdmFsaWQwID0gX2VycnMxOSA9PT0gZXJyb3JzO31lbHNlIHt2YXIgdmFsaWQwID0gdHJ1ZTt9aWYodmFsaWQwKXtpZihkYXRhLmtleXdvcmRzICE9PSB1bmRlZmluZWQpe2xldCBkYXRhMTAgPSBkYXRhLmtleXdvcmRzO2NvbnN0IF9lcnJzMjUgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczI1KXtpZihBcnJheS5pc0FycmF5KGRhdGExMCkpe2lmKGRhdGExMC5sZW5ndGggPiAyMCl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIva2V5d29yZHNcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL2tleXdvcmRzL21heEl0ZW1zXCIsa2V5d29yZDpcIm1heEl0ZW1zXCIscGFyYW1zOntsaW1pdDogMjB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiAyMCBpdGVtc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHt2YXIgdmFsaWQ2ID0gdHJ1ZTtjb25zdCBsZW4xID0gZGF0YTEwLmxlbmd0aDtmb3IobGV0IGkxPTA7IGkxPGxlbjE7IGkxKyspe2xldCBkYXRhMTEgPSBkYXRhMTBbaTFdO2NvbnN0IF9lcnJzMjcgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczI3KXtpZih0eXBlb2YgZGF0YTExID09PSBcInN0cmluZ1wiKXtpZihmdW5jMihkYXRhMTEpID4gMjApe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL2tleXdvcmRzL1wiICsgaTEsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9rZXl3b3Jkcy9pdGVtcy9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMjB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzXCJ9XTtyZXR1cm4gZmFsc2U7fWVsc2Uge2lmKGZ1bmMyKGRhdGExMSkgPCAxKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9rZXl3b3Jkcy9cIiArIGkxLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMva2V5d29yZHMvaXRlbXMvbWluTGVuZ3RoXCIsa2V5d29yZDpcIm1pbkxlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMSBjaGFyYWN0ZXJzXCJ9XTtyZXR1cm4gZmFsc2U7fWVsc2Uge2lmKCFwYXR0ZXJuMC50ZXN0KGRhdGExMSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL2tleXdvcmRzL1wiICsgaTEsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9rZXl3b3Jkcy9pdGVtcy9wYXR0ZXJuXCIsa2V5d29yZDpcInBhdHRlcm5cIixwYXJhbXM6e3BhdHRlcm46IFwiXltcXFxcdyBdKyRcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggcGF0dGVybiBcXFwiXCIrXCJeW1xcXFx3IF0rJFwiK1wiXFxcIlwifV07cmV0dXJuIGZhbHNlO319fX1lbHNlIHt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9rZXl3b3Jkcy9cIiArIGkxLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMva2V5d29yZHMvaXRlbXMvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcInN0cmluZ1wifSxtZXNzYWdlOlwibXVzdCBiZSBzdHJpbmdcIn1dO3JldHVybiBmYWxzZTt9fXZhciB2YWxpZDYgPSBfZXJyczI3ID09PSBlcnJvcnM7aWYoIXZhbGlkNil7YnJlYWs7fX1pZih2YWxpZDYpe2xldCBpMiA9IGRhdGExMC5sZW5ndGg7bGV0IGowO2lmKGkyID4gMSl7Y29uc3QgaW5kaWNlczAgPSB7fTtmb3IoO2kyLS07KXtsZXQgaXRlbTAgPSBkYXRhMTBbaTJdO2lmKHR5cGVvZiBpdGVtMCAhPT0gXCJzdHJpbmdcIil7Y29udGludWU7fWlmKHR5cGVvZiBpbmRpY2VzMFtpdGVtMF0gPT0gXCJudW1iZXJcIil7ajAgPSBpbmRpY2VzMFtpdGVtMF07dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIva2V5d29yZHNcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL2tleXdvcmRzL3VuaXF1ZUl0ZW1zXCIsa2V5d29yZDpcInVuaXF1ZUl0ZW1zXCIscGFyYW1zOntpOiBpMiwgajogajB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGR1cGxpY2F0ZSBpdGVtcyAoaXRlbXMgIyMgXCIrajArXCIgYW5kIFwiK2kyK1wiIGFyZSBpZGVudGljYWwpXCJ9XTtyZXR1cm4gZmFsc2U7YnJlYWs7fWluZGljZXMwW2l0ZW0wXSA9IGkyO319fX19ZWxzZSB7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIva2V5d29yZHNcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL2tleXdvcmRzL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJhcnJheVwifSxtZXNzYWdlOlwibXVzdCBiZSBhcnJheVwifV07cmV0dXJuIGZhbHNlO319dmFyIHZhbGlkMCA9IF9lcnJzMjUgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fWlmKHZhbGlkMCl7aWYoZGF0YS50YWdzICE9PSB1bmRlZmluZWQpe2xldCBkYXRhMTIgPSBkYXRhLnRhZ3M7Y29uc3QgX2VycnMyOSA9IGVycm9ycztpZihlcnJvcnMgPT09IF9lcnJzMjkpe2lmKGRhdGExMiAmJiB0eXBlb2YgZGF0YTEyID09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTEyKSl7aWYoT2JqZWN0LmtleXMoZGF0YTEyKS5sZW5ndGggPiAyMCl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFnc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvdGFncy9tYXhQcm9wZXJ0aWVzXCIsa2V5d29yZDpcIm1heFByb3BlcnRpZXNcIixwYXJhbXM6e2xpbWl0OiAyMH0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgbW9yZSB0aGFuIDIwIHByb3BlcnRpZXNcIn1dO3JldHVybiBmYWxzZTt9ZWxzZSB7Zm9yKGNvbnN0IGtleTQgaW4gZGF0YTEyKXtjb25zdCBfZXJyczMxID0gZXJyb3JzO2NvbnN0IF9lcnJzMzIgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczMyKXtpZih0eXBlb2Yga2V5NCA9PT0gXCJzdHJpbmdcIil7aWYoZnVuYzIoa2V5NCkgPiAxMCl7Y29uc3QgZXJyMiA9IHtpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RhZ3NcIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9UYWdJZGVudGlmaWVyL21heExlbmd0aFwiLGtleXdvcmQ6XCJtYXhMZW5ndGhcIixwYXJhbXM6e2xpbWl0OiAxMH0sbWVzc2FnZTpcIm11c3QgTk9UIGhhdmUgbW9yZSB0aGFuIDEwIGNoYXJhY3RlcnNcIixwcm9wZXJ0eU5hbWU6a2V5NH07aWYodkVycm9ycyA9PT0gbnVsbCl7dkVycm9ycyA9IFtlcnIyXTt9ZWxzZSB7dkVycm9ycy5wdXNoKGVycjIpO31lcnJvcnMrKzt9ZWxzZSB7aWYoZnVuYzIoa2V5NCkgPCAxKXtjb25zdCBlcnIzID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFnc1wiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0lkZW50aWZpZXIvbWluTGVuZ3RoXCIsa2V5d29yZDpcIm1pbkxlbmd0aFwiLHBhcmFtczp7bGltaXQ6IDF9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGZld2VyIHRoYW4gMSBjaGFyYWN0ZXJzXCIscHJvcGVydHlOYW1lOmtleTR9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyM107fWVsc2Uge3ZFcnJvcnMucHVzaChlcnIzKTt9ZXJyb3JzKys7fWVsc2Uge2lmKCFwYXR0ZXJuNC50ZXN0KGtleTQpKXtjb25zdCBlcnI0ID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFnc1wiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0lkZW50aWZpZXIvcGF0dGVyblwiLGtleXdvcmQ6XCJwYXR0ZXJuXCIscGFyYW1zOntwYXR0ZXJuOiBcIl5bXFxcXHddKyRcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggcGF0dGVybiBcXFwiXCIrXCJeW1xcXFx3XSskXCIrXCJcXFwiXCIscHJvcGVydHlOYW1lOmtleTR9O2lmKHZFcnJvcnMgPT09IG51bGwpe3ZFcnJvcnMgPSBbZXJyNF07fWVsc2Uge3ZFcnJvcnMucHVzaChlcnI0KTt9ZXJyb3JzKys7fX19fWVsc2Uge2NvbnN0IGVycjUgPSB7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90YWdzXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnSWRlbnRpZmllci90eXBlXCIsa2V5d29yZDpcInR5cGVcIixwYXJhbXM6e3R5cGU6IFwic3RyaW5nXCJ9LG1lc3NhZ2U6XCJtdXN0IGJlIHN0cmluZ1wiLHByb3BlcnR5TmFtZTprZXk0fTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjVdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNSk7fWVycm9ycysrO319dmFyIHZhbGlkOCA9IF9lcnJzMzEgPT09IGVycm9ycztpZighdmFsaWQ4KXtjb25zdCBlcnI2ID0ge2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFnc1wiLHNjaGVtYVBhdGg6XCIjL3Byb3BlcnRpZXMvdGFncy9wcm9wZXJ0eU5hbWVzXCIsa2V5d29yZDpcInByb3BlcnR5TmFtZXNcIixwYXJhbXM6e3Byb3BlcnR5TmFtZToga2V5NH0sbWVzc2FnZTpcInByb3BlcnR5IG5hbWUgbXVzdCBiZSB2YWxpZFwifTtpZih2RXJyb3JzID09PSBudWxsKXt2RXJyb3JzID0gW2VycjZdO31lbHNlIHt2RXJyb3JzLnB1c2goZXJyNik7fWVycm9ycysrO3ZhbGlkYXRlMTAuZXJyb3JzID0gdkVycm9ycztyZXR1cm4gZmFsc2U7YnJlYWs7fX1pZih2YWxpZDgpe2Zvcihjb25zdCBrZXk1IGluIGRhdGExMil7bGV0IGRhdGExMyA9IGRhdGExMltrZXk1XTtjb25zdCBfZXJyczM1ID0gZXJyb3JzO2NvbnN0IF9lcnJzMzYgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczM2KXtpZihkYXRhMTMgJiYgdHlwZW9mIGRhdGExMyA9PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGExMykpe2xldCBtaXNzaW5nMjtpZigoKGRhdGExMy5uYW1lID09PSB1bmRlZmluZWQpICYmIChtaXNzaW5nMiA9IFwibmFtZVwiKSkgfHwgKChkYXRhMTMuZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCkgJiYgKG1pc3NpbmcyID0gXCJkZXNjcmlwdGlvblwiKSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RhZ3MvXCIgKyBrZXk1LnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKSxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9UYWdEZWZpbml0aW9uL3JlcXVpcmVkXCIsa2V5d29yZDpcInJlcXVpcmVkXCIscGFyYW1zOnttaXNzaW5nUHJvcGVydHk6IG1pc3NpbmcyfSxtZXNzYWdlOlwibXVzdCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5ICdcIittaXNzaW5nMitcIidcIn1dO3JldHVybiBmYWxzZTt9ZWxzZSB7Y29uc3QgX2VycnMzOCA9IGVycm9ycztmb3IoY29uc3Qga2V5NiBpbiBkYXRhMTMpe2lmKCEoKGtleTYgPT09IFwibmFtZVwiKSB8fCAoa2V5NiA9PT0gXCJkZXNjcmlwdGlvblwiKSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RhZ3MvXCIgKyBrZXk1LnJlcGxhY2UoL34vZywgXCJ+MFwiKS5yZXBsYWNlKC9cXC8vZywgXCJ+MVwiKSxzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9UYWdEZWZpbml0aW9uL2FkZGl0aW9uYWxQcm9wZXJ0aWVzXCIsa2V5d29yZDpcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIscGFyYW1zOnthZGRpdGlvbmFsUHJvcGVydHk6IGtleTZ9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllc1wifV07cmV0dXJuIGZhbHNlO2JyZWFrO319aWYoX2VycnMzOCA9PT0gZXJyb3JzKXtpZihkYXRhMTMubmFtZSAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTE0ID0gZGF0YTEzLm5hbWU7Y29uc3QgX2VycnMzOSA9IGVycm9ycztpZihlcnJvcnMgPT09IF9lcnJzMzkpe2lmKHR5cGVvZiBkYXRhMTQgPT09IFwic3RyaW5nXCIpe2lmKGZ1bmMyKGRhdGExNCkgPiAyMCl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpK1wiL25hbWVcIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9UYWdEZWZpbml0aW9uL3Byb3BlcnRpZXMvbmFtZS9tYXhMZW5ndGhcIixrZXl3b3JkOlwibWF4TGVuZ3RoXCIscGFyYW1zOntsaW1pdDogMjB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzXCJ9XTtyZXR1cm4gZmFsc2U7fWVsc2Uge2lmKGZ1bmMyKGRhdGExNCkgPCAxKXt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90YWdzL1wiICsga2V5NS5yZXBsYWNlKC9+L2csIFwifjBcIikucmVwbGFjZSgvXFwvL2csIFwifjFcIikrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0RlZmluaXRpb24vcHJvcGVydGllcy9uYW1lL21pbkxlbmd0aFwiLGtleXdvcmQ6XCJtaW5MZW5ndGhcIixwYXJhbXM6e2xpbWl0OiAxfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBmZXdlciB0aGFuIDEgY2hhcmFjdGVyc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZighcGF0dGVybjEwLnRlc3QoZGF0YTE0KSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpK1wiL25hbWVcIixzY2hlbWFQYXRoOlwiIy9kZWZpbml0aW9ucy9UYWdEZWZpbml0aW9uL3Byb3BlcnRpZXMvbmFtZS9wYXR0ZXJuXCIsa2V5d29yZDpcInBhdHRlcm5cIixwYXJhbXM6e3BhdHRlcm46IFwiXlsgXFxcXHddKyRcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggcGF0dGVybiBcXFwiXCIrXCJeWyBcXFxcd10rJFwiK1wiXFxcIlwifV07cmV0dXJuIGZhbHNlO319fX1lbHNlIHt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi90YWdzL1wiICsga2V5NS5yZXBsYWNlKC9+L2csIFwifjBcIikucmVwbGFjZSgvXFwvL2csIFwifjFcIikrXCIvbmFtZVwiLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0RlZmluaXRpb24vcHJvcGVydGllcy9uYW1lL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJzdHJpbmdcIn0sbWVzc2FnZTpcIm11c3QgYmUgc3RyaW5nXCJ9XTtyZXR1cm4gZmFsc2U7fX12YXIgdmFsaWQxMiA9IF9lcnJzMzkgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMTIgPSB0cnVlO31pZih2YWxpZDEyKXtpZihkYXRhMTMuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCl7bGV0IGRhdGExNSA9IGRhdGExMy5kZXNjcmlwdGlvbjtjb25zdCBfZXJyczQxID0gZXJyb3JzO2lmKGVycm9ycyA9PT0gX2VycnM0MSl7aWYodHlwZW9mIGRhdGExNSA9PT0gXCJzdHJpbmdcIil7aWYoZnVuYzIoZGF0YTE1KSA+IDIwMCl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpK1wiL2Rlc2NyaXB0aW9uXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnRGVmaW5pdGlvbi9wcm9wZXJ0aWVzL2Rlc2NyaXB0aW9uL21heExlbmd0aFwiLGtleXdvcmQ6XCJtYXhMZW5ndGhcIixwYXJhbXM6e2xpbWl0OiAyMDB9LG1lc3NhZ2U6XCJtdXN0IE5PVCBoYXZlIG1vcmUgdGhhbiAyMDAgY2hhcmFjdGVyc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZihmdW5jMihkYXRhMTUpIDwgMSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpK1wiL2Rlc2NyaXB0aW9uXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnRGVmaW5pdGlvbi9wcm9wZXJ0aWVzL2Rlc2NyaXB0aW9uL21pbkxlbmd0aFwiLGtleXdvcmQ6XCJtaW5MZW5ndGhcIixwYXJhbXM6e2xpbWl0OiAxfSxtZXNzYWdlOlwibXVzdCBOT1QgaGF2ZSBmZXdlciB0aGFuIDEgY2hhcmFjdGVyc1wifV07cmV0dXJuIGZhbHNlO31lbHNlIHtpZighcGF0dGVybjExLnRlc3QoZGF0YTE1KSl7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpK1wiL2Rlc2NyaXB0aW9uXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnRGVmaW5pdGlvbi9wcm9wZXJ0aWVzL2Rlc2NyaXB0aW9uL3BhdHRlcm5cIixrZXl3b3JkOlwicGF0dGVyblwiLHBhcmFtczp7cGF0dGVybjogXCJeWyBcXFxcd1xcXFwuLDpdKyRcIn0sbWVzc2FnZTpcIm11c3QgbWF0Y2ggcGF0dGVybiBcXFwiXCIrXCJeWyBcXFxcd1xcXFwuLDpdKyRcIitcIlxcXCJcIn1dO3JldHVybiBmYWxzZTt9fX19ZWxzZSB7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpK1wiL2Rlc2NyaXB0aW9uXCIsc2NoZW1hUGF0aDpcIiMvZGVmaW5pdGlvbnMvVGFnRGVmaW5pdGlvbi9wcm9wZXJ0aWVzL2Rlc2NyaXB0aW9uL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJzdHJpbmdcIn0sbWVzc2FnZTpcIm11c3QgYmUgc3RyaW5nXCJ9XTtyZXR1cm4gZmFsc2U7fX12YXIgdmFsaWQxMiA9IF9lcnJzNDEgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMTIgPSB0cnVlO319fX19ZWxzZSB7dmFsaWRhdGUxMC5lcnJvcnMgPSBbe2luc3RhbmNlUGF0aDppbnN0YW5jZVBhdGgrXCIvdGFncy9cIiArIGtleTUucmVwbGFjZSgvfi9nLCBcIn4wXCIpLnJlcGxhY2UoL1xcLy9nLCBcIn4xXCIpLHNjaGVtYVBhdGg6XCIjL2RlZmluaXRpb25zL1RhZ0RlZmluaXRpb24vdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcIm9iamVjdFwifSxtZXNzYWdlOlwibXVzdCBiZSBvYmplY3RcIn1dO3JldHVybiBmYWxzZTt9fXZhciB2YWxpZDEwID0gX2VycnMzNSA9PT0gZXJyb3JzO2lmKCF2YWxpZDEwKXticmVhazt9fX19fWVsc2Uge3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL3RhZ3NcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL3RhZ3MvdHlwZVwiLGtleXdvcmQ6XCJ0eXBlXCIscGFyYW1zOnt0eXBlOiBcIm9iamVjdFwifSxtZXNzYWdlOlwibXVzdCBiZSBvYmplY3RcIn1dO3JldHVybiBmYWxzZTt9fXZhciB2YWxpZDAgPSBfZXJyczI5ID09PSBlcnJvcnM7fWVsc2Uge3ZhciB2YWxpZDAgPSB0cnVlO31pZih2YWxpZDApe2lmKGRhdGEubG9nb1VSSSAhPT0gdW5kZWZpbmVkKXtsZXQgZGF0YTE2ID0gZGF0YS5sb2dvVVJJO2NvbnN0IF9lcnJzNDMgPSBlcnJvcnM7aWYoZXJyb3JzID09PSBfZXJyczQzKXtpZihlcnJvcnMgPT09IF9lcnJzNDMpe2lmKHR5cGVvZiBkYXRhMTYgPT09IFwic3RyaW5nXCIpe2lmKCEoZm9ybWF0czIoZGF0YTE2KSkpe3ZhbGlkYXRlMTAuZXJyb3JzID0gW3tpbnN0YW5jZVBhdGg6aW5zdGFuY2VQYXRoK1wiL2xvZ29VUklcIixzY2hlbWFQYXRoOlwiIy9wcm9wZXJ0aWVzL2xvZ29VUkkvZm9ybWF0XCIsa2V5d29yZDpcImZvcm1hdFwiLHBhcmFtczp7Zm9ybWF0OiBcInVyaVwifSxtZXNzYWdlOlwibXVzdCBtYXRjaCBmb3JtYXQgXFxcIlwiK1widXJpXCIrXCJcXFwiXCJ9XTtyZXR1cm4gZmFsc2U7fX1lbHNlIHt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoOmluc3RhbmNlUGF0aCtcIi9sb2dvVVJJXCIsc2NoZW1hUGF0aDpcIiMvcHJvcGVydGllcy9sb2dvVVJJL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJzdHJpbmdcIn0sbWVzc2FnZTpcIm11c3QgYmUgc3RyaW5nXCJ9XTtyZXR1cm4gZmFsc2U7fX19dmFyIHZhbGlkMCA9IF9lcnJzNDMgPT09IGVycm9yczt9ZWxzZSB7dmFyIHZhbGlkMCA9IHRydWU7fX19fX19fX19fX1lbHNlIHt2YWxpZGF0ZTEwLmVycm9ycyA9IFt7aW5zdGFuY2VQYXRoLHNjaGVtYVBhdGg6XCIjL3R5cGVcIixrZXl3b3JkOlwidHlwZVwiLHBhcmFtczp7dHlwZTogXCJvYmplY3RcIn0sbWVzc2FnZTpcIm11c3QgYmUgb2JqZWN0XCJ9XTtyZXR1cm4gZmFsc2U7fX12YWxpZGF0ZTEwLmVycm9ycyA9IHZFcnJvcnM7cmV0dXJuIGVycm9ycyA9PT0gMDt9Il0sIm5hbWVzIjpbInZhbGlkYXRlIiwidmFsaWRhdGUxMCIsImZ1bmMyIiwicmVxdWlyZSIsImRlZmF1bHQiLCJwYXR0ZXJuMCIsIlJlZ0V4cCIsInBhdHRlcm40IiwicGF0dGVybjEwIiwicGF0dGVybjExIiwiZm9ybWF0czAiLCJmdWxsRm9ybWF0cyIsImZvcm1hdHMyIiwidXJpIiwicGF0dGVybjEiLCJwYXR0ZXJuMiIsInBhdHRlcm4zIiwidmFsaWRhdGUxNSIsImRhdGEiLCJpbnN0YW5jZVBhdGgiLCJwYXJlbnREYXRhIiwicGFyZW50RGF0YVByb3BlcnR5Iiwicm9vdERhdGEiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ2RXJyb3JzIiwiZXJyb3JzIiwiX2VycnMwIiwidmFsaWQwIiwiX2VycnMxIiwiX2VycnMzIiwidmFsaWQyIiwiX2VycnM0IiwiZXJyMCIsInNjaGVtYVBhdGgiLCJrZXl3b3JkIiwicGFyYW1zIiwibGltaXQiLCJtZXNzYWdlIiwicHVzaCIsImVycjEiLCJlcnIyIiwidHlwZSIsIl92YWxpZDEiLCJfZXJyczYiLCJlcnIzIiwiX2VycnM4IiwiaXNGaW5pdGUiLCJlcnI0IiwiX2VycnMxMCIsImVycjUiLCJlcnI2IiwiX3ZhbGlkMCIsImVycjciLCJ2YWxpZGF0ZTE0IiwiX2VycnMxMiIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImtleXMiLCJrZXkwIiwiX2VycnMxNCIsIl9lcnJzMTUiLCJlcnI4IiwicHJvcGVydHlOYW1lIiwiZXJyOSIsInRlc3QiLCJlcnIxMCIsInBhdHRlcm4iLCJlcnIxMSIsInZhbGlkMyIsImVycjEyIiwia2V5MSIsIl9lcnJzMTgiLCJyZXBsYWNlIiwiY29uY2F0IiwidmFsaWQ1IiwiZXJyMTMiLCJlcnIxNCIsInZhbGlkYXRlMTMiLCJ2YWxpZGF0ZTEyIiwiX2VycnMyIiwiX2VycnM1IiwidmFsaWRhdGUxMSIsIm1pc3NpbmcwIiwiY2hhaW5JZCIsImFkZHJlc3MiLCJkZWNpbWFscyIsIm5hbWUiLCJzeW1ib2wiLCJtaXNzaW5nUHJvcGVydHkiLCJhZGRpdGlvbmFsUHJvcGVydHkiLCJkYXRhMCIsImlzTmFOIiwiY29tcGFyaXNvbiIsImRhdGExIiwiZGF0YTIiLCJkYXRhMyIsInZhbGlkMSIsIl9lcnJzMTEiLCJhbGxvd2VkVmFsdWUiLCJkYXRhNCIsIl9lcnJzMTMiLCJfZXJyczE2IiwiX2VycnMxNyIsImxvZ29VUkkiLCJkYXRhNSIsImZvcm1hdCIsInRhZ3MiLCJkYXRhNiIsIl9lcnJzMjAiLCJsZW4wIiwiaTAiLCJkYXRhNyIsIl9lcnJzMjIiLCJfZXJyczIzIiwiZXh0ZW5zaW9ucyIsIl9lcnJzMjUiLCJ0aW1lc3RhbXAiLCJ2ZXJzaW9uIiwidG9rZW5zIiwiX2VycnM3IiwibWlzc2luZzEiLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJfZXJyczkiLCJ0b2tlbk1hcCIsImRhdGE4IiwiX2VycnMxOSIsImtleTIiLCJfZXJyczIxIiwidmFsaWQ0Iiwia2V5MyIsIl9lcnJzMjQiLCJrZXl3b3JkcyIsImRhdGExMCIsInZhbGlkNiIsImxlbjEiLCJpMSIsImRhdGExMSIsIl9lcnJzMjciLCJpMiIsImowIiwiaW5kaWNlczAiLCJpdGVtMCIsImkiLCJqIiwiZGF0YTEyIiwiX2VycnMyOSIsImtleTQiLCJfZXJyczMxIiwiX2VycnMzMiIsInZhbGlkOCIsImtleTUiLCJkYXRhMTMiLCJfZXJyczM1IiwiX2VycnMzNiIsIm1pc3NpbmcyIiwiZGVzY3JpcHRpb24iLCJfZXJyczM4Iiwia2V5NiIsImRhdGExNCIsIl9lcnJz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TUFBTSxFQUFFLENBQUE7SUFBQ1YsVUFBVSxDQUFDVSxNQUFNLEdBQUdELE9BQU8sQ0FBQTtBQUFDLElBQUEsT0FBTyxLQUFLLENBQUE7QUFBQyxHQUFDLE1BQUs7QUFBQ0MsSUFBQUEsTUFBTSxHQUFHQyxNQUFNLENBQUE7SUFBQyxJQUFHRixPQUFPLEtBQUssSUFBSSxFQUFDO0FBQUMsTUFBQSxJQUFHRSxNQUFNLEVBQUM7UUFBQ0YsT0FBTyxDQUFDRixNQUFNLEdBQUdJLE1BQU0sQ0FBQTtBQUFDLE9BQUMsTUFBSztBQUFDRixRQUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFBO0FBQUMsT0FBQTtBQUFDLEtBQUE7QUFBQyxHQUFBO0VBQUNULFVBQVUsQ0FBQ1UsTUFBTSxHQUFHRCxPQUFPLENBQUE7RUFBQyxPQUFPQyxNQUFNLEtBQUssQ0FBQyxDQUFBO0FBQUMsQ0FBQTtBQUFDLFNBQVM0QixVQUFVQSxDQUFDckMsSUFBSSxFQUFzRTtFQUFBLElBQXBFO0FBQUNDLElBQUFBLFlBQVksR0FBQyxFQUFFO0lBQUVDLFVBQVU7SUFBRUMsa0JBQWtCO0FBQUVDLElBQUFBLFFBQVEsR0FBQ0osSUFBQUE7QUFBSSxHQUFDLEdBQUFLLFNBQUEsQ0FBQUMsTUFBQSxHQUFBRCxDQUFBQSxJQUFBQSxTQUFBLENBQUFFLENBQUFBLENBQUFBLEtBQUFBLFNBQUEsR0FBQUYsU0FBQSxDQUFDLENBQUEsQ0FBQSxHQUFBLEVBQUUsQ0FBQTtFQUFFLElBQUlHLE9BQU8sR0FBRyxJQUFJLENBQUE7RUFBQyxJQUFJQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0VBQUMsTUFBTUMsTUFBTSxHQUFHRCxNQUFNLENBQUE7RUFBQyxJQUFJRSxNQUFNLEdBQUcsS0FBSyxDQUFBO0VBQUMsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUE7RUFBQyxNQUFNSSxNQUFNLEdBQUdKLE1BQU0sQ0FBQTtFQUFDLElBQUlLLE1BQU0sR0FBRyxLQUFLLENBQUE7RUFBQyxNQUFNQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQTtFQUFDLElBQUdBLE1BQU0sS0FB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
