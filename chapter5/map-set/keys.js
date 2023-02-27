let map = new Map();

map.set("name", "John");

let keys = Array.from( map.keys() );


keys.push("more");

/*"map.keys" сам по себе не будет возвращать массив,
поэтому из возвращенных значений его необходимо создать*/