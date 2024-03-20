// Cria função para mostrar os números primos

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let num = Number(prompt("Digite um número: "))
mostrarPrimos(num)

function mostrarPrimos(Number){
    for (let numero = 2; numero <= Number; numero++){
        if (verificarPrimo(numero)) console.log(numero)
    }
}

function verificarPrimo(Number){         
    for (let div = 2; div < Number; div++){
        if (Number % div === 0){
            return false
        }
        return true
    }
}