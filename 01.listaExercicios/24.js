/**
 24. Crie um programa que imprima todos os números primos entre 1 e 100.
 */
let primo = true;
for(let i = 1; i <= 100; i++) {
    primo = true;
    if(i == 1 || i == 2) {
        console.log(i);
    }
    if(i > 2) {
        for(let j = 2; j < i; j++) {
            if(i % j==0){
                primo = false;
            }
        }
        
    }
    if(primo){
            console.log(i);
        }
}

