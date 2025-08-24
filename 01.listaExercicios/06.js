/**
 6. Peça ao usuário para digitar um número e use um laço 'for' para imprimir a tabuada desse
número (de 1 a 10)
 */
const input = require('readline-sync');

function tabuada() {
    let numero = input.questionInt("Digite um número inteiro positivo: ");
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

tabuada();