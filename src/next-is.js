(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.is = function(inX, inY) {
    if (inX === inY) {
      return inX !== 0 || inY !== 0 || 1 / inX === 1 / inY;
    } else {
      // NaN!==NaN SO: inX!==inX
      return inX !== inX && inY !== inY;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.is;
  }
})();
