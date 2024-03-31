import { error } from "console";
import PromptSync from "prompt-sync";
import fs from "fs";
import { promptData } from "./myFunctions.js";

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
    return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }).replace('[','').replace(']',''))
  }catch{
    createFile(file, promptData()) 
    return readFile(file)
  }
}
export function updateFile(file, dados){
  
}

