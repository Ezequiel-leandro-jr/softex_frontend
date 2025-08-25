/**
 11. Escreva um programa que conte quantos números múltiplos de 3 existem entre 1 e 50.
 */
let multiplos = 0
for(let i = 1; i <= 50; i++) { 
    if(i % 3 == 0) {
        multiplos++;
    }
}
console.log(`há ${multiplos} múltiplos de 3 entre 1 e 50.`);