function unique(arr) {
    outputArr = [];
    let workArray = [];
    workArray = workArray.concat(arr);
    workArray.sort();
    
    for (element of workArray) {

        if (outputArr.at(-1) != element) {
            outputArr.push(element);

        }
    }

    return outputArr;
}