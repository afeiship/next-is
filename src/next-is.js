(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.is = function (inTarget, inType) {
    if (inTarget && inTarget.is) {
      return inTarget.is(inType);
    } else {
      if (typeof inType === 'string') {
        switch (inType) {
          case 'undefined':
            return inTarget === undefined;
          case 'null':
            return inTarget === null;
          case 'nan':
            return isNaN(inTarget);
          case 'object':
            return nx.isObject(inTarget);
          case 'plain':
            return nx.isPlainObject(inTarget);
          case 'string':
          case 'boolean':
          case 'number':
          case 'function':
            return typeof(inTarget) === inType;
          case 'array':
            return nx.isArray(inTarget);
          default:
            return toString(inTarget).toLowerCase().slice(8, -1) === inType;
        }
      } else if (typeof inType === 'function') {
        return inTarget instanceof inType;
      }
    }
  };


  nx.isUndefined = function (inObj) {
    return inObj === undefined;
  };

  nx.isNull = function (inObj) {
    return inObj === null;
  };

  nx.isNil = function (inObj) {
    return inObj == null;
  };

  nx.isNumber = function (inObj) {
    return !isNaN(inObj) && typeof(inObj) == 'number';
  };

  nx.isBoolean = function (inObj) {
    return typeof(inObj) == 'boolean';
  };

  nx.isString = function (inObj) {
    return typeof(inObj) == 'string';
  };

  nx.isArray = Array.isArray || function (inObj) {
      return inObj instanceof Array;
    };

  nx.isArrayLike = function (inObj) {
    return typeof inObj.length == 'number';
  };

  nx.isFunction = function (inObj) {
    return typeof(inObj) == 'function';
  };

  nx.isObject = function (inObj) {
    return nx.type(inObj) == 'object';
  };

  nx.isDocument = function (inObj) {
    return inObj != null && inObj.nodeType == 9;
  };

  nx.isWindow = function (inObj) {
    return inObj != null && inObj == inObj.global;
  };

  nx.isPlainObject = function (inObj) {
    return nx.isObject(inObj) && !nx.isWindow(inObj) && Object.getPrototypeOf(inObj) == Object.prototype;
  };

  nx.isEmptyObject = function (inObj) {
    var key;
    for (key in inObj) return false;
    return true;
  };

  nx.isServer = function () {
    return typeof module !== 'undefined' && module.exports
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.is;
    exports.isUndefined = nx.isUndefined;
    exports.isNull = nx.isNull;
    exports.isNil = nx.isNil;
    exports.isNumber = nx.isNumber;
    exports.isBoolean = nx.isBoolean;
    exports.isString = nx.isString;
    exports.isArray = nx.isArray;
    exports.isArrayLike = nx.isArrayLike;
    exports.isFunction = nx.isFunction;
    exports.isObject = nx.isObject;
    exports.isDocument = nx.isDocument;
    exports.isWindow = nx.isWindow;
    exports.isPlainObject = nx.isPlainObject;
    exports.isEmptyObject = nx.isEmptyObject;
    exports.isServer = nx.isServer;
  }

}());
