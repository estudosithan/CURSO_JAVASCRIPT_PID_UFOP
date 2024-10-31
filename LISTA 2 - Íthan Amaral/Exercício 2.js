console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

console.log("Digite a idade para saber a classe eleitoral: ")
const idade = parseInt(imput())

if(idade < 16){
    console.log("Não eleitor")
}
else if(idade >= 18 && idade <65){
    console.log("Eleitor obrigatório")
}
else if(idade >= 16 && idade < 18 || idade > 65){
    console.log("Eleitor facultativo")
}