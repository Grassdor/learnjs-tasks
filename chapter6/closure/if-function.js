let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();


/*в данном примере должна быть ошибка,
поскольку функция "sayHi" находится внутри "if"
и не подлежит выполнению снаружи ветвления*/