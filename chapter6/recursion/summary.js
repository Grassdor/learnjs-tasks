function sumTo(n) {
    let sum = 0;

    for (let i = n; i != 0; i--) {
        
        sum += i
    }

    return sum;
}

//------------------------------------------------

function sumTo(n) {
    return (n == 1) ? n : ( n + sumTo(n - 1) ); 
};

//------------------------------------------------

function sumTo(n) {
    return ( (n + 1) / 2 ) * n;
};