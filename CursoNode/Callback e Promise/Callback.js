/*
0- Obter um usuario
1- Obter o numero de telefone de um usuario a partir de seu id
2- Obter o endereco do usuario pelo id
*/

function obterUsuario(callback){
    setTimeout(() => {
     return callback(null,{
        id:1,
        nome: 'Aladin',
        dataNascimento: new Date()
     })
    }, 1000)


}

function obterTelefone(usuario, callback){
    setTimeout(()=>{
        return callback(null,{
            telefone: '998861493',
            ddd: '11'
        }) 
    }, 1000)


}

function obterEndereco(usuario, callback){
    setTimeout(() => {2000
        return callback(null,{
            rua: "Lorena ",
            numero: 202
        })
    },1000)

}

const usuario = obterUsuario(function verificarUsuario(error, usuario){
    if(error)
    {console.log("Erro ao tentar encontra o usuário.")
    return
}
obterTelefone(usuario.id, function verificarTelefone(error, telefone) {
    if(error)
    {console.log("Erro ao tentar encontra o telefone.")
    return
}
obterEndereco(usuario.id, function verificarTelefone(error, endereco){
    if(error)
    {console.log("Erro ao tentar encontra o endereço.")
    return
}console.log(`
Nome: ${usuario.nome}
Data de Nascimento: ${usuario.dataNascimento}
Telefone: (${telefone.ddd}) ${telefone.telefone}
Endereço: ${endereco.rua} ${endereco.numero}
`)})})}
)
