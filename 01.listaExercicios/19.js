/**
19. Peça ao usuário para digitar um número. Imprima a sequência de Fibonacci até o número 
de termos digitado. 
 */
const input = require('readline-sync');

 function fibonacci(termo) {
    let primeiro = 0;
    let segundo = 1;
    let soma;
    for(let i = 0; i < termo; i++) {
        console.log(`${primeiro} + ${segundo} = ${primeiro + segundo}`);
        soma = primeiro + segundo;
        primeiro = segundo;
        segundo = soma;
    }
 }

 function cabecalho() {
    console.log(`##### FIBONACCI #####
        `);
 }

 function main() {
    cabecalho();
    let termo = Number(input.question("Digite quantos termos serão calculados: "));
    fibonacci(termo);
 }

 main();