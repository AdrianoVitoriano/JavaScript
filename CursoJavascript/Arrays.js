let idades = [25, 50, 48]
console.log(idades[2]) 

let Ellen = ["Ellen","Alves Aguiar", 18, "(11) 96431-0431", ["Judy", "Zé"], {nome: "Marcos", idade: 36}, {nome: "Eloides", idade: 36}, {nome:"Stella", idade: 4}]
console.log(`Olá, ${Ellen[0]} ${Ellen[1]}. Seu pai se chama ${Ellen[5].nome}, sua mãe se chama ${Ellen[6].nome} e sua irmã se chama ${Ellen[7].nome}`) // Olá, Ellen Alves Aguiar. Seu pai se chama Marcos e sua mãe se chama Eloides.
console.log(`O nome do sua gata é ${Ellen[4][0]}, e o seu cachorro se chama ${Ellen[4][1]}`) // O nome do sua gata é Judy, e o seu cachorro se chama Zé
