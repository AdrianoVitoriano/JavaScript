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

let usuarioPromise = obterUsuario()
  .then((usuarioPromise) => {
    let telefonePromise = obterTelefone(usuarioPromise.id);
    return telefonePromise.then((telefonePromise) => {
      let enderecoPromise = obterEndereco(usuarioPromise.id);
      return enderecoPromise.then((enderecoPromise) => {
        return {
          usuario: {
            nome: usuarioPromise.nome,
            id: usuarioPromise.id,
            dataNascimento: usuarioPromise.dataNascimento,
          },
          telefone: {
            telefone: telefonePromise.telefone,
            ddd: telefonePromise.ddd,
          },
          endereco: {
            rua: enderecoPromise.rua,
            numero: enderecoPromise.numero,
          },
        };
      });
    });
  })
  .then((resultado) => {
    console.log(`
  Name: ${resultado.usuario.nome}
  Data Nascimento: ${resultado.usuario.dataNascimento}
  Telefone: (${resultado.telefone.ddd})${resultado.telefone.telefone}
  Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}`);
  })
  .catch((error) => {
    console.error("Erro: ", error);
  });
