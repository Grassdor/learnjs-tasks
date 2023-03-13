let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // выведет "true"
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // выведет "null"
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // выведет "undefined"