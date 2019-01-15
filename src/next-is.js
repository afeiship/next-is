(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.is = function (inTarget1, inTarget2) {
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.is;
  }

}());
