/**
 13. Calcule o fatorial de um número. Peça ao usuário para digitar um número e imprima o 
resultado. 
 */
const input = require('readline-sync');
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}

function main() {
    let numero = input.questionInt('Digite um número inteiro: ');
    console.log(fatorial(numero));
}

main();
