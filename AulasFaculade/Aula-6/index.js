import PromptSync from "prompt-sync";
import { readFile, addDataFile } from "./crud.js";
import { view, verifyCurse, verifySemestre, courseSearch } from "./view.js";
import { options } from "./options.js";

const curse = "cursos.json";
const student = "estudantes.json";
const prompt = PromptSync();

main();

function main() {
  class Estudante {
    constructor(nome, email, ra, curso, semestre) {
      (this.nome = nome),
        (this.email = email),
        (this.ra = ra),
        (this.curso = curso),
        (this.semestre = semestre);
    }
  }
  class Disciplina {
    constructor(semestre) {
      this.disciplinas = [];
    }
    newDisciplinas(semestre) {
      let j = 0;
      let sair = "";
      do {
        console.clear();
        j++;
        this.disciplinas.push(
          prompt(`Digite a ${j}ª disciplina do ${semestre}º semestre: `)
        );
        sair = prompt(`Aperte CTRL + C  se já finalizou o preenchimento:`);
      } while (sair !== null);
    }
  }
  class Curso {
    constructor(nome, semestres) {
      (this.nome = nome),
        (this.semestres = semestres),
        (this.disciplinas = new Array());
    }

    setDisciplinas() {
      for (let i = 0; i < this.semestres; i++) {
        this.disciplinas[i] = new Disciplina();
        this.disciplinas[i].newDisciplinas(i + 1);
      }
    }
    getDisciplinas(semestre = 0) {
      switch (semestre) {
        case 0:
          semestre = this.semestres;
        default:
          if (this.semestres[semestre] !== undefined) {
            semestre = this.semestres[semestre];
          }
      }
      for (let i = 0; i < semestre; i++) {
        console.table(this.disciplinas[i]);
      }
    }
  }

  let option = [];
  do {
    option[0] = options("main");
    switch (option[0]) {
      case 1:
        do {
          option[1] = options("estudante");

          switch (option[1]) {
            case 1: // Visualizar todos os estudantes
              courseSearch(student, "All");
              break;
            case 2: // Buscar estudantes
              let found = false;
              do {
                let estudante = courseSearch(
                  student,
                  "Find",
                  prompt("Digite o nome do estudante: ")
                );
                if (estudante[0] !== undefined) {
                  view(estudante, 1);
                  found = true;
                }else{console.log("Não encontramos esse aluno.")}
              } while (!found);
              break;
            case 3: // Novo estudante
              let novoEstudante = new Estudante(
                prompt("Digite o nome do estudante: "),
                prompt("Digite o e-mail: "),
                Number(prompt("Digite o RA: ")),
                verifyCurse(curse)
              );
              novoEstudante.semestre = verifySemestre(
                curse,
                novoEstudante.curso
              );
              addDataFile(student, novoEstudante);
              break;
            // case 4:
            //   break;
            case 5:
              console.log("\nVoltando...\n");
              break;
            default:
              console.log("\nErro ao escolher as opções\n");
              break;
          }
        } while (option[1] !== 5);
        break;
      case 2:
        do {
          option[1] = options("curso");

          switch (option[1]) {
            case 1: // Visualizar todos os cursos
              courseSearch(curse, "All");
              break;
            case 2: // Buscar curso
              view(
                courseSearch(curse, "Find", prompt("Digite o nome do curso: ")),
                0
              );
              break;
            case 3: // Novo curso
              let novoCurso = new Curso(
                prompt("Digite o nome do curso: "),
                Number(prompt("Digite a quantidade de semestres:"))
              );
              novoCurso.setDisciplinas();
              addDataFile(curse, novoCurso);
              break;
            // case 4: // deleta curso
            //   break;
            case 5:
              console.log("\nVoltando...\n");
              break;
            default:
              console.log("\nErro ao escolher as opções\n");
              break;
          }
        } while (option[1] !== 5);
        break;
      case 3:
        console.log("\nAté logo!\n");
        break;
      default:
        console.log("\nErro ao escolher as opções\n");
        break;
    }
  } while (option[0] !== 3);
}
