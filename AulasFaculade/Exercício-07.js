// Crie um código que vai receber uma lista de números, encontre dentro dessa lista qual o maior valor e o menor valor, escreva esses dois valores na tel.
import PromptSync from "prompt-sync";
const prompt = PromptSync();

main();

function main() {
  console.log(
    getNumbers(
      Number(prompt(`Digite a quantidades de números que deseja inserir: `))
    )
  );
}

function getNumbers(i) {
  let numbers = [];
  for (i; i > 0; i--) {
    numbers.push(Number(prompt(`Digite o número: `)));
  }
  return `O maior número é ${Math.max(
    ...numbers
  )}, e o menor número é ${Math.min(...numbers)}`;
}
