// Escreva uma função que us 2 números e retorna o maior entre eles.

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let n1 = Number(prompt("Digite o primeiro número: ")), n2 = Number(prompt("Digite o segundo número: "))

function maiornumero(n1, n2){
    return (n1 > n2) ? n1 : (n2 > n1) ? n2 : "Os números são iguais"
}
console.log(maiornumero(n1, n2))