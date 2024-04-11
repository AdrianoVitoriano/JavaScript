# **_Guia JavaScript_** by [Adriano Vitoriano da Siva](https://github.com/AdrianoVitoriano)

## Sumário

- [Variáveis e Constantes](#variáveis-e-constantes)
  - [Declaração de variáveis](#declaração-de-variáveis)
  - [Regras de nomeação](#regras-de-nomeação)
  - [let](#let)
  - [var](#var)
  - [const](#const)
  - [Diferenças dos tipos de declaração de variáveis](#diferenças-dos-tipos-de-declaração-de-variáveis)
  - [Variáveis globais e locais](#variáveis-globais-e-locais)
  - Tipos primitivos
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
  - Array e Matrizes
    - Array
      - Métodos
    - Matrizes
      - Métodos

---

## Variáveis e Constantes

Variáveis e Constantes em programação, são espaços alocados na memória RAM para guardar valores temporariamente. A diferença entre variáveis e constantes é o seu comportamento durante a execução do código, variáveis **podem** ter seus valores alterados durante a execução do código, mas constantes **não podem** ter seus valores alterados após a sua declaração.

### Declaração de variáveis

Para podermos utilizar as variáveis e constantes, precisamos primeiro instanciar (declarar), utilizando uma das palavras a seguir:

- [let](#let)
- [var](#var)
- [const](#const)

#### Regras de nomeação

Para declararmos variáveis e constantes, existe algumas regras. Veja ela abaixo:

1. Não podem começar com símbolos ou números.
1. Não podem usar palavras reservadas, ou seja, não pode usar nomes que a própria linguagem utiliza.
1. Precisam possuir nomes que façam sentido para o motivo/propósito para qual são utilizados.

---

#### _let_

A palavra let, declara uma variável no escopo do bloco atual, ou seja, declara uma variável que só existe dentro daquele bloco de código.

Veja abaixo a declaração das variáveis 'variavelComLet' e 'idade':

```Javascript

let variavelComLet // A atribuição de um valor na declaração é opcional.
let idade = 19


```

Entenda o que é uma [variável local](locais) e uma [variável global](#globais).

---

#### _var_

A palavra var, declara uma variável no escopo global, ou seja, declara uma variável que existe em todo o código. Esse tipo de declaração já caiu em desuso, sendo substituído pelo uso da palavra [let](#let).

Veja abaixo a declaração das variáveis 'variavelComVar' e 'idade':

```Javascript

var variavelComLet // A atribuição de um valor na declaração é opcional.
var idade = 19

```

Entenda o que é uma [variável local](#locais) e uma [variável global](#globais).

---

#### _const_

A palavra const, declara uma constante.

Veja abaixo a declaração da constante 'pi':

```Javascript

const pi = 3.14159265359 //A atribuição de um valor na declaração é obrigatório.

```

---

#### _Diferenças dos tipos de declaração de variáveis_

Abaixo uma tabela indicando as propriedades de cada tipo:

| Declaração | Global | Local | Altera | Não altera |
| :--------- | :----: | :---: | :----: | :--------: |
| let        |        |   X   |   X    |            |
| var        |   X    |       |   X    |            |
| const      |        |   X   |        |     X      |

---

#### _Variáveis globais e locais_

Para acessar valores dentro de variáveis, precisamos que elas já tenham sido declaradas localmente ou globalmente.

##### _Locais_

As variáveis declaradas localmente só existem dentro daquele bloco de comando. Observe o exemplo abaixo:

```Javascript

for(let i = 0 /*variável declarada localmente, só existe dentro do for)*/; i <= 5; i++){
    console.log(i)
}

console.log(i) // apresentará erro, pois ela não existe fora do for.

```

##### _Globais_

As variáveis declaradas globalmente existem dentro de todo o código. Observe o exemplo abaixo:

```Javascript

let i = 0 /* variável declarada globalmente, existe no código todo)*/
for(i ; i <= 5; i++){
    console.log(i)
}

console.log(i) // 5

```



```Javascript



```
