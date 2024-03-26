import PromptSync from "prompt-sync";
const prompt = PromptSync()

console.log(tribonacci([1,1,1], 10))

function tribonacci(signature,n){
    let result = []
    let plus = 0
    for(let i = 0; i < n; i++ ){
        if(i >2){plus = result[i-1]+ result[i-2]+ result[i-3]}else{ plus = signature[i]}
        result.push(plus)
    }
    return result
}