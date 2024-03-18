// Operadores Arithmeticos + - * / % ++ --

let salario = 100
console.log(salario + salario) // 200 (Soma)
console.log(salario - salario) // 0 (Subtração)
console.log(salario * salario) // 10000 (Multiplicação)
console.log(salario / salario) // 1 (Divisão)
console.log(salario % salario) // 0 (Resto da divisão)
console.log(++salario) // 101 (Incremento)
console.log(--salario) // 100 (Decremento)

// Operadores de Atribuição = += -= *= /= %=

let valor = 100
console.log(valor += valor) // 200 (Soma)
valor = 100
console.log(valor -= valor) // 0 (Subtração)
valor = 100
console.log(valor *= valor) // 10000 (Multiplicação)
valor = 100
console.log(valor /= valor) // 1 (Divisão)
valor = 100
console.log(valor %= valor) // 0 (Resto da divisão)

// Operadores de Comparação == === != !== > < >= <=

let a = 10
let b = 10

console.log(a == b) // true (Comparação de valor)
console.log(a === b) // true (Comparação de valor e tipo de dado)
console.log(a != b) // false (Comparação de valor)
console.log(a !== b) // false (Comparação de valor e tipo de dado)
console.log(a > b) // false (Comparação de valor)
console.log(a < b) // false (Comparação de valor)
console.log(a >= b) // true (Comparação de valor)
console.log(a <= b) // true (Comparação de valor)

// Operadores Lógicos && || !

console.log(true && true) // true (E)
console.log(true && false) // false (E)
console.log(false && true) // false (E)
console.log(false && false) // false (E)
console.log(true || true) // true (OU)
console.log(true || false) // true (OU)
console.log(false || true) // true (OU)
console.log(false || false) // false (OU)
console.log(!true) // false (Negação)
console.log(!false) // true (Negação)

//Falsy são undefined, null, 0, false, '', NaN

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false

//Truthy são todos os outros valores

console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function(){})); // true

// Operadores Bitwise & | ^ ~ << >> >>>

