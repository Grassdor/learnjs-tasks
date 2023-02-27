function getMaxSubSum(arr) {
    let currentRow = 0
    let newRow = 0
    
    for (let num of arr ) {
        currentRow += num;
        
        if (newRow > currentRow) {
            newRow = newRow;

        } else {
            newRow = currentRow;

        }

        if (currentRow < 0) {
            currentRow = 0;
        
        }
    }

    return newRow;
}