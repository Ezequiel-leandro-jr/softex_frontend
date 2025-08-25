/**
 9. Crie um programa que peça ao usuário para digitar um número e verifique se ele é par ou 
ímpar. 
 */

const input = require('readline-sync');

function parOuImpar(numero){
    if(numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

function main() {
    while(true) {
        let numero = Number(input.question('Digite um número: '));
        const resp = parOuImpar(numero);
        if(resp) {
            console.log(`O número ${numero} é PAR.`);
            return false;
        } else {
            console.log(`O número ${numero} é ÍMPAR.`);
            return false;
        }
    }
}

main();