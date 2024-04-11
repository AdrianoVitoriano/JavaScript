//Receber uma quantidade de valores para avaliar
// Funcção exibe se cada valor é par ou impar

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let i = Number(prompt("Digite a quantidade de valores a serem avaliados: "))
let numeros = []
for (let j = 0; j<i;j++){
    numeros[j] = Number(prompt(`Digite o ${j+1}º valor: `))
}
for ( let num of numeros){
    console.log(`O número ${num} é ${(num%2) == 0 ? "par" : "ímpar"}`)
}