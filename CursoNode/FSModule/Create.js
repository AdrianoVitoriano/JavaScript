import fs from "fs"
import {promptData} from "./myFunctions.js"
import {createFile, readFile, updateFile} from "./CRUD.js"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

const nomeArquivo = prompt('Digite o nome do arquivo: ') + '.json'
const crud = {

    read(arquivo){
        return readFile(arquivo)
    },
    create(arquivo, data){
        console.log(this.read(arquivo))
        createFile(arquivo,[this.read(arquivo), data ])
    }
}
crud.create(nomeArquivo, promptData())
console.log(crud.read(nomeArquivo))


