console.log(converterParaBinario(134))

function converterParaBinario(num){ // Não remova essa linha.
    // ### Escreva Seu código aqui :) ###
    let binario = []
    for(let i = 0;num > 0; i++){
      binario.unshift(num%2)
      if(num%2 === 0){num /= 2}else{num = (num-1)/2}
    }
    return binario.join('')
    // ### FIM do código ###
  } // Não remova essa linha.