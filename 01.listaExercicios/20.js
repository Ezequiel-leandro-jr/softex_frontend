/**
 20. Crie um jogo de adivinhação. O programa deve gerar um número aleatório entre 1 e 100. O 
usuário deve tentar adivinhar o número. A cada tentativa, o programa deve dizer se o número 
digitado é maior ou menor que o número secreto. O jogo termina quando o usuário acertar. 
 */

const input = require('readline-sync');

const numero = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let tentativas = 0;
let n;

while(true) {
    n = Number(input.question(`Entre 1 e 100...
        Qual é o número? >> `));
    tentativas++;
    console.clear();
    if(n == numero) {
        console.log(`PARABÉNS! O número é ${n}
            Você conseguiu em ${tentativas} tentativa(s)!`);
        input.keyInPause();
        console.clear();
        return false;
    } else {
        if(n > numero) {
            console.log(`${n} é maior que o número! Tente de novo!`);
            input.keyInPause();
            console.clear();
            
        } else if(n < numero) {
            console.log(`${n} é menor que o número! Tente de novo!`);
            input.keyInPause();
            console.clear();
        }
    }

}

