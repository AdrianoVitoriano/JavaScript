import PromptSync from "prompt-sync";
import fs from "fs";

const prompt = PromptSync()

export function createFile(file, data) {
  try{
    fs.writeFileSync(file, JSON.stringify(data), { encoding: "utf-8" });
  }catch(error){
    console.error('Erro: ', error)
  }
}
export function readFile(file) {
  try{
    return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }))
  }catch{
    let continuar = prompt('Esse arquivo não existe. Deseja criar o arquivo? (Y/N): ')
    if (continuar.toUpperCase() === 'Y'){
     createFile(file, promptData()) 
     return readFile(file)
    }
  }
}
export function promptData(){
    const data = {
        id: newId(),
        title: prompt('Qual o título da sua postagem? '),
        content: prompt('Digite o conteúdo: '),
        date: new Date ()
      }
    return data
}
function newId(){
    return Math.random().toString(32).substring(2,9)
}


