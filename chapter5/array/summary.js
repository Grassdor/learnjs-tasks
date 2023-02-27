function sumInput() {
    sumArray = [];
    let userInput = null
    let output = 0

    chain: while ( isFinite(userInput) ) {
        userInput = prompt('Введите число:' , '');

        if (userInput === null || userInput === '') {
            break;

        } else if ( isFinite(userInput) ) {
            sumArray.push(userInput);
            continue chain;
        }
        break
        
        }
    for (let num of sumArray) { 
        output += +num;
        
    }

    return output
}