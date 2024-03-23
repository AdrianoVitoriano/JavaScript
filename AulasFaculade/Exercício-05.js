import PromptSync from "prompt-sync";
const prompt = PromptSync()


let tabuada = (multiplicador, limite) => {
    for(let i = 0; i <= limite;i++){
        console.log(`${multiplicador}X${i} = ${multiplicador*i}`)
    }
}
tabuada(Number(prompt('Digite o multiplicador: ')),Number(prompt('Digite o limite: ')))