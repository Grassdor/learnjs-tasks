function checkSpam(str) {
    stringLower = str.toLowerCase()
    if ( stringLower.includes ('viagra') || stringLower.includes ('xxx') ) {
        return true
    }

    return false;
}