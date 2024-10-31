console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

const dias = []
let somatemp = 0
let contador = 7
let n = 0

for(let i =0;i<7;i++){
    dias.push(Math.floor(Math.random()*30)) //Para add automaticamente números até a quantidade de 30 que é o limite mais comum as temperaturas
}
console.log("As tempertauras durante os 7 dias são: " , dias)

for(let i =0;i<7;i++){
    somatemp += dias[i]    
}
const media = somatemp / contador

for(let i =0;i<7;i++){

    if(dias[i]> media){
        n++}

}

console.log("Os dias em que a temperatura estava acima da média foram: ", n)




