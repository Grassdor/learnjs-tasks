Function.prototype.defer = function(ms) {
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
}