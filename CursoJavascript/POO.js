// Instanciando um objeto

class Person {
  constructor(primeiroNome, ultimoNome, idade, sexo) {
    this.primeiroNome = primeiroNome;
    this.ultimoNome = ultimoNome;
    this.idade = idade;
    this.sexo = sexo;
  }
}

const person = new Person("João", "Silva", 25, "M");

// Heranças em classes

class Animal {
  constructor(name) {
    return {
      name,
    };
  }
  speak() {
    console.log(`${this.name} emite um som.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    return {
      breed,
    };
  }
  speak() {
    console.log(`${this.name} barked.`);
  }
}
