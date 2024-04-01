import fs from "fs"
import {promptData} from "./myFunctions.js"
import {createFile, readFile, updateFile} from "./CRUD.js"
import PromptSync from "prompt-sync"
import { type } from "os"

const prompt = PromptSync()

const nomeArquivo = prompt('Digite o nome do arquivo: ') + '.json'
const crud = {
    post: [],
    read(arquivo){
        
        this.post = (readFile(arquivo))
        return this.post
    },
    create(arquivo, data){
        this.post.push(data)
        createFile(arquivo,this.post)
    }
}
crud.read(nomeArquivo)
crud.create(nomeArquivo, promptData())
console.log(crud.read(nomeArquivo))


