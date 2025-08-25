/**
 23. Calcule a soma de todos os dígitos de um número. Por exemplo, a soma dos dígitos de 123 
é 6. 
 */

const input = require('readline-sync');

let numero = input.question(`Digite um número: `);
let array = [];
let soma = 0;

for(let i = 0; i < numero.length; i++) {
    array.push(Number(numero.charAt(i)));
    soma += array[i];
}

console.log(`A soma entre os dígitos de '${numero}' = ${soma}`);
