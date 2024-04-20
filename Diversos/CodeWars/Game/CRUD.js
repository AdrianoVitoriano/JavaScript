import fs from "fs";
import { showAnimation } from "./view";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const file = "game.json";
const nomeJogo = "The Game"

export function createFile(file, data) { // Cria o arquivo
  fs.writeFileSync(file, JSON.stringify(data), { encoding: "utf-8" });
}

export function readFile(file) {
  return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
}
export function addDataFile(file, newData) { // Vai adicionar novos dados ao arquivo, substituindo o arquivo existente.
  let oldData = readFile(file);
  if (oldData.length === undefined) {
    createFile(file, [oldData, newData]);
  } else {
    oldData.push(newData);
    createFile(file, oldData);
  }
  return readFile(file);
}


showAnimation("a", 70)

