// Eu quero que você crie neste exercício um objeto de postagem de blog que vai conter as seguintes propriedades:
//Postagem
//Título
//Mensagem
//Autor
//Visualizações
//Comentários
//    (autor, mensagem)
//EstaAoVivo

import PromptSync from "prompt-sync";
const prompt = PromptSync()

console.log('Bem vindo ao blog!\nO que deseja fazer?\n')

let opcao = 0
var postagens = []
while (opcao !== 3) {
    
    opcao = (opcoes("menu"))
    switch (opcao) {
        case 1:
            criarPostagem()
            break
        case 2:
            exibirPostagens()

            break
        case 3:
            console.log('\nAté a próxima!')
            break
        default:
            console.log('Opção inválida!')
    }


}

function opcoes(args) {
    let opcao = 0
    if (args === "menu") {
        console.log('\n1 - Criar postagem\n2 - Exibir postagens\n3 - Sair\n')
    }
    if (args === "postagem") {
        console.log('\n1 - Criar comentario\n2 - Exibir comentarios\n3 - Sair da postagem\n')
    }
    if (args === "visualizarPostagem") {
        console.log('\n1 - Listar postagens\n2 - Sei o ID\n3 - Voltar ao menu\n')
    }
    if (args === "comentario") {
        console.log('\n1 - Criar comentario\n2 - Exibir comentarios\n3 - Sair da postagem\n')
    }
    if (args === "visualizarComentario") {
        console.log('\n1 - Listar comentarios\n2 - Sei o ID\n3 - Voltar a postagem\n')
    }
    do {
        opcao = Number(prompt('Digite a opção desejada: '))
        if (typeof (opcao) === Number) {
            console.log('Digite um número válido')
        }
    } while (typeof (opcao) === Number)

    return opcao
}



function criarPostagem() {
    let idPostagem = postagens.length + 1
    let postagem = {
        idPostagem,
        titulo: prompt('Digite o título da postagem: '),
        mensagem: prompt('Digite a mensagem da postagem: '),
        autor: prompt('Digite o autor da postagem: '),
        estaAoVivo: prompt('A postagem está ao vivo? (sim ou não) '),
        Date: new Date().toLocaleDateString(),
        visualizacoes: 0,
        adicionarVisualizacao() {
            this.visualizacoes++
        },
        comentarios: [],
        novoComentario(autor, mensagem) {
            return {
                idComentario: this.comentarios.length + 1,
                autor,
                mensagem,
                Date: new Date().toLocaleDateString()
            }
        },
    }
    postagens.push(postagem)
    console.log(`Postagem criada com sucesso! #${idPostagem}`)
    exibirPostagens()
}


function exibirPostagens() {
    let opcao
    do {
        opcao = (opcoes("visualizarPostagem"))
        switch (opcao) {
            case 1:

                listarPostagens()
                exibirPostagem(Number(prompt('Digite o ID da postagem: '))-1)
                break

            case 2:

                exibirPostagem(Number(prompt('Digite o ID da postagem: '))-1)
                break
            case 3:

                break

            default:

                console.log('\nOpção inválida!')
                break

        }
    } while (opcao !== 3)
}

function listarPostagens() {
    if (postagens.length === 0) {
        console.log('\nNão há postagens para exibir\n')

    } else {

        for (let i = 0; i < postagens.length; i++) {
            console.log(`#${i + 1} - ${postagens[i].titulo} - ${postagens[i].autor}`)
        }

    }
}
function exibirPostagem(id) {

    console.log(`\nAutor: ${postagens[id].autor}.\npublicado em: ${postagens[id].Date}.\n${postagens[id].titulo}. #${[id]}\n${postagens[id].mensagem}.\nVisualizações: ${postagens[id].visualizacoes}.\nComentários: ${postagens[id].comentarios.length}.`)
    postagens[id].adicionarVisualizacao()

    comentario(id)
}

function comentario(id) {
    let opcao = 0

    do {
        opcao = opcoes("comentario")
        switch (opcao) {
            case 1:

                criarComentario(id)
                break

            case 2:

                visualizarComentarios(id)
                break

            case 3:

                break

            default:
  
                console.log('\nOpção inválida!')

        }
    } while (opcao !== 3)
}
function criarComentario(id) {

    let autor = prompt('Digite o autor do comentário: ')
    let mensagem = prompt('Digite a mensagem do comentário: ')
    postagens[id].comentarios.push(postagens[id].novoComentario(autor, mensagem))

    return `Comentário criado com sucesso! #${postagens[id].comentarios.length}`

}
function visualizarComentarios(id){
    let opcao = 0
    do {
        opcao = opcoes("visualizarComentario")
        switch (opcao) {
            case 1:

                listarComentarios(id)
                exibirComentarios(id)
                break

            case 2:

                exibirComentarios(id)
                break

            case 3:

                break

            default:

                console.log('\nOpção inválida!')
                break
        }
    } while (opcao !== 3)
    return opcao
}
function listarComentarios(id) {

    console.log(`\nComentários da postagem #${id+1}`)

    if (postagens[id].comentarios.length === 0) {
        console.log('\nNão há comentários para exibir\n')
    } else {
        for (let i = 0; i < postagens[id].comentarios.length; i++) {
            console.log(`#${i + 1} - ${postagens[id].comentarios[i].autor} - ${postagens[id].comentarios[i].Date}`)
        }
    }
}
function exibirComentarios(id) {
    let idComentario = 0
    idComentario = Number(prompt('\nDigite o ID do comentário: '))
    console.log(`\nComentário de ${postagens[id].comentarios[idComentario - 1].autor} - ${postagens[id].comentarios[idComentario - 1].Date}\n${postagens[id].comentarios[idComentario - 1].mensagem}`)
}