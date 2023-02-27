function getSecondsToday() {
    let today = new Date( Date.now() );
    let startToday = new Date(0);
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    startToday.setFullYear(year, [month], [day]);
    startToday.setHours(0, [0], [0], [0])
    let delta = (+today - +startToday);
    return Math.floor(delta / 1000);

}