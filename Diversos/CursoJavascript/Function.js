// A nomeação de uma função deverá ser feito por um Verbo + Substantivo, como por exemplo: calcularIdade, mostrarNome, etc.
// Há dois tipos de funções, as que retornam um valor e as que realizam uma ação.
let itemMP = {
    descricao: "Mouse Pad",
    moq: 10,
    preco: 5.00
}
let pedido = {
    descricao: "Mouse Pad",
    quantidade: 19,
    quantidadeMoq: 0
}
pedido.quantidadeMoq = arredondarQuantidade(itemMP.moq, pedido.quantidade)
if (pedido.quantidade < itemMP.moq) {
    console.log(`A quantidade mínima para compra é ${itemMP.moq}`)

} else if (pedido.quantidadeMoq == pedido.quantidade) {
    console.log(`O valor total do pedido é R$${pedido.quantidade * itemMP.preco.toFixed(2)}`)

} else {
    console.log(`A quantidade arredondada para compra seguindo o múltiplo é ${pedido.quantidadeMoq}`)
}

function arredondarQuantidade(item, qtd) {
    return Math.round((qtd / item) + 0.49) * item
}

