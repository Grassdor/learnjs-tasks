function throttle(f, ms) {
  let timer = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (timer) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    f.apply(this, arguments);

    timer = true;

    setTimeout(function() {
      timer = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}