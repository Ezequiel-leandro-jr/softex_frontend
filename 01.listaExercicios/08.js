/**
 8. Peça ao usuário para digitar um número. Use um laço 'while' para imprimir todos os
números inteiros de 1 até o número digitado.
 */

const input = require('readline-sync');

function imprimirNumeros() {
    let numero = input.questionInt('Digite um número: ');
    for(let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

imprimirNumeros();