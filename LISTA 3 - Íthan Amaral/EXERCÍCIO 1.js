console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

let vetor = []
let menorvalor = vetor[0]
let maiorvalor = vetor[0]

for(let i =0;i<10;i++){
    vetor.push(Math.floor(Math.random()*10)) //Para add automaticamente números até a quantidade de 10
}
console.log("O vetor é: " , vetor)

for(let i = 0;i<10;i++){
   if(menorvalor > vetor[i]){
    menorvalor = vetor[i]
   }
}

for(let i = 0;i<10;i++){
    if(maiorvalor < vetor[i]){
     maiorvalor = vetor[i]
    }
 }

 console.log(`O maior valor é ${maiorvalor} e o menor valor é ${menorvalor}`)