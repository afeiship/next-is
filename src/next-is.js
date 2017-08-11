(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var class2type = {};
  var javascriptType = 'Boolean Number String Function Array Date RegExp Object Error';


  //populate class2type map:
  javascriptType.split(' ').forEach(function (inName) {
    class2type['[object ' + inName + ']'] = inName.toLowerCase()
  });


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


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.is;
  }

}());
