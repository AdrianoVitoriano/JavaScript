// Factory function (função fábrica) é uma função que retorna um objeto.
// A função fábrica é uma função que cria e retorna um objeto, sem a necessidade de usar a palavra-chave new.

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        caminhar(){
            console.log(`${this.nome} está caminhando`);
        },
        pular(){
            console.log(`${this.nome} está pulando`);
        }
    };
}
let pessoa1 = criarPessoa('Lucas', 'Fernandes', 25)
console.log(pessoa1)
pessoa1.caminhar()
pessoa1.pular()

// Constructor function (função construtora) é uma função que cria um novo objeto.
// A função construtora é uma função que cria um novo objeto a partir de uma função.
// A palavra-chave new é usada para criar um novo objeto a partir de uma função.

function pessoa(nome, sobrenome, idade){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    this.caminhar = function(){
        console.log(`${this.nome} está caminhando`);
    },
    this.pular = function(){
        console.log(`${this.nome} está pulando`);
    }
}

let pessoa2 = new pessoa('Lucas', 'Fernandes', 25)