/*Crie um código que vai receber um valor e uma porcentagem de acréscimo ao mês, quantos meses são necessários para o valor triplicar?
 Exiba quantos meses levaram para essa condição ocorrer.*/
let valor = 100
let porcentagem = 0.03
let meses = 0
let triplo = valor*3
while(valor < triplo){
    valor = valor*(1+porcentagem)
    meses++
}
console.log(`Foram necessários ${meses} meses para chegar ao valor ${valor.toFixed(2)}`)