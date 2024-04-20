import fs from "fs";

export function createFile(file, data) {
  // Cria o arquivo JSON
  fs.writeFileSync(file, JSON.stringify(data), { encoding: "utf-8" });
}

export function readFile(file, data) {
  // Lê o arquivo JSON
  try {
    return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
  } catch {
    createFile(file, data);
    return JSON.parse(fs.readFileSync(file, { encoding: "utf-8" }));
  }
}
export function addDataFile(file, newData) {
  // Adiciona novos dados ao arquivo, substituindo o arquivo existente.
  let oldData = readFile(file, newData);
  if (oldData.length === undefined) {
    createFile(file, [oldData, newData]);
  } else {
    oldData.push(newData);
    createFile(file, oldData);
  }
  return readFile(file);
}
