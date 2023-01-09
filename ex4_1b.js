function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    if (!fibonacci.cache) {
        fibonacci.cache = {};
    }

    if (fibonacci.cache[n]) {
        console.log("return from cache the fib of", n)
        return fibonacci.cache[n];
    }
    console.log("calculate the fib of", n)
    return fibonacci.cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(8));
console.log(fibonacci(3));
console.log(fibonacci(5));