module.exports = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => {
        if (b === 0) {
            throw new Error("Division by zero")
        }
        return a / b;
    },
}