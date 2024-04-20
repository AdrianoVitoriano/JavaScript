import PromptSync from "prompt-sync";
import { readFile, addDataFile } from "./crud.js";
const prompt = PromptSync();
const lengthWindow = 70;

export function courseSearch(file, type, arg) {
  let array = readFile(file);
  const results = new Array();
  switch (type) {
    case "Find":
      if (array[0] === undefined) {
        if (array.nome === arg) {
          return array;
        }
      } else {
        array.forEach((item) => {
          if (item.nome.includes(arg)) {
            results.push(item);
          }
        });
        return results;
      }
      break;
    case "All":
      if (file === "cursos.json") {
        view(array, 0);
      } else {
        view(array, 1);
      }
      break;
    default:
      console.log("Erro");
      break;
  }
}

export function view(array, type) {
  console.clear()
  array.forEach((array) => {
    underscore(lengthWindow);
    switch (type) {
      case 0:
        lineBreak("Curso:", array.nome, lengthWindow);
        array.disciplinas.forEach((array, index) => {
          dashLine(lengthWindow);
          lineBreak(`${index + 1}`, "semestre", lengthWindow);
          dashLine(lengthWindow);
          for (let i = 0; i < array.disciplinas.length; i++) {
            lineBreak("Disciplina:", array.disciplinas[i], lengthWindow);
          }
        });
        underscore(lengthWindow, "|", "|");
        console.log("\n".repeat(2));
        break;
      case 1:
        lineBreak("Estudante:", array.nome, lengthWindow);
        lineBreak("E-mail:", array.email, lengthWindow);
        lineBreak("RA:", String(array.ra), lengthWindow);
        lineBreak("Curso:", array.curso, lengthWindow);
        lineBreak("Semestre:", String(array.semestre), lengthWindow);
        const cursoEstudante = courseSearch("cursos.json","Find", array.curso);
        lineBreak(
          "Primeira matéria:",
          cursoEstudante[0].disciplinas[array.semestre-1].disciplinas[0],
          lengthWindow
        );
        lineBreak(
          "Ultima matéria:",
          cursoEstudante[0].disciplinas[array.semestre-1].disciplinas[
            cursoEstudante[0].disciplinas[array.semestre-1].disciplinas.length - 1
          ],
          lengthWindow
        );
        underscore(lengthWindow, "|", "|");
        console.log("\n".repeat(2));
        break;
      default:
        console.log("\nErro\n");
        break;
    }
  });
}

function dashLine(characters, after = "", before = "") {
  characters -= after.length + before.length;
  return console.log(after + "-".repeat(characters) + before);
}
function underscore(characters, after = "", before = "") {
  characters -= after.length + before.length;
  return console.log(after + "_".repeat(characters) + before);
}
function lineBreak(phraseInitial, phraseComplete, characters) {
  let phraseArray = phraseComplete.trim().split(" ");
  let phrase = phraseInitial;
  for (let i = 0; i < phraseArray.length; i++) {
    let phraseTest = phrase;
    if ((phraseTest += " " + phraseArray[i]).length > characters - 2) {
      console.log(
        `|${phrase.trim()}${" ".repeat(characters - phrase.trim().length - 2)}|`
      );
      phrase = phraseArray[i];
    } else {
      phrase += " " + phraseArray[i];
    }
  }
  if (phrase !== undefined) {
    console.log(
      `|${phrase.trim()}${" ".repeat(characters - phrase.trim().length - 2)}|`
    );
  }
}
export function verifyCurse(file) {
  let results;
  let found = false;
  do {
    results = courseSearch(file, "Find", prompt("Digite o nome do curso: "));
    if (results[0] == undefined) {
      console.log("\nNão encontramos nenhum curso cadastrado com esse nome. ");
    } else if (results.length > 1) {
      console.log(
        "Encontramos os resultados a seguir. \nEscolha um deles e escreva o nome completo do curso."
      );
      underscore(lengthWindow);
      results.forEach((array) => {
        lineBreak("", array.nome, lengthWindow);
      });
      underscore(lengthWindow, "|", "|");
      console.log("\n".repeat(2));
    } else if (results.length == 1) {
      return results[0].nome;
    }
  } while (!found);
}

export function verifySemestre(file, curse) {
  const cursoEstudante = courseSearch(file, "Find", curse)
  let again = true
  let semestre = Number(prompt("Digite o semestre: "))
  do{

  if(cursoEstudante[0].disciplinas[semestre-1] !== undefined){
    return semestre
  }else{
    semestre = Number(prompt("Esse semestre não existe nesse curso. Digite um semestre existente: "))
  }
  }while(again)

}
