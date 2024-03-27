/*
0- Obter um usuario
1- Obter o numero de telefone de um usuario a partir de seu id
2- Obter o endereco do usuario pelo id
*/

function obterUsuario() {
  return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout(() => {
      // return reject(new Error('Deu erro aqui menó'));
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: "25/01/2005",
      });
    }, 1000);
  });
}

function obterTelefone(usuario) {
  return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: "998861493",
        ddd: "11",
      });
    }, 1000);
  });
}

function obterEndereco(usuario) {
  return new Promise(function resolvePromisse(resolve, reject) {
    setTimeout(() => {
      2000;
      return resolve({
        rua: "Lorena ",
        numero: 202,
      });
    }, 1000);
  });
}
main()
async function main(){
  try{
    const usuario = await obterUsuario()
    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ])
    const telefone = resultado[0]
    const endereco = resultado[1]
    console.log(`
Nome: ${usuario.nome}
Data de Nascimento: ${usuario.dataNascimento}
Telefone: (${telefone.ddd}) ${telefone.telefone}
Endereço: ${endereco.rua} ${endereco.numero}
`)
  }catch(error){
    console.error("Deu erro: ", error)

  }
}