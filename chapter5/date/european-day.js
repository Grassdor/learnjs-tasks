function getLocalDay(date) {
    let euDays = [7, 1, 2, 3, 4, 5, 6];
    return euDays[date.getDay()];
}