import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function options(arg) {
    let optionText = (text = "Argumento sem opções") => console.log(text);
    let text;
    switch (arg) {
      case "main":
        text = `1 - Estudante \n2 - Curso \n3 - sair`;
        break;
      case "estudante":
        text = `1 - Visualizar estudantes \n2 - Buscar estudante \n3 - Novo estudante \n4 - Excluir estudante (ainda não funciona)\n5 - voltar`;
        break;
      case "curso":
        text = `1 - Visualizar cursos \n2 - Buscar curso \n3 - Novo curso \n4 - Excluir curso (ainda não funciona)\n5 - voltar`;
        break;
    }
    optionText(text);
    let option = Number(prompt("Digite o número de uma das opções acima: "));
    while (isNaN(option)) {
      optionText(text);
      option = Number(
        prompt("Opção inválida. Digite o número de uma das opções acima: ")
      );
    }
    return option;
  }
  