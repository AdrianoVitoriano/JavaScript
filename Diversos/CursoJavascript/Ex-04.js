// Divisível por 3 => Fizz
// Divisível por 5 => Buzz
// Divisível por 3 e 5 => FizzBuzz
import PromptSync from "prompt-sync";
const prompt = PromptSync()

let num = Number(prompt("Digite um número: "))

console.log(fizzBuzz(num))
function fizzBuzz(num){
    if(isNaN(num)){
        return 'Não é um número'
    }
    if(num % 3 == 0){
        return  'Fizz'
    }
    if(num % 5 == 0){
        return 'Buzz'
    }
    if(num % 3 != 0 && num % 5 != 0){
        return  'Não é divisível por 3 ou 5'
    }
}