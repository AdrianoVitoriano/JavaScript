import PromptSync from "prompt-sync";
const prompt = PromptSync();

console.log(persistence(Number(prompt("Digite um número:"))));

function persistence(num) {
  let contador = 0;
  for (contador; num > 9; contador++) {
    let aux2 = 1;
    for (let number of `${num}`) {
      aux2 *= number;
    }
    num = aux2;
  }
  return contador;
}
