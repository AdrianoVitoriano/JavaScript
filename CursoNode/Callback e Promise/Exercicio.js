/*
Primeiramente, crie um arquivo chamado scripts.js. Neste arquivo, iremos criar uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:

callbackSucesso() = trará uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par.
callBackError() = trará uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma).

*/
import PromptSync from "prompt-sync";
const prompt = PromptSync()

function somarNumeros(a,b){
    return new Promise((resolve,reject)=>{
        if((a+b)%2 === 0){
            return resolve({
                mensagem: "Operação concluída com sucesso.",
                soma: (a+b)
            })
        }else{
            return reject({
                mensagem: "Operação falhou.",
                soma: (a+b)
            })
        }
    })

}
main()
async function main(){
    let n1 = Number(prompt("Digite o primeiro número: "))
    let n2 = Number(prompt("Digite o segundo número: "))

    const soma = somarNumeros(n1,n2)

    console.log(soma)
}