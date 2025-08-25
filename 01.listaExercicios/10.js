/**
 10. Peça ao usuário para digitar uma senha. Continue pedindo a senha até que a senha 
digitada seja "12345". 
 */
const input = require('readline-sync');

function senha(password) {
    if(password != '12345') {
        return false;
    } else{
        return true;
    }
}

function main() {
    while(true) {
        let pass = input.question('Digite a senha: ').trim();
        const resp = senha(pass);
        if(!resp) {
            console.log(`Senha incorreta: ${pass}`);
            input.keyInPause();
        }else {
            console.log("Senha correta!");
            input.keyInPause();
            return false;
        }
    }
}

main();