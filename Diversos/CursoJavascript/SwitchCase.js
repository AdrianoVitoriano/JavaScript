import PromptSync from "prompt-sync";
const prompt = PromptSync()

console.log('Dentre as opções a seguir, qual é a permissão do usuário?');
console.log('comum, gerente, diretor');
let permissao = prompt('');

switch (permissao) {
    case 'comum':
        console.log('Usuário comum');
        break;
    case 'gerente':
        console.log('Usuário gerente');
        break;
    case 'diretor':
        console.log('Usuário diretor');
        break;
    default:
        console.log('Usuário não reconhecido');
        break;
}