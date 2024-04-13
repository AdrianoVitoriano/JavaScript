import PromptSync from "prompt-sync";
const prompt = PromptSync();
const num = prompt("Digite o número: ");

console.log(proximoMaiorNumero());

function proximoMaiorNumero() {
  const digitos = num.length;
  console.log(digitos)
  let result = 0;
  let numbers = [];

  for (let i = 0; i < digitos; i++) {
    numbers[i] = Number(num[i]);
  }
  console.log(numbers);
  for (let i = 0; i < digitos; i++) {
    console.log("primeiro for i: ", i + 1);
    for (let j = digitos; j >= 0; j--) {
      console.log("primeiro for j: ", j);
      if (numbers[j] > numbers[digitos - 1]) {
        numbers[digitos - 1] = numbers[j];
        console.log(numbers);
        result = numbers.join("");
      }
    }
    if (result > 0) {
      return result;
    }
  }
}

console.log(fatorial(Number(num)));
function fatorial(num) {
  let numbers = [];
  for (let i = 0; i < num; i++) {
    numbers[i] = Number(num);
  }
  return numbers.reduce((valueTotal, value) => (valueTotal *= value), 1);
}
