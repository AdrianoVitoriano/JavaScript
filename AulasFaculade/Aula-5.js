function maiorQueMedia(array) {return array.filter((number) => number > array.reduce((accumulator,number) => accumulator += number,0)/array.length)}
function menorLista(array) {return Math.min(...array)}
function somarLista(array){return array.reduce((accumulator,number) => accumulator += number,0)}
function valoresMenorQue(array, limite = 20){return array.filter((number) => number < limite)}
function primeiroUltimo(array){return [array[0],array[array.length-1]]}
''
const array = [6,3,78,3,6,95,3,6,4,2]

console.log(`
Maior que a média do array:
${maiorQueMedia(array)}

Menor valor do array:
${menorLista(array)}

O valor da soma do array:
${somarLista(array)}

Valores menor que o limite (por padrão 20):
${valoresMenorQue(array)}

Primeiro e último elemento do array:
${primeiroUltimo(array)}

`)