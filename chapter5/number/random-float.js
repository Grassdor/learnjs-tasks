function random(minimumRange, maximumRange) {
    let rangeDelta = maximumRange - minimumRange;
    return maximumRange - (Math.random() * rangeDelta)
}