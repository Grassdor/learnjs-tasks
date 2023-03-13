function Rabbit(food) {

  this.food = food;
}

let rabbitWhite = new Rabbit('carrot');
let rabbitBrown = new rabbit.constructor('cabbage');

/*при условиии что мы не меняли свойство "prototype"
такой код должен сработать, если же после создания конструктора
изменить свойство "prototype", такой код уже не будет функционален

Пример подобного:*/

function Rabbit(food) {

  this.food = food;
}

Rabbit.prototype = {}

let rabbitWhite = new Rabbit('carrot');
let rabbitBrown = new rabbit.constructor('cabbage');
