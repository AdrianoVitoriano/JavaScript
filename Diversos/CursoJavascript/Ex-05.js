// Velocidade máxima de até 70km/h
// a cada 5km acima do limite você ganha 1 ponto
// caso pontos superiores a 12, a carteira é suspensa

import PromptSync from "prompt-sync";
const prompt = PromptSync()

let vel = prompt("Digite a velocidade do veículo: ")

console.log(verificarVelocidade(vel))

function verificarVelocidade(vel){
    const limite = 70
    const pontoPorKm = 5
    const pontoMax = 12
    if (vel <= limite){
        return "Velocidade dentro do limite"
    }else {
        let pontos = Math.floor((vel - limite) / pontoPorKm)
        return 'Você foi multado! Recebeu ' + pontos + ' pontos' + (pontos > pontoMax ? ' e sua carteira foi suspensa.' : '')
    }
}