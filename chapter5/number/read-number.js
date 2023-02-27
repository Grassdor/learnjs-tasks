function readNumber() {
    let userInput 

    while ( !( isFinite(userInput) ) )  {
        userInput = prompt('Введите число', '');

        if ( userInput === null || userInput === "" ) {
            return null;

        } else if (isFinite(userInput)) {
            return +userInput;
        }

        continue
    }
}