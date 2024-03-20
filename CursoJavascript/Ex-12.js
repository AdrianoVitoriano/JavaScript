//Criar um objeto endereço que contem: Rua, Cidade, Cep, exibir endereço

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
let endereco = cadastrarEndereco(prompt('Digite a sua rua: '),
 Number(
        prompt('Qual o número do seu endereço: ')),
        prompt('Digite a sua bairro: '), 
        prompt('Digite a sua cidade: '), 
        prompt('Digite o seu cep:') 
)
endereco.exibirEndereco(endereco)