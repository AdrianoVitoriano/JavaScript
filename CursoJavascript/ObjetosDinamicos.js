// Natureza dinamica de objetos
// Em JavaScript, os objetos são dinâmicos, ou seja, eles podem ser alterados a qualquer momento.
// Podemos adicionar ou remover propriedades de um objeto a qualquer momento.
//
let pessoa = {
    nome: "Lucas",
    idade: 25
}
console.log(pessoa)
pessoa.sobrenome = "Fernandes"
console.log(pessoa)
delete pessoa.idade
console.log(pessoa)

// Podemos adicionar ou remover métodos de um objeto a qualquer momento.
//