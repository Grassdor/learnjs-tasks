function debouce(f, ms) {
    
    let timer = false

    return function(...args) {

        if (timer) {
            return;
        };

        timer = true

        f.apply(this, args)
    
        setTimeout(() => timer = false, ms);
    };
  }