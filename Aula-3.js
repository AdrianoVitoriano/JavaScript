import PromptSync from "prompt-sync";

let a = 10

if(a==10){
    console.log('Entrou no if')
} else if(a==20){
console.log('Entrou no else if')
}else {
    console.log('Entrou no else')
}

let dia = "Segunda"

switch(dia){
    case "Segunda":
        console.log ('Começo da semana')
        break
    case "Sexta":
        console.log('Final de semana')
        break
    default:
        console.log ('Qualquer outro dia da semana')
}

let idade = 18

let podeDirigir = idade >=18 ? 'Pode dirigir' : 'Não pode'
console.log (podeDirigir)

for(let i = 0; i <10 ; i++){
    console.log (i)
}

let peso = 100
while (peso> 0.8){
    peso = peso *0.8
    console.log(peso)
}

let total = 0;

do{
    total = total +1
    console.log(total)
}while(total < 10)

const prompt = PromptSync()

const name = prompt("Qual o seu nome?")

console.log(`Olá, ${name}`)