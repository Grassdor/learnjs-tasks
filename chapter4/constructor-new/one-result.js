/*

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true

Такое возможно сделать при помощи "return" который
в этиъ двух функциях будет ссылаться на один
и тот же объект, как на примере ниже
*/

let obj = {
    name: 'A&B'
}
function A() {
    this.name;
    return obj;
}
function B() {
    this.name;
    return obj;
}

let a = new A();
let b = new B();

alert( a == b ); // true