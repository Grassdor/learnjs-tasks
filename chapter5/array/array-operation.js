let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

middleOfArray = Math.floor(styles.length / 2);

styles[middleOfArray] = 'Классика';

alert( styles.shift() );

styles.unshift('Рэп', 'Регги');