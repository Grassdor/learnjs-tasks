function sum(n) {

    let output = n;
  
    function sum2(r) {
      output += r;
      return sum2;
    }
  
    sum2.toString = function() {
      return output;
    };
  
    return sum2;
  }