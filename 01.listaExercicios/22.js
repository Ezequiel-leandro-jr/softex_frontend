/**
 22. Peça ao usuário para digitar um número e verifique se ele é um palíndromo (um número 
que se lê da mesma forma de trás para frente, como 121).
 */

const input = require('readline-sync');

console.log(`##### PALÍNDROMO #####
    `);

let numero = input.question('Digite um número e eu adivinho se é palíndromo ou não: ');
let resultado = " ";
let j = 0;
for(let i = (numero.length - 1); i >= 0; i--) {
    resultado += numero.charAt(i);
}
numero = numero.trim();
resultado = resultado.trim();
console.log(numero, resultado);

if(resultado === numero) {
    console.log(`${resultado} é um PALÍNDROMO!`);
} else {
    console.log(`${numero} NÃO é um PALÍNDROMO!`);
}