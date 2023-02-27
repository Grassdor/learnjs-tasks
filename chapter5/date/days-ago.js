function getDateAgo(date, days) {
    let newDate = new Date(0);
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
}