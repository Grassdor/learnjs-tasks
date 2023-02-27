function shuffle(array) {
    maximumRange = array.length
    i = 0;
    
    while (i != maximumRange ** maximumRange) {
    let randomIndex = Math.ceil(maximumRange - (Math.random() * (maximumRange + 1) ) );
    array.splice(randomIndex, 0, array.pop())
    i += 1;
    }
}