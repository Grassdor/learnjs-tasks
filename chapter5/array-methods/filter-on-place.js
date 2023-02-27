function filterRangeInPlace(arr, a, b) {
    
    let targetClone = arr.filter(item => +item >= a && +item <= b);
    arr.splice( 0,(arr.length) );
    for (piece of targetClone) {
        
        arr.push(piece);
    }
}