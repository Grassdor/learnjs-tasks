function filterRange(arr, a, b) {
    let anotherArray = arr.filter(item => item <= b && item >= a);
    return anotherArray
}