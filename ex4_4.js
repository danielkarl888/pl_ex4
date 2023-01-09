function memoize(f) {
    return function () {
        const args = Array.prototype.slice.call(arguments);
        const key = JSON.stringify(args);


        if (!f.cache) {
            f.cache = new Map();
        }

        if (f.cache.has(key)) {
            return f.cache.get(key);
        }

        const result = f.apply(this, args);
        f.cache.set(key, result);
        return result;
    }
}

function mul(x, y) {
    console.log('mul called');
    return x * y;
}

const memoizedMul = memoize(mul);

console.log(memoizedMul(1, 2)); // prints 'mul called' and returns 2
console.log(memoizedMul(1, 2)); // returns 2 (without calling mul)
console.log(memoizedMul(3, 4)); // prints 'mul called' and returns 12
console.log(memoizedMul(3, 4)); // returns 12 (without calling mul)