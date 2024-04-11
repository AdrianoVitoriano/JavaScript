import axios from "axios";
const URL = `https://swapi.dev/api/people/`;
 async function obterPessoas(nome) {
  const url = `${URL}/?search=${nome}&format=json`;
  const response = await axios.get(url);

  return response.data;
}
/*
obterPessoas("")
  .then((resultado) => {
    console.log("Resultado: ", resultado);
  })
  .catch((error) => {
    console.error("Erro: ", error);
  });
 */
  export default obterPessoas