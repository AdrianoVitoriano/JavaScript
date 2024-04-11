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
let pessoa2 = Object.assign({},pessoa1)
console.log(pessoa2)

let pessoa3 = {
    estadoCivil: "Solteiro",
    ...pessoa1}
console.log(pessoa3)