import PromptSync from "prompt-sync";
const prompt = PromptSync()

function maior(a,b,c){
    if(a < b){if(b < c){return c}}
    if(c < b){return b}else return c
}
let n1 = Number(prompt('Digite o primeiro valor: '))
let n2 = Number(prompt('Digite o segundo valor: '))
let n3 = Number(prompt('Digite o terceiro valor:' ))

console.log(`O maior valor é ${maior(n1,n2,n3)}`)

// ou

let numeros = []
let qtyNum = Number(prompt('Digite a quantidades de números que deseja inserir: '))

for(let i = 0; i < qtyNum; i++){numeros.push(Number(prompt(`Digite o ${i+1} valor: `)))}

let maiorNumero = 0
for(let num of numeros){if (maiorNumero < num){maiorNumero = num}}

console.log(`O maior número é ${maiorNumero}`)