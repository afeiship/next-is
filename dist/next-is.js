(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.is = function(inX, inY) {
    if (inX === inY) {
      return inX !== 0 || inY !== 0 || 1 / inX === 1 / inY;
    } else {
      // NaN!==NaN OR: inX!==inX
      if (isNaN(inX) && isNaN(inY)) {
        return true;
      }
      return false;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.is;
  }
})();
