import obterPessoas from "./service.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync()


console.log(await obterPessoas(prompt('Digite o nome de um personagem do starwars: ')))
//main(prompt('Digite o nome de um personagem do starwars: '));

async function main(name) {
  try {
    const result = await obterPessoas(name);
    let names = [];

    result.results.forEach(pessoa => names.push(pessoa.name));
    console.log(names);
    
  } catch (error) {
    console.error("Erro: ", error);
  }
}
