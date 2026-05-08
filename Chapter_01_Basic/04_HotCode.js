console.log("Hello");

// Hot code refers to:Code that runs very frequently or repeatedly during program execution.
// Because it executes many times, JavaScript engines optimize it for better performance.

function add(a, b) {
    return a + b;
}
let result;
for (let i = 0; i < 10000; i++) {
    result = add(i, i + 1);
}
console.log("After 10000 calls:", result);