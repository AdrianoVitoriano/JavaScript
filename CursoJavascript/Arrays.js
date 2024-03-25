_

// Combinando e cortando arrays
numbers = [1, 2, 3]
let alfhabets = ['a', 'b', 'c']
console.log(numbers.concat(alfhabets)) // [1, 2, 3, 'a', 'b', 'c']

console.log(numbers.slice(0, 2)) // [1, 2]

console.log([...numbers,...alfhabets])// Spread Operator // [1, 2, 3, 'a', 'b', 'c'] 

// Iterando um array

numbers.forEach(number => console.log(number))

numbers.forEach((number, index) => console.log(index, number))

// combinando arrays

numbers = [1, 2, 3]

console.log(numbers.join(','))// Junta os elementos do array em uma string separando por vírgula // 1,2,3

let frase = 'Olá, meu nome é Ellen'
let palavras = frase.split(' ')// Separa a string em um array // ['Olá,', 'meu', 'nome', 'é', 'Ellen']

// Map é um método que cria um novo array com os resultados da chamada de uma função para cada elemento do array

numbers = [1, 2, 3, 4, 5]

const numbersDobrados = numbers.map(number => numbers * 2)// Cria um novo array com os elementos dobrados // [2, 4, 6, 8, 10] 

// filter é um método que cria um novo array com todos os elementos que passaram no teste da função fornecida

const numbersImpares = numbers.filter(number => number % 2 !== 0) // Cria um novo array com os elementos ímpares // [1, 3, 5]

// reduce é um método que executa uma função para cada elemento do array, resultando em um único valor de retorno

const numbersSomados = numbers.reduce(numbers, accumulator => accumulator + number, 0) // Soma todos os elementos do array // 15