function extractCurrencyValue(str) {
    outputString = ''
    for (let letter in str) {
        if ( isNaN(+str[letter]) ) {
            continue
        } else {
            outputString += str[letter];
        }
    }

    return Number(outputString);
}