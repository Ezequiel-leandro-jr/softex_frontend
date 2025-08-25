/**
 15. Escreva um programa que calcule a média de 5 notas digitadas pelo usuário. 
 */
const input = require('readline-sync');

function cabecalho() {
    console.log(`
        #### MÉDIA DE 5 NOTAS ####
        `);
}

function media(notas) {
    let soma = 0;
    let res;
    for(nota of notas) {
        soma = soma + nota;
    }
    return res = soma / notas.length;
}

function main() {
    cabecalho();
    let notas = new Array();
    for(let i = 0; i < 5; i++) {
        notas[i] = Number(input.question(`${i+1}° NOTA...... `));
    }
    let resultado = media(notas);
    console.log(`\n   MÉDIA..... ${resultado}`);
}

main();

