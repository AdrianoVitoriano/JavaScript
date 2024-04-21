import PromptSync from "prompt-sync"
import axios from "axios"
const prompt = PromptSync()


endereçoPokemon("13323035","2")


 async function endereçoPokemon(CEP, idPokemon){
    const endereco = await fetch(`https://viacep.com.br/ws/${prompt("Digite o seu CEP: ")}/json/`)
    const enderecoData = await endereco.json()
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${prompt("Digite o nome do pokemon: ")}`)

        console.log(` O endereço do ${pokemon.data.species.name}
    CEP: ${enderecoData.cep}
    Endereço: ${enderecoData.logradouro}, ${enderecoData.bairro}, ${enderecoData.localidade}-${enderecoData.uf}
    `)
}