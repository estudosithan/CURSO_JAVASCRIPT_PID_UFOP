console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

let vetor = []
let vetor_novo = []
let valor
let contador = 0

for(let i = 0; i<50; i++){
  vetor.push(Math.floor(Math.random()*100)) 
}
console.log(`Bom , seu vetor aleatório é ${vetor}`)

while(valor !== 0){
valor = parseInt(imput("Insira um valor: "))
if(!vetor.includes(valor)){
vetor.push(valor)
}else{
    contador++
    console.log("Valor já pertencente ao vetor")
}
}
console.log(`Não foi possível adicionar os valores ${contador} vezes `)

for(let i = 0; i<vetor.length; i++){
    if(vetor[i]%2 !==0){
    vetor_novo.push(vetor[i]) 
    }
  }
  console.log(`Bom , seu novo vetor é: ${vetor_novo}`)










