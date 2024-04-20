let idades = [25, 50, 48]
console.log(idades[2]) 

let Ellen = ["Ellen","Alves Aguiar", 18, "(11) 96431-0431", ["Judy", "Zé"], {nome: "Marcos", idade: 36}, {nome: "Eloides", idade: 36}, {nome:"Stella", idade: 4}]
console.log(`Olá, ${Ellen[0]} ${Ellen[1]}. Seu pai se chama ${Ellen[5].nome}, sua mãe se chama ${Ellen[6].nome} e sua irmã se chama ${Ellen[7].nome}`) // Olá, Ellen Alves Aguiar. Seu pai se chama Marcos e sua mãe se chama Eloides.
console.log(`O nome do sua gata é ${Ellen[4][0]}, e o seu cachorro se chama ${Ellen[4][1]}`) // O nome do sua gata é Judy, e o seu cachorro se chama Zé


//Adicionando elementos ao array

let numbers = [1, 2, 3]

// Adicionando um elemento ao inicio do array

numbers.unshift(0)// Adiciona o número 0 ao ínicio do array // [0, 1, 2, 3]

// Adicionando um elemento ao meio do array

numbers.splice(1,1,4) // Adiciona o número 4 na posição 1 e remove o número 1 // [0, 4, 2, 3]

// Adricionando um elemento ao final do array

numbers.push(5) // Adiciona o número 5 ao final do array // [0, 4, 2, 3, 5]
console.log(numbers)

// encontrar elementos (primitivos) no array

console.log(numbers.indexOf(4))// Retorna o index do número 4 // 1
console.log(numbers.indexOf(10))// Retorna -1, pois o número 10 não está no array

console.log(numbers.lastIndexOf(3))// Retorna o último index do número 3 // 3

console.log(numbers.includes(4))// Retorna true, pois o número 4 está no array

// Encontrar elementos (referência) no array // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const pessoas = [
    {id: 1, nome: 'Ellen'},
    {id: 2, nome: 'Marcos'},
    {id: 3, nome: 'Eloides'},
    {id: 4, nome: 'Stella'}
]

let pessoa = pessoas.find(function(pessoa){
    return pessoa.nome === 'Ellen'
})

// remove elementos do array

numbers.pop() // Remove o último elemento do array // [0, 4, 2, 3]
numbers.shift() // Remove o primeiro elemento do array // [4, 2, 3]
numbers.splice(1,1) // Remove o elemento na posição 1 // [4, 3]

// Esvaziando um array

numbers.length = 0 // []

// let numbers = []

numbers.splice(0, numbers.length) // []

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
