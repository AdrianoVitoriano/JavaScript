import obterPessoas from "./service.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

main(prompt("Digite o nome de um personagem do starwars: "));

async function main(nome) {
  try {
    const {results} = await obterPessoas(nome)
    const familyLars = results.filter(item => item.name.toLowerCase().indexOf('lars') !== -1)
    const names = familyLars.map(pessoa => pessoa.name)
    console.log(names)
  } catch (error) {
    console.error("Erro...  ", error); 
  }
}
