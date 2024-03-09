import PromptSync from "prompt-sync";
const prompt = PromptSync()
const Num = Number(prompt("Digite um número para qu seja feito a tabuada"))
for(let i = 1;i<=10;i++){
    console.log(`${Num}X${i}=${Num*i}`)
}