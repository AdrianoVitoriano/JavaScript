import PromptSync from "prompt-sync";
const prompt = PromptSync()

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
function alphabetPosition(text) {
    let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(' ')
    let found = ""
    let num = 0
    for(let i = 0; i <= text.length; i++){
        num = alphabet.indexOf(text.toUpperCase().at(i))
        if(num > -1){found += (num+1) + " "}        
    }
    return found.trim()
  }