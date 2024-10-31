console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

console.log("Digte seu peso: ")
const peso = parseFloat(imput())
console.log("Digite sua altura: ")
const altura = parseFloat(imput())
const IMC = peso/(Math.pow(altura,2))

if(IMC < 18.5){
    console.log("Você está abaixo do peso")
}
else if(IMC >= 18.5 && IMC <= 24.9){
    console.log("Você está no peso normal")
}
else if(IMC >= 25.0 && IMC <= 29.9){
    console.log("Você está em sobrepeso")
}
else if(IMC >= 30.0 && IMC <= 34.9){
    console.log("Você está com obesidade de grau 1")
}
else if(IMC >= 35.0 && IMC <= 39.9){
    console.log("Você está com obesidade de grau 2")
}
else if(IMC >= 40) {
    console.log("Você está com obesidade de grau 3")
}
console.log(`O seu IMC é de: ${IMC.toFixed(2)}`)