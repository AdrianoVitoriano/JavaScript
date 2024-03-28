import axios from "axios";
const URL = `https://swapi.dev/api/people/`;

export async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);
  return response.data.results.map(pessoa => {
    return {
      nome: pessoa.name,
      peso: pessoa.height
    }
  })
}

