let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

readMap = new WeakMap();
messages.map( item => readMap.set(item) );

messages.pop();
