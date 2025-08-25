/**
 14. Crie um programa que determine se um número é primo. Um número primo é divisível 
apenas por 1 e por ele mesmo. 
 */

const input = require('readline-sync');

function primo(n) {
    if(n == 1 || n == 2) {
        return true;
    } else if(n > 2 && n % 2 == 0) {
        return false;
    } else {
        for(let i = 2; i < (n-1); i++) {
            if(n % i == 0) {
                console.log(`${n} é divisivel por ${i}`);
                return false;
            }
        }
        return true;
    }
}

function main() {
    let numero = input.questionInt('Digite um número inteiro: ');
    let resp = primo(numero);
    if(resp) {
        console.log(`${numero} é PRIMO.`);
    } else {
        console.log(`${numero} NÃO é PRIMO.`);
    }
}

main();