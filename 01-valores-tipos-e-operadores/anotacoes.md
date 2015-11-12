# Valores, Tipos e Operadores

Existem seis tipos básicos de valores em JavaScript: números, strings, booleanos, objetos, funções e undefined.

## Números

Eles são positivos ou negativos, com ou sem casas decimais; para números muito grandes ou muito pequenos, pode-se usar notações científicas (e, para sinalizar o expoente - 2.998e8).

Tipos numéricos também são usados para armazenar expressões aritméticas.

Existem três valores especiais que o JavaScript considera como números, mas esses valores não se parecem com eles:

* Infinity: a representação positiva para infinito. Para registro, Infinity - 1 ainda é igual a Infinity;
* -Infinity: a representação negativa para infinito;
* NaN: Not a Number. Obtém-se esse resultado em expressões divididas por zero ou em expressões onde não é possível obter um número preciso como resposta. NaN nunca será igual a si mesmo.

## Strings

Representam textos e seus conteúdos são delimitados entre aspas, tanto simples quanto duplas. O importante é que as aspas do início e do fim da string sejam iguais.

Nem tudo pode ser normalmente interpretado dentro das aspas. Alguns caracteres especiais devem ser precedidos de uma barra invertida ('\') para que ocorra sua correta interpretação. Por exemplo, um 'n' após a barra invertida produz uma nova linha no console do JavaScript. Aspas após a barra invertida fará com que estas sejam impressas no console.

Strings não são subtraídas, multiplicadas ou divididas, mas podem ser concatenadas umas às outras através do operador '+'.

    'con' + 'cat' + 'en' + 'ação'

### Operadores Unários

Os operadores unários operam sobre um único valor.

Operadores também podem ser palavras escritas, como o caso do operador typeof, que é usado com a finalidade de avaliar um valor e retornar o seu tipo.

    console.log(typeof 1987); // number
    console.log(typeof 'Cachorro'); // string

## Booleanos

Os tipos booleanos possuem apenas os valores true e false e são obtidos, dentre outras formas, através de expressões lógicas.

    console.log(10 > 9); // true
    console.log(2 < 1); // false
    console.log('Barack' < 'Obama'); // true

### Operadores Lógicos

JavaScript suporta 3 operadores lógicos: os operadores binários e(&&) e ou(||) e o operador unário não(!).

## Undefined

O JavaScript usa os valores null e undefined para representar a ausência de valores significativos. Eles são considerados valores, mas não levam informação.

A diferença de significado entre undefined e null é considerada um "erro" no projeto da linguagem JavaScript.

### Conversão Automática de Tipo

Quando um operador é aplicado a um tipo de valor "errado", ele vai converter este valor para o tipo que quiser, levando em consideração um conjunto de regras pré-estabelecidas de acordo com o operador usado.

    console.log("2" - 1); // 1
    console.log("2" + 2); // 22

