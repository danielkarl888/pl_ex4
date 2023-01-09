// same memoize function from before
function factorial(n) {
    if (n === 0) {
      return 1;
    }
  
    if (!factorial.cache) {
      factorial.cache = {};
    }
  
    if (factorial.cache[n]) {
      console.log("return from cache", n)
      return factorial.cache[n];
    }
  
    return factorial.cache[n] = n * factorial(n - 1);
  }
console.log(factorial(8));
console.log(factorial(3));
console.log(factorial(5));