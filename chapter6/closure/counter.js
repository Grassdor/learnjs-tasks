function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?


/*В данном случае счетчики независимы и вызов "counter2",
покажет то же самое, что и вызов "counter" выше*/