function memoize(f) {
    return function (x) {
        if (!f.cache) {
            f.cache = {};
        }

        if (f.cache[x]) {
            console.log("return from cache for", x)
            return f.cache[x];
        }

        return f.cache[x] = f(x);
    }
}
/*
function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * memoizedFactorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
*/
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1 || n === 2) {
        return 1;
    }

    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
}


const memoizedFibonacci = memoize(fibonacci);
/*
console.log(factorial(5)); // calls memoizedFactorial(5) and prints 120
console.log(factorial(5)); // calls memoizedFactorial(5) again and prints 120 (without recomputing)
*/
console.log(fibonacci(8)); // calls memoizedFibonacci(8) and prints 21
console.log(fibonacci(8)); // calls memoizedFibonacci(8) again and prints 21 (without recomputing)
