console.log("Hello, world!");
const readline = require("prompt-sync");
const imput = readline();

function cpf_validacao(array) {
  if (array.length !== 11) {
    return false;
  } 

    const primeironumero = array[0]
    for (let i = 0; i < 11; i++) {
      if (array[i] !== array[0]) {
        return true;
      } 
  }
  return false; //para o caso de todos os dígitos serem iguais entre sí
}

let cpf = imput("Digite seu cpf para verificação: ");
const verificado = cpf_validacao(cpf);
console.log(`O CPF é: ${verificado}`);
