import PromptSync from "prompt-sync";
const prompt = PromptSync()

let matriz = []


let rep = 0

do{
    imprimir()
    adicionarX(Number(prompt('Digite a linha: ')),Number(prompt('Digite a coluna: ')))
    rep++
}while(rep === 5)

function imprimir(){
    for(let i = 0; i<3; i++ ){
        
    }
    console.log(`
    ${matriz[0][0]}|${matriz[0][1]}|${matriz[0][2]}
    --|--|--
    ${matriz[1][0]}|${matriz[1][1]}|${matriz[1][2]}
    --|--|--
    ${matriz[2][0]}|${matriz[2][1]}|${matriz[2][2]}`)
}
function adicionarX(lin,col){
    matriz[lin][col] = 'X'
}