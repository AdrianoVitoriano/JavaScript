import nock from "nock";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

export function  showPosts(idPost, title, content, date){
    let lengthWindow = 70
    let underline = `|${'_'.repeat(lengthWindow-2)}|`
    console.log(underline)
    lineBreak('Id Post:',idPost,lengthWindow)
    lineBreak('Title:',title,lengthWindow)
    lineBreak('Content:',content,lengthWindow)
    lineBreak('Date:',String(date),lengthWindow)
    console.log(underline)
}

function lineBreak(phraseInitial,phraseComplete, characters){
    let phraseArray = phraseComplete.trim().split(' ')
    let phrase = phraseInitial
    for(let i = 0; i < phraseArray.length;i++){
        let phraseTest = phrase
        if ((phraseTest += ' ' +phraseArray[i]).length > characters-2){
            console.log(`|${phrase.trim()}${' '.repeat(characters-phrase.trim().length-2)}|`)
            phrase = phraseArray[i]
        }else{phrase += ' ' +phraseArray[i]}

    }
    if(phrase !== undefined){console.log(`|${phrase.trim()}${' '.repeat(characters-phrase.trim().length-2)}|`)}
}

