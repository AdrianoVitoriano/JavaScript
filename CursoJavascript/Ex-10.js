// Criar uma função que exibe a quantiadde de * que aquela linha possui

import PromptSync from "prompt-sync";
const prompt = PromptSync()
const linhas = Number(prompt("Digite a quantidade de linhas: "))

criarAsteriscos(linhas)

function criarAsteriscos(linhas){

    for(let i = 1; i <= linhas; i++){
        console.log(`${('*'.repeat(i))}`)
    }
}