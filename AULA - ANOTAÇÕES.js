const readline=require('prompt-sync')
const imput=readline()





/* MÉTODOS S.TRING */

/*console.log('Olá, mundo !')
const nome = 'Íthan'
console.log(nome)*/

/*let nome = 'Íthan'
nome.includes('Í') //para dizer se há A letra I no nome, se houver, ele vai retornar verdadeiro
console.log(nome.includes('Í'))*/

/*let nome = 'Íthan'
nome.concat('Amaral')
nome = nome.concat('Amaral') //para concatenar ao nome mais alguma info
console.log(nome)*/

/*let nome = 'Íthan'
console.log(nome.toUpperCase())*/


/* MÉTODOS PARA NÚMEROS */

/*let numero = 2179.55889
numero.toFixed(3)
numero = numero.toFixed(3) //Para  fazer aproximação decimal do número
console.log(numero)*/


/* CÁLCULO AREA DO CIRCULO 


const pi = Math.PI
let raio = Math.random() * 100
let area = pi * Math.pow(raio,2)

raio = raio.toFixed(2)
area = area.toFixed(2)

console.log('para o circulo de raio = ',raio)
console.log('A area foi de = ',area)*/

/*OU*/

/* CÁLCULO AREA DO CIRCULO 


const pi = Math.PI
let raio = Math.random() * 100
let area = pi * Math.pow(raio,2)

console.log('para o circulo de raio = ',raio.toFixed(2))
console.log('A area foi de = ',area.toFixed(2))*/

/* PARA CITAR VARÍAS VARIÁVEIS NO CONSOLE.LOG, UTILIZA-SE ${``}, COMO NO EXEMPLO ANTERIOR, OB: UTILIZA-SE CRASES, NÃO ASPAS

const pi = Math.PI
let raio = Math.random() * 100
let area = pi * Math.pow(raio,2)

console.log(`O raio foi de ${raio.toFixed(2)} e a área foi de ${area.toFixed(2)}`)*/


/*PARA SOLICITAR ENTRADA DE DADOS PELO TECLADO 
const prompt = require('prompt-sync')
const input = prompt()
const idade = input('Qual a sua idade? ')
console.log(idade) */

/*FOR 
for(let x = 0;x <= 100;x++){
    console.log(`O número é ${x}`)
}*/





/*Exercicio de tabuada
console.log("Digite um numero: ")
const x = parseFloat(imput())
for(let i = 0; i<=10; i++){
    console.log(`${x} * ${i} = ${i*x}`)
}*/

/*Método for of 
const ArrayNomes = ['Bruna','Fernando','Papolo','Caio']

for(const nome of ArrayNomes){
    console.log(nome)
}*/

/*const nome = 'Ithan'
const vogais = ['a','e','i','o','u']

for(const nome of vogais){
    if()
    console.log(nome)
}*/

function somadenumeros(numero1,numero2){
    if(typeof numero1 === 'number' && typeof numero2 === 'number'){
    soma = numero1 + numero2
    console.log("A soma é: ", soma)
    }
    else{console.log("Mals mano, parece que vc não está colocando dois números inteiros")}
}

const x = parseFloat(imput("Opa, escolhe um número ai: "))
const y = parseFloat(imput("Opa coloca o outro numero agora: "))
somadenumeros(x,y)
