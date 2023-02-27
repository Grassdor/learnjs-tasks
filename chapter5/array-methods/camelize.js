function camelize(str) {
    splittedString = str.split('-');
    workWith = splittedString.slice(1);
    finalOutput = []
    
    for (let item of workWith) {
        output = item[0].toUpperCase() + item.slice(1);
        finalOutput.push(output); 
    
    };
    
    finalOutput.unshift(splittedString[0]);
    return finalOutput.join('');
}
