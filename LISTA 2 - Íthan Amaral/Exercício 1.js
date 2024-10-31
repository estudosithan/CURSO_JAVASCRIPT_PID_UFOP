console.log("Hello, world!");
const readline = require("prompt-sync");
const imput = readline();

console.log(
  "Digite um número de 1 a 7 para saber o dia correspondente ao número: "
);
const dia = parseInt(imput());; //para converter em número a string

switch (dia) {
  case 1:
    console.log("O dia é Domingo");
    break;
  case 2:
    console.log("O dia é Segunda-feira");
    break;
  case 3:
    console.log("O dia é Terça-feira");
    break;
  case 4:
    console.log("O dia é Quarta-feira");
    break;
  case 5:
    console.log("O dia é Quinta-feira");
    break;
  case 6:
    console.log("O dia é Sexta-feira");
    break;
  case 7:
    console.log("O dia é Sábado");
    break;
  default:
    console.log("Número inválido, por favor digite outro");
    break;
}
