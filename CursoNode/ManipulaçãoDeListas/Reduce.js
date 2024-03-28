import obterPessoas from "./service.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

main(prompt("Digite o nome de um personagem do starwars: "));

async function main(nome) {
  try {
    const {results} = await obterPessoas(nome)
    const pesos = results.map(pessoa => parseInt(pessoa.height))
    console.log(pesos.reduce((peso, accumulator) => accumulator + peso ))
  } catch (error) {
    console.error("Erro...  ", error); 
  }
}
