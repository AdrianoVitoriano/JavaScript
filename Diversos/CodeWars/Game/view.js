let asciiArt = {
    art: [],
    name: prompt(""),
    getArt(){
      console.log('Desenhe a ascii art: ')
      for(let i = 0; i < 15; i++){
      this.art[i] = prompt()
      }
    }
  }

export function newPerson(){
    return{
        



    }
}

class Person{
    constructor(name,category){
    this.id,
    this.name,
    this.lucky = Math.random() * (-50 - 100) + 1,
    this.category,
    this.race,
    this.forca,
    this.hp,
    this.magia,
    this.agilidade,
    this.altura = Math.random() * (50 - 220) + 50,
    this.peso = altura/(Math.random() * (3 - 1) + 1),
    getRace(){

        const randomNumber = Math.random()
    }
    getCategory(){

    }

    }
}


export function showAnimation(file, width = 32, height = 32){
  console.clear()
  header(width)
  body(width, height)
}

function header(width = 32){
  hyphen(width)
  let espaços = " ".repeat((width - nomeJogo.length)/2-1)
  console.log("|" +espaços + nomeJogo + espaços+"|")
  hyphen(width)
}
function body(width = 32, height = 32){
  for(height; height > 0;height-- ){
    let espaços = " ".repeat(width/2-1)
    console.log("|" + espaços  + espaços +"|")
  }

  hyphen(width)
}

function hyphen(width){
  console.log("-".repeat(width))
}

function underline(width){
  console.log("_".repeat(width))
}

