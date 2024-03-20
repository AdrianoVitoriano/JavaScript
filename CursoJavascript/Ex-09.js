// Obter a média a partir e um array
// 0-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let notas = []
let i = prompt('Quantas notas deseja inserir? ')
for(let j = 0; j < i; j++){
    notas[j] = Number(prompt('Insira a nota: '))
}

console.log(calcularClassificacao(notas))

function calcularClassificacao(notas){

    let classificacao = ''
    const media = calcularMedia(notas)
    if (media < 60){
        classificacao = 'F'
    }else if (media < 70){
        classificacao = 'D'
    }
    else if (media < 80){
        classificacao = 'C'
    }
    else if (media < 90){
        classificacao = 'B'
    }
    else if (media <= 100){
        classificacao = 'A'
    }else{
        classificacao = 'Erro!'
    }
    if (classificacao !== 'Erro!'){
        return `A média das notas é: ${media.toFixed(2)}. E sua classificação é: ${classificacao}`
    }else{
        return 'Erro! Nota inválida!'
    }
}

function calcularMedia(array){
    let soma = 0
    for (let nota of array){
        soma += nota
    }
    return soma/array.length
}