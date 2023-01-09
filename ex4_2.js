function memoize(f) {
    return function (x) {
        if (!f.cache) {
            f.cache = {};
        }

        if (f.cache[x]) {
            return f.cache[x];
        }

        return f.cache[x] = f(x);
    }
}