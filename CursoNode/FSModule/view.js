import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function showPosts(idPost, title, content, date, lengthWindow) {
  let underline = `|${"_".repeat(lengthWindow - 2)}|`;
  console.log(underline);
  lineBreak("Id Post:", idPost, lengthWindow);
  lineBreak("Title:", title, lengthWindow);
  lineBreak("Content:", content, lengthWindow);
  lineBreak("Date:", String(date), lengthWindow);
  console.log(underline);
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

export function searchPost(posts) {
  const option = options("searchPost");
  let post = [];
  switch (option) {
    case 1:
      let id = prompt("Digite o ID: ");
      console.log("\n");
      showWitchArray(filterPosts("id", posts, id))
      break; 
    case 2:
      let title = prompt("Digite o Title: ");
      console.log("\n");
      showWitchArray(filterPosts("title", posts, title));
      break;
    case 3:
      let content = prompt("Digite o Content: ");
      console.log("\n");
      showWitchArray(filterPosts("content", posts, content));
      break;
    case 4:
      let date = prompt("Digite o Date: ");
      console.log("\n");
      filterPosts("date", posts, date);
      break;
    case 5:
      console.log("Voltando");
      console.log("\n");
      break;
    default:
      console.log("Erro... Voltando");
      console.log("\n");
  }
}
export function options(who) {
  if (who === "searchPost") {
    console.log(
      `
1- Buscar por ID;
2- Buscar por Title;
3- Buscar por Content;
4- Buscar por Date;
5- voltar.
`
    );
  }
  if (who === "main") {
    console.log(
      `
1- Novo post;
2- Ver posts;
3- Procurar posts;
4- Criar novo arquivos;
5- voltar.
`
    );
  }
  let option = Number(prompt("Digite o número da opção desejada: "));
  do {
    if (!option || option < 1 || option > 5) {
      console.log(option);
      option = Number(prompt(`Opção inválida, escolha novamente:`));
    }
  } while (!option || option < 1 || option > 5);
  return option;
}

function filterPosts(typeSearch, posts, dataSearch) {
  let results = [];
  switch (typeSearch) {
    case "id":
      if (posts[0] === undefined) {
        if (posts.id === dataSearch) {
          return posts;
        }
      } else {
        for (let item of posts) {
          if (item.id === dataSearch) {
            return item;
          }
        }
      }
      break;
    case "title":
    if (posts[0] === undefined) {
        if (posts.title === dataSearch) {
          return posts;
        }
      } else {
        posts.forEach((item) => {
          if (item.title.includes(dataSearch)) {
            results.push(item);
          }
        });
        return results;
      }

      break;
    case "content":
      if (posts[0] === undefined) {
        if (posts.content === dataSearch) {
          return posts;
        }
      }else{
      posts.forEach((item) => {
        if (item.content.includes(dataSearch)) {
          results.push(item);
        }
      })};
      return results;
      break;
    case "date":
      console.log("Em breve... voltando.");
      break;
  }
}
function showWitchArray(post) {

  if (post != '' && post !== undefined){
  if (post[0] === undefined) {
    showPosts(post.id, post.title, post.content, post.date, 70);
  } else {
    for (let item of post) {
      showPosts(item.id, item.title, item.content, item.date, 70);
    }
  }} else{
    console.log('Nenhum resultado encontrado.')
  }
}
