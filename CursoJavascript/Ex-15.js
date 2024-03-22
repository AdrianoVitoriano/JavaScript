//Faixa de preço 
// é que voce crie um array de objetos de faixa de preço para que ela possa ser usado em um site igual ao mercado livre

import PromptSync from "prompt-sync";
const prompt = PromptSync()


var faixas = []
var produtos = []
console.log('Bem vindo ao site!\nO que deseja fazer?\n')
let opcao = 0
while(opcao !== 3){
    opcao = (opcoes("menu"))
    switch(opcao){
        case 1:
            criarProduto(prompt('Digite o nome do produto: '), prompt('Digite a descrição do produto: '), Number(prompt('Digite o preço do produto: ')))
            break
        case 2:
            listarProdutos()
            break
        case 3:
            console.log('\nAté a próxima!')
            break
        default:
            console.log('Opção inválida!')
    }



}


function opcoes(args){
    let opcao = 0
    if(args === 'menu'){
        console.log('\n1 - Criar produto\n2 - Listar produtos\n3 - Sair\n')
    }else if(args === 'exibirProdutos'){
        console.log('\n1 - Criar produto\n2 - Listar produtos\n3 - Listar produtos com filtro\n4 - Voltar ao menu\n')
    }else if(args === 'filtro'){
        console.log('\n1 - Filtrar por faixa de preço\n2 - Filtrar por nome\n3 - Voltar\n')
    }else if(args === 'preco'){
        console.log('\n1 - Usar faixas padrões\n2 - Criar nova faixa\n3 - Voltar\n')
    }
    do{
        opcao = Number(prompt('Digite a opção desejada: '))
        if (typeof (opcao) === Number) {
            console.log('Digite um número válido')
        }
    } while (typeof (opcao) === Number)
    return opcao

}

function criarProduto(nome,descricao ,preco) {

    let produto = {
        idProduto: produtos.length + 1,
        nome,
        descricao,
        preco,
        quantidade: 0,
    }
    produtos.push(produto)
    console.log(`Produto ${produto.nome} criado com sucesso! #${produto.idProduto}`)
    exibirProdutos()
}

function exibirProdutos() {
    let opcao = opcoes('exibirProdutos')
    switch(opcao){
        case 1:
            criarProduto(prompt('Digite o nome do produto: '), prompt('Digite a descrição do produto: '), Number(prompt('Digite o preço do produto: ')))
            break
        case 2:
            listarProdutos()
            break
        case 3:
            filtro()
            break
        case 4:
            console.log('Voltando ao menu...')
            break
        default:
            console.log('Opção inválida!')
    }
}

function listarProdutos(min, max) {
    if (min === null){console.log(typeof min + 'min')}
    if (max === null){console.log(typeof max + 'max')}
    if (produtos.length === 0) {

        console.log('Nenhum produto disponível!')
        
    }else{

        console.log('Produtos disponíveis: ')
        for (let produto of produtos) {
            console.log(`#${produto.idProduto} - ${produto.nome} - R$${produto.preco}`)
        }
        filtro()
    }
}
function criarFaixa(precoInicial, precoFinal) {

    let faixa = {
    idFaixa: faixas.length + 1,
    precoInicial, 
    precoFinal,
    }
    faixas.push(faixa)
    listarProdutos
    return `Faixa de preço criada com sucesso! #${faixa.idFaixa} - R$${faixa.precoInicial} - R$${faixa.precoFinal}`

}

function filtro(){

    do{
    let opcao = opcoes('filtro')
    switch(opcao){
        case 1:
            preco()
            break
        case 2:
            nome()
            break
        case 3:
            console.log('Voltando...')
            break
        default:
            console.log('Opção inválida!')
    }

} while(!(opcao !== 3))

}
function preco(){
    let opcao = opcoes('preco')
    switch(opcao){
        case 1:
            filtroFaixa(listarFaixas()-1)
            
            break
        case 2:
            filtroFaixa(listarFaixascriarFaixa(Number(prompt('Digite o preço inicial: ')), Number(prompt('Digite o preço final: ')))-1)
            break
        case 3:
            console.log('Voltando...')
            break
        default:
            console.log('Opção inválida!')
    }
}
function listarFaixas(){
    let i = produtos.length
    let precos = []
    let media = 0
    let min = 0
    let max = 0
    for(let price of produtos){
        precos.push(price.preco)
        media += price.preco
        if(min > price.preco){ min = price.preco}
        if(max < price.preco){ max = price.preco}
    }
    media = media / produtos.length
    
    switch(i){
        case 1:
            criarFaixa(0, precos[0])
            break
        case 2:


            if (precos[0] !== precos[1]){

                criarFaixa(0, (max).toFixed(2))
                criarFaixa(0, (min).toFixed(2))

            }else{

                criarFaixa(0, precos[0])

            }
            break
         default:

            if((max).toFixed(2) === (media).toFixed(2)){

                criarFaixa(0, precos[0])

            }else if((max).toFixed(2) > (media).toFixed(2)){
                if((min).toFixed(2) < (media).toFixed(2)){
                    criarFaixa(0, (min).toFixed(2))
                    criarFaixa((min).toFixed(2), (media).toFixed(2))
                }else {
                    criarFaixa(0, (media).toFixed(2))
                }
                
                criarFaixa((media).toFixed(2), (max).toFixed(2))

            }  
            break
    }
    console.log('\nFaixas de preço disponíveis:')
    for(let faixa of faixas){
        console.log(`#${faixa.idFaixa} - R$${faixa.precoInicial} - R$${faixa.precoFinal}`)
    }
    console.log('')
    return Number(prompt('Digite o ID da faixa desejada: '))
}
function nome(){
    let nome = prompt('Digite o nome do produto: ')
    let produto = produtos.find(produto => produto.nome === nome)
    if(produto){
        console.log(`#${produto.idProduto} - ${produto.nome} - R$${produto.preco}`)
    }else{
        console.log('Produto não encontrado!')
    }
}
function filtroFaixa(id){
    let contador = 0
for(let produto of produtos){
 if(produto.preco <= faixas[id].precoFinal && produto.preco >= faixas[id].precoInicial){
        console.log(`#${produto.idProduto} - ${produto.nome} - R$${produto.preco}`)
   contador++
    }
}
if(contador === 0){
    console.log('Nenhum produto não encontrado!')
}
}
