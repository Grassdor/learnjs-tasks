function topSalary(salaries) {
    let topWorker = null
    let topsalary = 0
  
        for ( let [worker, salary] of Object.entries(salaries) ) {
        
            if (salary > topsalary) {
                topsalary = salary;
                topWorker = worker;
            }
        }
        
        return topWorker    
}