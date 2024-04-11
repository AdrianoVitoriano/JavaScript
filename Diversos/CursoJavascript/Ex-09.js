// Obter a média a partir e um array
// 0-59 : F
// 60-69 : D
// 70-79 : C
// 80-89 : B
// 90-100 : A

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let notas = []



console.log(calcularMedia())

function calcularClassificacao(media){
    let classificacao = ''
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

function calcularMedia(...notas){
    let i = prompt('Quantas notas deseja inserir? ')
    let soma = 0
    for(let j = 0; j < i; j++){
        let nota = Number(prompt('Insira a nota: '))
        if(!nota){
        notas[j] = nota
        soma += nota
        }else{
            console.log("isso não é um número!")
            j--
        }
    }
    return calcularClassificacao(soma)
}