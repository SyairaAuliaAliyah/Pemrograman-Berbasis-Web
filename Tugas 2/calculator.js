const calculator = (operator, a, b) => {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? 'Tidak bisa dibagi oleh nol' : a / b;
        case '%': return a % b;
        case 'persen': return (a * b) / 100;
        default: return 'Operator tidak valid';
    }
};

console.log(calculator('+', 8, 3));   // 11
console.log(calculator('-', 25, 7));  // 18
console.log(calculator('*', 6, 5));   // 30
console.log(calculator('/', 144, 12)); // 12
console.log(calculator('%', 15, 4));  // 3
console.log(calculator('persen', 500, 20)); // 100
console.log(calculator('/', 9, 0));   // Tidak bisa dibagi oleh nol
