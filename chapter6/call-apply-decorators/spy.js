function spy(func) {
    function cache(...args) {
      cache.calls.push(args);
      return func.call(this, ...args);
    }
    cache.calls = [];
    return cache;
  }
  