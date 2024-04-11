import obterPessoas from "./service.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

main(prompt("Digite o nome de um personagem do starwars: "));

async function main(nome) {
  try {
    const result = await obterPessoas(nome);
    const names = result.results.map((pessoa, index) =>{ 
      return `[${index}] ${pessoa.name}`
    })
    console.log(names)
  } catch (error) {
    console.error("Erro...  ", error); 
  }
}
