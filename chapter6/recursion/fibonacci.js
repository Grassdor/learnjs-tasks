function fib(n) {
    let fibFirst = 1;
    let fibSecond = 1;

    for (let i = 3; i <= n; i++) {
        let fibThird = fibFirst + fibSecond;
        fibFirst = fibSecond;
        fibSecond = fibThird;
    };

    return fibSecond;
}