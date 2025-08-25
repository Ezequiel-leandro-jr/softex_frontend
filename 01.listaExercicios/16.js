/**
 16. Peça ao usuário para digitar 10 números e conte quantos são maiores que 50. 
 */
const input = require('readline-sync');

 function maiores50(n) {
    let qtd = 0;
    for(indice in n) {
        if(n[indice] > 50) {
            qtd += 1;
        }
    }
    return qtd;
 }

 function main() {
    let numeros = [];
    for(let i = 0; i < 10; i++) {
        numeros[i] = Number(input.question(`${i+1}° NÚMERO: `));
    }
    let quantidade = maiores50(numeros);
    console.log(`Há ${quantidade} números maiores que 50.`);
    
 }

 main();