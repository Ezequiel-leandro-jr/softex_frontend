/**
 7. Escreva um programa que imprima a soma dos números de 1 a 100.
 */

 let soma = 0;
 for(let i = 1; i <= 100; i++) {
    soma += i;
    console.log(`${soma - i} + ${i} = ${soma}`);
 }