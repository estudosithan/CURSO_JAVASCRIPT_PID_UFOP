console.log("Hello, world!");
const readline = require("prompt-sync");
const imput = readline();

function converter(valor, moeda) {
  let convertido;
  switch (moeda) {
    case "USD":
      convertido = valor * 5.35;
      break;
    case "EUR":
      convertido = valor * 6.38;
      break;
    case "ARS":
      convertido = valor * 0.056;
      break;
    default:
      console.log("Moeda não suportada");
      break;
  }

  return convertido;
}

let valor = parseFloat(imput("Digite o valor para ser convertido: "));
let moeda = imput("Digite a moeda do valor proposto: ")
const monetario = converter(valor, moeda);

console.log("O valor convertido é: ", monetario);
