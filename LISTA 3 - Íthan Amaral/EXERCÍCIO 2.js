console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

let vetor = []
let somapares = 0
let contador = 0


for(let i =0;i<10;i++){
    vetor.push(Math.floor(Math.random()*10)) //Para add automaticamente números até a quantidade de 10
    /*ou vetor.push(imput())*/
}
console.log("O vetor é: " , vetor)

for(let i = 0; i<10;i++){
    if(vetor[i] % 2 === 0){
        somapares+=vetor[i]
        contador++
    }
}

if(contador > 0){
    const media = somapares / contador
 console.log(`A média é ${media}`)
}
else{ console.log("Não existem números pares no seu vetor")}