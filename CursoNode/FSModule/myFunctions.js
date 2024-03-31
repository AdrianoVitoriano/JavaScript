import PromptSync from "prompt-sync"
import {createFile, readFile} from "./CRUD.js"

const prompt = PromptSync()
const idArquivo = 'idArquivo.json'

export function promptData(){
    const data = {
        id: newId(),
        content: prompt('Digite o conteúdo: ')
      }
    return data
}
function newId(){
    return Math.random().toString(32).substring(2,9)
}
