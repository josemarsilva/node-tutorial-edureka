var minhaVar = 'minha variavel';

function minhaFuncao(x,y) {
    return x + y;
}

// let e const
let num = 2;
const PI = 3.14;

// map e functions
var numeros = [1,2,3];

numeros.map(function(valor) {
    return valor *2;
});

numeros.map(valor => valor * 2);

// Classes
class Matematica {
    soma(x,y) {
        return x + y;
    }
}

// Tipar as variaveis
var n1 = 'abcde';
n1 = 4; // variavel string recebeu numero Javascript permite

var n2:string = 'fghijk'; // nao permite atribuição de string diferente de string

