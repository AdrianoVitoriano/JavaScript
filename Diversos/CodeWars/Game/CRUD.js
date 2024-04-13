import { isAscii } from "buffer";
import fs from "fs";
import PromptSync from "prompt-sync";
import { toASCII } from "punycode";
const prompt = PromptSync();
const file = "teste.json";
const nomeJogo = "The Game"

//createFile(file, { text: "oi" });
//console.log(readFile(file));
// console.log(addDataFile(file, { text: `Isso é um teste de quebra de linha` }));

export function createFile(file, data) {
  fs.writeFileSync(file, JSON.stringify(data), { encoding: "utf-8" });
}

export function readFile(file) {
  return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
}
export function addDataFile(file, newData) {
  let oldData = readFile(file);
  if (oldData.length === undefined) {
    createFile(file, [oldData, newData]);
  } else {
    oldData.push(newData);
    createFile(file, oldData);
  }
  return readFile(file);
}
console.clear()
let asciiArt = {
  art: [],
  name: prompt
  getArt(){
    console.log('Desenhe a ascii art: ')
    for(let i = 0; i < 15; i++){
    this.art[i] = prompt()
    }
  }
}


asciiArt.getArt()

console.clear()

asciiArt = JSON.stringify(asciiArt)
console.log(`${JSON.parse(asciiArt).art}`)
showAnimation("a", 70)

export function newPerson(){

}

export function showAnimation(file, width = 32, height = 32){
  console.clear()
  header(width)
  body(width, height)
}

function header(width = 32){
  hyphen(width)
  let espaços = " ".repeat((width - nomeJogo.length)/2-1)
  console.log("|" +espaços + nomeJogo + espaços+"|")
  hyphen(width)
}
function body(width = 32, height = 32){
  for(height; height > 0;height-- ){
    let espaços = " ".repeat(width/2-1)
    console.log("|" + espaços  + espaços +"|")
  }

  hyphen(width)
}

function hyphen(width){
  console.log("-".repeat(width))
}

function underline(width){
  console.log("_".repeat(width))
}


import PromptSync from "prompt-sync";
const prompt = PromptSync()
const num = prompt("Digite o número: ")




console.log(fatorial(num))
function fatorial(num){
    let factorial = 1
    for (let i = 0; i<num.length;i++){factorial *= i+1 }
    return factorial
}