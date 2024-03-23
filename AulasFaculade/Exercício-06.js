
console.log(converterParaBinario(30))
function converterParaBinario(num){ // Não remova essa linha.
    // ### Escreva Seu código aqui :) ###
    let binario = []
    for(let i = 0;num > 0; i++){
      binario.unshift(num%2)
      num = 
    }
    return binario
    // ### FIM do código ###
  } // Não remova essa linha.
  function converterParaBinario(num){ // Não remova essa linha.
    // ### Escreva Seu código aqui :) ###
    let binario = []
    for(let i = 0;num > 0; i++){
      binario.shift(num%2)
      num /= 2
    }
    // ### FIM do código ###
  } // Não remova essa linha.
  
  function callBackDesconto(preco, desconto){// Não remova essa linha.
    // ### Escreva Seu código aqui :) ###
    return preco*desconto
    // ### FIM do código ###
  }// Não remova essa linha.
  
  function calcularPrecoComDesconto(preco, desconto, callBackDesconto){ // Não remova essa linha.
    // ### Escreva Seu código aqui :) ###
     return preco-callBackDesconto(preco,desconto)
    // ### FIM do código ###
  } // Não remova essa linha.
  
  module.exports = {
    converterParaBinario,
    calcularPrecoComDesconto
  } // Não remova essa linha.