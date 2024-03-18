// Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let pessoa = {
    nome: prompt("Digite o nome: "),
    idade: Number(prompt("Digite a idade: ")),
    sexo: prompt("Digite o sexo: "),
    rua: prompt("Digite o nome da rua: "),
    numero: Number(prompt("Digite o número da casa: ")),
    bairro: prompt("Digite o nome do bairro: "),
    cidade: prompt("Digite o nome da cidade: "),
    estado: prompt("Digite o nome do estado: ")

}
exibirString(pessoa)

function exibirString(objeto){
    for (let prop in objeto){
        if (typeof objeto[prop] === "string"){
            console.log(`${prop}: ${objeto[prop]}`)
        }

    }
}
