function Calculator(operation, func) {
    let operatorBase = [ ['+', (a, b) => a + b],
                         ['-', (a, b) => a - b], ];
    
    this.calculate = function(operation) {
        splittedOp = operation.split(' ');
        for (page of operatorBase) {
            if (splittedOp[1] === page[0]) {
              return page[1](+splittedOp[0], +splittedOp[2])
            } 
        }
    }

    this.addMethod = function(operation,func) {
      newOption = [operation, func];
        operatorBase.push(newOption);

    }
}