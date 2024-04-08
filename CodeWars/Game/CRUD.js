import fs from "fs";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const file = "teste.json";

//createFile(file, { text: "oi" });
console.log(readFile(file));
console.log(addDataFile(file, { text: "tchau" }));

export function createFile(file, data) {
  fs.writeFileSync(file, JSON.stringify(data), { encoding: "utf-8" });
}

export function readFile(file) {
  return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
}
export function addDataFile(file, newData) {
  let oldData = readFile(file);
  console.log(oldData.length)
  console.log(oldData)
  console.log(oldData.length === undefined);
  if (oldData.length === undefined) {
    createFile(file, [oldData, newData]);
  } else {
    oldData.push(newData)
    createFile(file, oldData);
  }
  return readFile(file);
  //createFile(file, oldData)
}
