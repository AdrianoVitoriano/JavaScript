let pessoa = {
    nome: "João",
    sobrenome: "da Silva",
    idade: 25,
    telefone: "11999999999",
    temCarro: true,
    animaisDeEstimacao: ["Totó", "Bob"],
    pai: {
        nome: "José",
        idade: 50
    },
    mae: {
        nome: "Maria",
        idade: 48
    }
    
};

console.log(`Olá, ${pessoa.nome} ${pessoa.sobrenome}. Seu pai se chama ${pessoa.pai.nome} e sua mãe se chama ${pessoa.mae.nome}.`);