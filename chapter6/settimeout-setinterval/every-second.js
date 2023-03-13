function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(function output() {
        alert(current);
        if (current == to) {
            clearTimeout(timerId)
        }
        current++
        
            
    }, 1000);
    
};



function printNumbers(from, to) {
    let current = from;
    let timerId = setTimeout(function output() {
        alert(current);
        timerId = setTimeout(output, 1000);
        if (current == to) {
            clearTimeout(timerId)
        }
        current++
        
            
    }, 1000);
    
};