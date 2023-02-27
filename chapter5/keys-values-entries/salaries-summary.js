function sumSalaries(salaries) {
    let summary = 0;

    for ( element of Object.values(salaries) ) {
        summary += element;
    }
    
    return summary
}