import PromptSync from "prompt-sync";
const prompt = PromptSync()

let pessoas = []
let pessoasJSON = JSON.stringify(pessoas)
let opcao = 0
console.log('Bem-vindo(a) ao sistema de cadastro de pessoas!\nO que deseja fazer?\n')
do{

    opcao = opcoes('menu')
    switch(opcao){
        case 1:
            adicionarPessoa()
            pessoasJSON = JSON.stringify(pessoas) // Converte o array de objetos em JSON

            break
        case 2:
            pessoas = JSON.parse(pessoasJSON) // Converte o JSON em array de objetos
            listarPessoas()
            break
        case 3:
            break
        default:
            console.log('Opção inválida!')
            break
    }
}while(opcao !== 3)

function opcoes(args){
    let opcao = 0
    if(args === 'menu'){
        console.log('\n1 - Adicionar pessoa\n2 - Listar pessoas\n3 - Sair\n')
    }
    do{
        opcao = Number(prompt('Digite a opção desejada: '))
        if (typeof (opcao) === Number) {
            console.log('Digite um número válido')
        }
    } while (typeof (opcao) === Number)
    return opcao

}

function adicionarPessoa() {
    let pessoa = {
        nome: prompt('Digite o seu nome: '),
        dataNascimento: prompt('Digite a sua data de nascimento: '),
        sexo: prompt('Sexo (M/F): ', 'M/F').toUpperCase(),
        altura: Number(prompt('Digite a altura da pessoa: ')),
        peso: Number(prompt('Digite o seu peso: ')),
        rg: Number(prompt('Digite o seu RG (somente números): ')),
        cpf: Number(prompt('Digite o seu CPF(somente números): '))
    }
    pessoas.push(pessoa)
} 

function listarPessoas() {
    pessoas.forEach((i,index) => {
        console.log(`\nNome: ${pessoas[index].nome}\nData de nascimento: ${pessoas[index].dataNascimento}\nSexo: ${pessoas[index].sexo}\nAltura: ${pessoas[index].altura}\nPeso: ${pessoas[index].peso}\nRG: ${pessoas[index].rg}\nCPF: ${pessoas[index].cpf}`)
        
    });
}

