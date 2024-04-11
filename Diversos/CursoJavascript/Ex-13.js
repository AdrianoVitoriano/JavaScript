//Compara se um objeto é igual ao outro

import PromptSync from "prompt-sync";
const prompt = PromptSync()

function cadastrarEndereco(rua, numero, bairro, cidade, cep,){
    return {
        rua,
        numero,
        bairro,
        cidade,
        cep,
        exibirEndereco(){
            console.log( `\nRua: ${this.rua}\nNúmero: ${this.numero}\nBairro: ${this.bairro}\nCidade: ${this.cidade}\nCEP: ${this.cep}`)
        }
    }
}
console.log('Primeiro endereço')
let endereco1 = cadastrarEndereco(prompt('Digite a sua rua: '), Number(prompt('Qual o número do seu endereço: ')), prompt('Digite a sua bairro: '), prompt('Digite a sua cidade: '), prompt('Digite o seu cep:') )

console.log('Segundo endereço')
let endereco2 = cadastrarEndereco(prompt('Digite a sua rua: '), Number(prompt('Qual o número do seu endereço: ')), prompt('Digite a sua bairro: '), prompt('Digite a sua cidade: '), prompt('Digite o seu cep:') )

function saoIguais(obj1, obj2){
    if(obj1.rua !== obj2.rua && obj1.numero !== obj2.numero && obj1.bairro !== obj2.bairro && obj1.cidade !== obj2.cidade && obj1.cep !== obj2.cep){
        return "Os endereços são diferentes"
    }
    return "Os endereços são iguais"
}

console.log(saoIguais(endereco1, endereco2))