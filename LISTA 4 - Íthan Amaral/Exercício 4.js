console.log("Hello, world!");
const readline = require("prompt-sync");
const imput = readline();

function letras(array, letra) {
  let vetor_novo = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].includes(letra)) {
      vetor_novo.push(vetor[i]);
    }
  }
  return vetor_novo;
}

let vetor = [];

for (let i = 0; i < 10; i++) { //Até 10 para exemplificar
  vetor.push(imput());
}

console.log(`O seu vetor é : ${vetor}`);

let letrA = imput("Digite uma letra: ");

let vetor_letra = letras(vetor, letrA);

console.log( `O novo vetor com apenas os nomes com a letra sugerida é ${vetor_letra}`);
