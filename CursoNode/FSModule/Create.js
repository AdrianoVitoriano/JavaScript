import { createFile, readFile, promptData } from "./CRUD.js";
import PromptSync from "prompt-sync";
import { showPosts, searchPost, options } from "./view.js";
const prompt = PromptSync();
const crud = {
  post: [],
  search(arquivo) {
    this.read(arquivo);
    const search = searchPost(this.post);
    return search;
  },
  view(arquivo) {
    this.read(arquivo);
    if (this.post[0] === undefined) {
      showPosts(this.post.id, this.post.title, this.post.content, this.post.date, 70);
    } else {
      for (let item of this.post) {
        showPosts(item.id, item.title, item.content, item.date, 70);
      }
    }
  },
  read(arquivo) {
    this.post = readFile(arquivo);
    return this.post;
  },
  create(arquivo) {
    this.read(arquivo);
    if (this.post[0] === undefined) {
      this.post = [this.post, promptData()];
    } else {
      this.post.push(promptData());
    }
    createFile(arquivo, this.post);
  },
};
async function main() {
  let nomeArquivo = prompt("Digite o nome do arquivo: ") + ".json";
  console.log("\n");
  let option;
  do {
    option = options("main");
    switch (option) {
      case 1:
        crud.create(nomeArquivo);
        break;
      case 2:
        crud.view(nomeArquivo);
        break;
      case 3:
        crud.search(nomeArquivo);
        break;
      case 4:
        nomeArquivo = prompt("Digite o nome do arquivo: ") + ".json";
        crud.read(nomeArquivo);
        break;
      case 5:
        console.log("Saindo");
        console.log("\n");
        break;
      default:
        console.log("Erro... Saindo");
        console.log("\n");
    }
  } while (option !== 5);
}

main();

//crud.read(nomeArquivo)
//crud.search(nomeArquivo)
//crud.view(nomeArquivo)
//crud.create(nomeArquivo, promptData());
