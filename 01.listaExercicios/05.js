/**
 5. Peça ao usuário para digitar um número e use um 'if' para verificar se ele é positivo,
negativo ou zero, imprimindo a resposta no console.
 */

const input = require("readline-sync");

function identificar_numero(){
    let numero = Number(input.question("Digite um número: "));
    if(numero >= 0) {
        console.log(`O número ${numero} é POSITIVO.`);
    }else {
        console.log(`O número ${numero} é NEGATIVO.`);
    }
}

identificar_numero();