import {readFile} from "fs"
import {promisify} from "util"

const readFileAsync = promisify(readFile)

class Database{
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }
    obterDadosArquivo(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
    }
    escreverArquivo(){

    }
    listar(){
        return null
    }
}
export default new Database()