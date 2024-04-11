import PromptSync from "prompt-sync";
const prompt = PromptSync()

let pessoa = {
    nome: "Adriano",
    aniversario: new Date(2005,1,25),
    altura: null,
    peso: null
}

verNull(pessoa)

function verNull(objeto){
    let array = Object.values(objeto)

    array.forEach(value =>{
        if(value === null || value === "" || value === '' || value === " "){
        console.log("valor Nulo")
        }else{
            console.log("valor gravado")
        }
    })

}
