function pow(x, n) {
    return ((n > 0) ? alert(x ** n) : alert('Ошибка!'))
}

let num1 = +prompt('Введите число:', '');
let num2 = +prompt('Введите степень:', '');

pow(num1, num2);