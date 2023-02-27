function ucFirst(stringInput) {
    if (stringInput == '') {
        return '';
    }
    firstLetter = stringInput[0].toUpperCase();
    stringOutput = firstLetter + stringInput.slice(1);
    
    return stringOutput;
}