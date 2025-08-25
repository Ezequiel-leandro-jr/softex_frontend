/**
 18. Imprima a seguinte forma geométrica: 
1 
12 
123 
1234 
12345
 */

for (let i = 1; i <= 5; i++) {
  let linha = "";
  for (let j = 1; j <= i; j++) {
    linha += j;
  }
  console.log(linha);
}