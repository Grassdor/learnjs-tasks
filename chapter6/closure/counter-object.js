function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ?
  alert( counter.up() ); // ?
  alert( counter.down() ); // ?


/*в данной задаче переменная находится
во внутреннем окружении функции, а сама функция не меняется,
меняются только методы, следовательно вывод будет следующий:

1, 2, 1*/