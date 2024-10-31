console.log('Hello, world!');
const readline=require('prompt-sync')
const imput=readline()

function vetor_positivo(array,max){
    let novo_vetor = []
    for(let i =0; i<max;i++){
        if(array[i] >= 0){
          novo_vetor.push(array[i])
        }
    }

    return novo_vetor
}

let vetor = []

for( let i = 0; i<20;i++){ //Até 20 apenas para exemplificar
    vetor.push(Math.floor(Math.random()*20))
}


let vetor_novo = vetor_positivo(vetor,20)

console.log(`O antigo vetor é: ${vetor}`)
console.log(`O novo vetor é: ${vetor_novo}`)
















