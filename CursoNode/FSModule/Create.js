import fs from "fs";
import { createFile, readFile, promptData } from "./CRUD.js";
import PromptSync from "prompt-sync";
import { type } from "os";
import {showPosts} from "./view.js"
const prompt = PromptSync();

const nomeArquivo = prompt("Digite o nome do arquivo: ") + ".json";
const crud = {
  post: [],
  search(arquivo, id, title, content, date){
    this.read(arquivo)
    

  },
  view(arquivo){
    this.read(arquivo)
    for(let item of this.post){
      showPosts(item.id, item.title,item.content, item.date)
    }
  },
  read(arquivo) {
    this.post = readFile(arquivo);
    return this.post;
  },
  create(arquivo, data) {
    if(this.post[0] === undefined){
        this.post = [this.post,data]
    }else{
        this.post.push(data)
    }
    
    createFile(arquivo, this.post);
  },
};
crud.read(nomeArquivo);
crud.view(nomeArquivo)
crud.create(nomeArquivo, promptData());

