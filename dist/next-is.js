(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.is = function(inTarget1, inTarget2) {
    if (inTarget1 === inTarget2) {
      return inTarget1 !== 0 || inTarget2 !== 0 || 1 / inTarget1 === 1 / inTarget2;
    } else {
      return inTarget1 !== inTarget1 && inTarget2 !== inTarget2;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.is;
  }
})();
