// cria função somar que retorna a soma de todos o múltiplos de 3 e 5 

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let num = Number(prompt("Digite um número: "))
console.log(somarMultiplos1(num))
console.log(somarMultiplos2(num))


function somarMultiplos1(num){
    let soma = 0
    for (let i = Math.floor(num/3); i > 0; i--){
        soma += i*3
    }    
    for (let i = Math.floor(num/5); i > 0; i--){
        soma += i*5
    }   
    return soma
}

function somarMultiplos2(num){
    let soma = 0
    for (let i = 0; i <= num; i++){
        if (i%3 === 0 ){
            soma += i
        }
        if (i%5 === 0){
            soma += i
        }
    }
    return soma
}
