function getLastDayOfMonth(year, month) {
    let inputDate = new Date(0);
    inputDate.setFullYear(year, [month + 1], [0])

    return inputDate.getDate();
};