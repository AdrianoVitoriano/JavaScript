import PromptSync from "prompt-sync";
const prompt = PromptSync()

console.log(toCamelCase(prompt('Digite a frase: ')))


function toCamelCase(str) {
  let splitPhase = str.replaceAll("_", "-").split("-")
  let phase = ''
  for(let i = 1; i < splitPhase.length;i++){
     phase += splitPhase[i].substring(0, 1).toUpperCase() + splitPhase[i].substring(1, splitPhase[i].length)
  };
  return splitPhase[0] + phase

}
