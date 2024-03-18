/**
 * Este script solicita ao usuário que digite uma letra e determina se é uma vogal ou uma consoante.
 * Ele utiliza um array de vogais e verifica se a letra digitada corresponde a alguma das vogais do array.
 * Se houver correspondência, define a variável 'tipo' como "vogal", caso contrário, permanece como "consoante".
 * Por fim, registra o resultado no console.
 */


import PromptSync from "prompt-sync";
const prompt = PromptSync()

const vogal = ['a','e','i','o','u']
let letra = String(prompt("Digite uma letra: "))
let tipo = "consoante"
letra = letra.toLowerCase()

for (let i = 0;i<4;i++){
    if (letra == vogal[i]){
        tipo = "vogal"
        break
    }
}
console.log(`É uma ${tipo}`)